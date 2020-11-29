<script context="module">
  export async function preload(page, session) {
    const filter = page.query.filter;
    console.log(filter);
    return { filter };
  }
</script>

<script>
  import { scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { quintInOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import axios from 'axios';
  let productos = [];
  let categorias = [];

  onMount(async () => {
    const getProductos = await axios.get('api/productos.json');
    const getCategorias = await axios.get('api/categorias.json');
    productos = getProductos.data;
    categorias = getCategorias.data;
  });
  import squareImage from '../../utils/urlopt';

  // export let productos;
  // export let categorias;
  export let filter;

  let curr_filter;
  let curr_sort;

  $: if (filter !== 'undefined') {
    // filter = 'todos';
    curr_filter = filter;
  }

  // $: console.log(filter, curr_filter);
</script>

<style lang="scss">
  // ul {
  //   margin: 0 0 1em 0;
  //   line-height: 1.5;
  // }

  header {
    height: 150px;
    background-color: theme('colors.secondary');

    h1 {
      color: white;
    }
  }
</style>

<svelte:head>
  <title>Productos - conSweet</title>
</svelte:head>

<header class="flex flex-col justify-center items-center">
  <h1
    class="title text-3xl leading-9 font-extrabold tracking-tight text-neutral sm:text-4xl sm:leading-10">
    Productos
  </h1>
  <nav class="text-primary-700 font-bold my-8" aria-label="Breadcrumb">
    <ol class="list-none p-0 inline-flex border border-primary-700 rounded-md">
      <!-- {#each categorias as categoria (categoria.id)}
        <li class="flex items-center p-2 ">
          <a href="/">{categoria.nombre}</a>
          <svg
            class="fill-current w-3 h-3 mx-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"><path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
        </li>
      {/each} -->
      <li class="hover:cursor-pointer relative flex items-center p-1">
        <select
          bind:value={curr_filter}
          class="bg-transparent p-2 border-none outline-none"
          name="filtercategoria"
          id="filter">
          <option class="appearance-none p-2" value="todos">todos</option>
          {#each categorias as categoria (categoria.id)}
            <option class="appearance-none p-2" value={categoria.id}>
              {categoria.nombre}
            </option>
          {/each}
        </select>
      </li>
      <li class="hover:cursor-pointer relative flex items-center p-1">
        <select
          bind:value={curr_sort}
          class="bg-transparent p-2 border-none outline-none"
          name="filtercategoria"
          id="filter">
          <option class="appearance-none p-2" value="mayor">
            mayor precio
          </option>
          <option class="appearance-none p-2" value="menor">
            menor precio
          </option>
        </select>
      </li>
    </ol>
  </nav>
</header>

<main class="w-full">
  <div class="px-6 grid grid-cols-4 gap-4">
    {#each productos
      .filter((item) =>
        curr_filter === 'todos'
          ? item.nombre
          : item.categoria_id === curr_filter
      )
      .sort(function (a, b) {
        return curr_sort === 'mayor' ? a.precio + b.precio : a.precio - b.precio;
      }) as item (item.id)}
      <div
        out:scale={{ duration: 350, scale: 0, easing: quintInOut }}
        animate:flip={{ delay: 350, duration: 500, easing: quintInOut }}
        class="col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-1 flex flex-col items-center">
        <div class="bg-white rounded-lg mt-5">
          <img
            src={item.imgs.length > 0 ? squareImage(item.imgs[0], 'w_500,h_250,c_fill') : 'https://source.unsplash.com/MNtag_eXMKw/1600x900'}
            class="h-40 rounded-md"
            alt="" />
        </div>
        <div class="bg-white shadow-lg rounded-lg mt-4 w-11/12">
          <div class="py-5 px-5">
            <span class="font-bold text-secondary text-lg">{item.nombre}</span>
            <div class="flex items-center justify-between">
              <div class="text-md text-primary-500 font-light">
                <a
                  rel="prefetch"
                  class="underline"
                  href={`productos/${item.id}?filter=filtertest&categoria=testcategoria`}>ver
                  más</a>
              </div>
              <div class="text-2xl text-primary-700 font-bold">
                $
                {item.precio}
              </div>
            </div>
          </div>
        </div>
      </div>
    {:else}
      <div class="col-span-4 flex justify-center items-center">
        <p class="font-light text-3xl p-12">cargando productos...</p>
      </div>
    {/each}
  </div>
</main>

<!-- <ul>
  {#each productos as item}
    <li><a rel="prefetch" href={`productos/${item.id}`}>{item.nombre}</a></li>
  {/each}
</ul> -->
<!-- <div class="w-full h-full">
  <a
    class="w-full mt-5 p-3 border rounded-md border-primary-700"
    href="productos/crear">Crear producto</a>
</div> -->
<!-- 
<div class="px-6 my-5 sm:my-8 sm:flex sm:justify-center lg:justify-start">
  <div class="rounded-md shadow">
    <a
      href="productos/crear"
      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-900 md:py-4 md:text-lg md:px-10">
      Crear producto
    </a>
  </div>
</div> -->
