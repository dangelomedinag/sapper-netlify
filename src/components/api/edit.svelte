<script>
  import Info from './info.svelte';
  import { createEventDispatcher } from 'svelte';
  export let current, categorias, comentarios;

  const dispatch = createEventDispatcher();

  let form = {
    id: current.id,
    nombre: current.nombre,
    descripcion: current.descripcion,
    precio: current.precio,
    descuento: current.descuento,
    salient: current.salient,
    categoria_id: current.categoria_id,
  };

  const formAction = async (e) => {
    console.log(form);
    const promise = await fetch('/api/editar', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    // const response = await promise.json();
    console.log(promise);
    if (promise.ok) {
      // location.reload();
      dispatch('popover', { message: 'datos actualizados correctamente' });
    }
  };
</script>

<h1>Edit</h1>
<Info {categorias} {current} />
<hr />

<hr />
<div>
  <form on:submit|preventDefault={formAction}>
    <label for="categoria_id" />
    <select
      class="border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
      bind:value={form.categoria_id}
      name="categoria_id"
      id="categoria_id">
      {#each categorias as categoria (categoria.id)}
        <option value={categoria.id}>
          {categoria.nombre}
          -
          {categoria.id}
        </option>
      {/each}
    </select>
    <label for="nombre">Nombre:</label>
    <input
      class="border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
      type="text"
      id="nombre"
      bind:value={form.nombre} />

    <label for="descripcion">descripción:</label>
    <textarea
      class="border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
      id="descripcion"
      rows="3"
      bind:value={form.descripcion} />

    <div class="flex flex-row w-full justify-center items-center">
      <div class="w-full">
        <label for="precio">Precio:</label>
        <input
          class="border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
          type="number"
          id="precio"
          bind:value={form.precio} />
      </div>
      <div class="w-full">
        <label for="descuento">Descuento:</label>
        <input
          class="border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
          type="number"
          id="descuento"
          bind:value={form.descuento} />
      </div>
    </div>
    <label for="salient">Salient:</label>
    <input
      class="border border-gray-400 rounded-md outline-none p-3 focus:border-primary-700"
      type="checkbox"
      id="salient"
      bind:checked={form.salient} />
    <button
      class="w-full text-white rounded-md outline-none p-3 hover:bg-red-800 bg-primary-700"
      type="submit">
      enviar
    </button>
  </form>
</div>
