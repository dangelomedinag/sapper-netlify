<script>
  export let current, categorias, comentarios;
  const none = [current];
  let formElement;
  let form = {
    nombre: 'abc',
    descripcion: '<span class="text-red-900">Lorem Ipsum Dol</span>',
    precio: 1,
    descuento: 2,
    salient: true,
    categoria: categorias[0].id,
    new_categ: false,
    name_new_categ: '',
    files: [],
  };

  $: if (form.categoria === 'new') form.new_categ = true;
  // $: console.log(form);

  const formAction = async (e) => {
    console.log(form);
    // const {
    //   nombre,
    //   descripcion,
    //   precio,
    //   descuento,
    //   salient,
    //   categoria,
    //   new_categ,
    //   name_new_categ,
    //   files,
    // } = form;
  };
</script>

<!-- <span class="hidden">{current.nombre}</span>
<span class="hidden">{categorias}</span> -->
<h1>Create</h1>
<hr />
<form
  bind:this={formElement}
  action="/api/crear"
  method="post"
  enctype="multipart/form-data">
  <section class="flex flex-col">
    <input
      bind:value={form.nombre}
      class="mb-3 border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
      type="text"
      name="nombre"
      placeholder="nombre del producto" />
    <div class="flex flex-row">
      <textarea
        class="w-1/2 mb-3 border border-gray-400 rounded-md outline-none p-3 focus:border-primary-700"
        name="descripcion"
        id="descripcion"
        rows="6"
        placeholder="HTML texto descripcion"
        bind:value={form.descripcion} />
      <div class="w-1/2">
        <h1 class="text-center">Previsualizacion</h1>
        {@html form.descripcion}
      </div>
    </div>
    <div>
      <select
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
        <option value={'new'}>nueva categoria</option>
      </select>
      {#if form.new_categ}
        <div>
          <input
            class="mb-3 border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
            placeholder="Nombre de la nueva categoria"
            type="text"
            name="name_new_categ"
            bind:value={form.name_new_categ} />
          <button
            on:click={() => {
              form.new_categ = false;
              form.categoria = categorias[0].id;
              form.name_new_categ = '';
            }}>x</button>
        </div>
      {/if}
      <input
        name="precio"
        class="mb-3 border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
        type="number"
        bind:value={form.precio} />
      <input
        name="descuento"
        class="mb-3 border border-gray-400 rounded-md w-full outline-none p-3 focus:border-primary-700"
        type="number"
        bind:value={form.descuento} />
    </div>
    <input name="salient" type="checkbox" bind:checked={form.salient} />
    <label for="imgsProd">Upload a picture:</label>
    <input
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
