<script>
  import { onMount } from 'svelte';
  let current;
  let productos = [];
  let categorias = [];

  onMount(async () => {
    const getProductos = await fetch('api/productos.json');
    const getCategorias = await fetch('api/categorias.json');
    productos = await getProductos.json();
    categorias = await getCategorias.json();
    current = productos[0];
  });

  const setCurrent = (id) => {
    const newCurrent = productos.filter((item) => item.id === id);

    current = newCurrent[0];
  };

  const categoria_parse = (categoria_id) => {
    const result = categorias.filter((item) => item.id === categoria_id);
    const name = result[0].nombre;
    return name;
  };
</script>

<!-- <h1>lista de productos</h1> -->

<div class="grid grid-cols-4 gap-4">
  <div class="list min-h-screen col-span-1 overflow-scroll">
    {#each productos as producto}
      <div
        on:click={setCurrent(producto.id)}
        class="p-3 mb-2 bg-neutral cursor-pointer hover:bg-gray-300">
        <h1 class="truncate">{producto.nombre}</h1>
        <div class="text-xs">id: <code>{producto.id}</code></div>
      </div>
      <hr />
    {:else}no hay productos{/each}
  </div>
  <div class="list col-span-3 flex flex-col">
    {#if current}
      <code>categoria: {categoria_parse(current.categoria_id)}</code>
      <code>id: {current.id}</code>
      <code>categoria_id: {current.categoria_id}</code>
      <h1>{current.nombre}</h1>
      <hr />
      <p>{current.descripcion}</p>
      <p>{current.tipo}</p>
      <input type="number" value={current.precio} />
      <input type="number" value={current.descuento} />
      <input
        type="checkbox"
        checked={current.salient}
        value={current.salient} />
      <div class="flex flex-row">
        {#each current.imgs as img (img)}
          <img src={img} class="w-32 h-auto" alt="" />
        {/each}
      </div>
    {/if}
  </div>
</div>
