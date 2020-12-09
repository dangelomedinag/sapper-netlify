<script>
  import { createEventDispatcher } from 'svelte';
  export let data;
  const { categorias } = data;
  const dispatch = createEventDispatcher();
  let form = {
    nombre: '',
    descripcion: '',
    precio: undefined,
    descuento: undefined,
    salient: true,
    categoria: categorias[0].id,
    files: [],
  };

  const formAction = async (e) => {
    const formData = new FormData(e.target);

    const promise = await fetch('/api/crear', {
      method: 'POST',
      body: formData,
    });

    if (promise.ok) {
      // location.reload();
      dispatch('popover', { message: 'Producto creado correctamente' });
    }
  };
</script>

<form
  on:submit|preventDefault={formAction}
  action="/api/crear"
  method="post"
  enctype="multipart/form-data">
  <section class="flex flex-col">
    <label class="cursor-pointer" for="nombre">Nombre del Producto:</label>
    <input
      bind:value={form.nombre}
      class=" border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
      type="text"
      name="nombre"
      id="nombre"
      placeholder="nombre del producto" />
    <label class="cursor-pointer" for="descripcion">Descripción:</label>
    <div class="flex flex-row">
      <textarea
        class="w-1/2 mb-3 border border-gray-400 rounded-md outline-none p-3 focus:border-primary-700"
        name="descripcion"
        id="descripcion"
        rows="6"
        placeholder="HTML texto descripcion"
        bind:value={form.descripcion} />
      <div class="w-1/2">
        <h1 class="text-center">Previsualización</h1>
        {@html form.descripcion}
      </div>
    </div>
    <div>
      <label class="cursor-pointer" for="categoria">Categoría:</label>
      <select
        id="categoria"
        bind:value={form.categoria}
        class="mb-3 border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
        name="categoria">
        {#each categorias as categoria (categoria.id)}
          <option value={categoria.nombre + ',' + categoria.id}>
            {categoria.nombre}
            -
            {categoria.id}
          </option>
        {/each}
      </select>
      <label class="cursor-pointer" for="precio">Precio:</label>
      <input
        name="precio"
        id="precio"
        class="mb-3 border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
        type="number"
        bind:value={form.precio}
        placeholder="ej. 1800" />
      <label class="cursor-pointer" for="descuento">Descuento:</label>
      <input
        name="descuento"
        id="descuento"
        class="mb-3 border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
        type="number"
        bind:value={form.descuento}
        placeholder="ej. 500" />
    </div>

    <label for="salient" class="cursor-pointer">salient:
      <input
        class="cursor-pointer"
        id="salient"
        name="salient"
        type="checkbox"
        bind:checked={form.salient} />
    </label>
    <label class="cursor-pointer" for="imgsProd">cargar imagenes:</label>
    <input
      class="p-3 border-2 border-dashed cursor-pointer hover:bg-neutral rounded-lg"
      multiple
      accept="image/png, image/jpeg"
      bind:files={form.files}
      id="imgsProd"
      name="image"
      type="file" />
    <button
      type="submit"
      class="rounded-md w-full bg-primary-700 shadow-lg text-white px-4 py-2 hover:bg-primary-300 mt-8 text-center font-semibold focus:outline-none">log</button>
  </section>
</form>
