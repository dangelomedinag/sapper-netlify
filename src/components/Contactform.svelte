<script>
  import { quintInOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import { scale } from 'svelte/transition';

  // variables
  const progress = tweened(0, {
    duration: 5000,
    easing: quintInOut,
  });
  let promise;
  let sendform = false;
  let form = {
    titulo: '',
    comentario: '',
  };

  $: titulovalid = form.titulo.length >= 10;
  $: comentariovalid = form.comentario.length >= 10;
  $: deny =
    !form.titulo || !form.comentario || !titulovalid || !comentariovalid;

  // functions
  const sendDataform = async () => {
    sendform = !sendform;
    const res = await fetch('contacto.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, hora: new Date() }),
    });
    const jsonres = await res.json();

    if (res.ok) {
      form.titulo = '';
      form.comentario = '';
      progress.set(1);
      setTimeout(() => {
        sendform = false;
        progress.set(0);
      }, 5000);
      return jsonres;
    } else {
      throw new Error(res.status);
    }
  };

  const handleSubmit = async () => {
    promise = sendDataform();
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
  progress {
    /* -webkit-appearance: none;
    appearance: none; */
    border: none;
    display: block;
    width: 100%;
    height: 5px;
  }
  progress::-webkit-progress-bar {
    background-color: theme('colors.primary.100');
  }
</style>

<div class="bg-white max-w-md my-8 mx-auto formulario">
  {#if !sendform}
    <div
      out:scale={{ scale: 0, duration: 300, easing: quintInOut }}
      in:scale={{ delay: 300, scale: 0, duration: 300, easing: quintInOut }}>
      <div class="title">
        <h1 class="font-bold text-center text-primary-700">
          Tambien puedes dejarnos un comentario anonimo
        </h1>
      </div>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form mt-4">
          <div class="flex flex-col text-sm">
            <label for="title" class="font-bold mb-2">Título
              {#if !titulovalid}
                <p class="text-primary-300 inline ml-5">
                  ( *minimo 10 caracteres )
                </p>
              {:else}
                <p class="text-green-300 inline ml-5">✔</p>
              {/if}
            </label>
            <input
              bind:value={form.titulo}
              class=" appearance-none border rounded-md border-primary-200 p-2 focus:outline-none focus:border-primary-700"
              type="text"
              placeholder="Introduce un título"
              required />
          </div>

          <div class="text-sm flex flex-col">
            <label for="description" class="font-bold mt-4 mb-2">Comentario
              {#if !comentariovalid}
                <p class="text-primary-300 inline ml-5">
                  ( *minimo 10 caracteres )
                </p>
              {:else}
                <p class="text-green-300 inline ml-5">✔</p>
              {/if}
            </label>
            <textarea
              bind:value={form.comentario}
              class=" appearance-none w-full border rounded-md border-primary-200 p-2 h-40 focus:outline-none focus:border-primary-700"
              placeholder="Escribe aqui tu comentario"
              required />
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
      in:scale={{ delay: 300, scale: 0, duration: 300, easing: quintInOut }}
      out:scale={{ scale: 0, duration: 300, easing: quintInOut }}
      class="p-6 text-center">
      {#await promise}
        <p>...conectando con el servidor</p>
      {:then}
        <h3 class="font-bold text-3xl text-primary-700">
          Gracias por tu tiempo
        </h3>
        <p class="font-light mb-3">
          para nosotros es muy importante saber tu opinion
        </p>
        <progress class=" mb-5" value={$progress} />
        {#if $progress < 0.5}
          <p>ya casi termimanos de guardar tu comentario...</p>
        {:else}
          <p>Listo! comentario guardado 🥳...</p>
        {/if}
      {:catch error}
        <h3 class="font-bold text-3xl text-primary-700 mb-2">
          Ooops! algo salio mal...😰
        </h3>
        <p style="color: red">
          codigo de error:
          {error.message}
          | Puede que sea un problema con nuestro servidor o la conexión
        </p>
        <button
          on:click={() => (sendform = !sendform)}
          class="rounded-md w-full bg-primary-700 shadow-lg text-white px-4 py-2 hover:bg-primary-300 mt-8 text-center font-semibold focus:outline-none">volver
          a intentar</button>
        <p class="text-gray-600 mt-3">
          Por favor, intentalo de nuevo. Si el error persiste recuerda que
          puedes comunicarte con nosotros a traves de instagram, whatsapp o
          email.
        </p>
      {/await}
    </div>
  {/if}
</div>
