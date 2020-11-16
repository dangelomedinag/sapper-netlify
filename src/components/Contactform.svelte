<script>
  import { quintInOut } from 'svelte/easing';

  // import { goto } from '@sapper/app';
  import { scale } from 'svelte/transition';
  let sendform = false;
  let form = {
    titulo: '',
    comentario: '',
  };

  $: titulovalid = form.titulo.length >= 10;
  $: comentariovalid = form.comentario.length >= 10;

  $: deny =
    !form.titulo || !form.comentario || !titulovalid || !comentariovalid;

  $: console.log(form.comentario);
  const handleSubmit = async () => {
    const { titulo, comentario } = form;
    if (titulo && comentario) {
      const res = await fetch('contacto.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, hora: new Date() }),
      });

      const updateProductos = await res.json();
      console.log(updateProductos);
      // goto('contacto.json');
      sendform = !sendform;
      form.titulo = '';
      form.comentario = '';
      setTimeout(() => {
        sendform = false;
      }, 3000);
    }
  };
</script>

<style>
  .submit:disabled {
    opacity: 0.5;
    background: grey;
    cursor: not-allowed;
  }
  .formulario {
    /* min-height: 100%; */
    height: 800px;
  }
</style>

<div class="bg-white max-w-md my-8 mx-auto formulario">
  {#if !sendform}
    <div transition:scale={{ scale: 0, duration: 600, easing: quintInOut }}>
      <div class="title">
        <h1 class="font-bold text-center text-primary-700">
          Tambien puedes dejarnos un comentario anonimo
        </h1>
      </div>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form mt-4">
          <div class="flex flex-col text-sm">
            <label for="title" class="font-bold mb-2">Título</label>
            <input
              bind:value={form.titulo}
              class=" appearance-none border rounded-md border-primary-200 p-2 focus:outline-none focus:border-primary-700"
              type="text"
              placeholder="Introduce un título"
              required />
            {#if !titulovalid}
              <p class="text-primary-300">*minimo 10 caracteres</p>
            {:else}
              <p class="text-green-300">✔</p>
            {/if}
          </div>

          <div class="text-sm flex flex-col">
            <label
              for="description"
              class="font-bold mt-4 mb-2">Comentario</label>
            <textarea
              bind:value={form.comentario}
              class=" appearance-none w-full border border-primary-200 p-2 h-40 focus:outline-none focus:border-primary-700"
              placeholder="Escribe aqui tu comentario"
              required />
            {#if !comentariovalid}
              <p class="text-primary-300">*minimo 10 caracteres</p>
            {:else}
              <p class="text-green-300">✔</p>
            {/if}
          </div>
        </div>

        <div class="submit">
          <button
            disabled={deny}
            type="submit"
            class="submit rounded-md w-full bg-primary-700 shadow-lg text-white px-4 py-2 hover:bg-primary-300 mt-8 text-center font-semibold focus:outline-none">Enviar</button>
        </div>
      </form>
    </div>
  {:else}
    <div
      transition:scale={{ scale: 0, duration: 600, easing: quintInOut }}
      class="p-6 text-center">
      <h3 class="font-bold text-3xl text-primary-700">Gracias por tu tiempo</h3>
      <p class="font-light">para nosotros es muy importante saber tu opinion</p>
    </div>
  {/if}
</div>
