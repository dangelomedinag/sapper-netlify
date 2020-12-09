<script context="module">
  export async function preload(page, session) {
    const filter = page.query.filter;
    return { filter };
  }
</script>

<script>
  import LoaderSpin from '../../components/LoaderSpin.svelte';
  import { prodStore, categStore } from '../../store/productos-store';
  import { scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { quintInOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  let productos = [];
  let categorias = [];

  onMount(async () => {
    if ($prodStore.length == 0) {
      await prodStore.get();
      await categStore.get();
    }
    productos = $prodStore;
    categorias = $categStore;
  });

  import squareImage from '../../utils/urlopt';
  export let filter;

  let curr_filter;
  let curr_sort;

  $: if (filter !== 'undefined') {
    curr_filter = filter;
  }
</script>

<style lang="scss">
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
      <li class="hover:cursor-pointer relative flex items-center p-1">
        <select
          bind:value={curr_filter}
          class="bg-transparent p-1 border-none outline-none font-bold cursor-pointer"
          name="filtercategoria"
          id="filter">
          <option class="appearance-none" value="todos">todos</option>
          {#each categorias as categoria (categoria.id)}
            <option class="appearance-none" value={categoria.id}>
              {categoria.nombre}
            </option>
          {/each}
        </select>
      </li>
      <li class="hover:cursor-pointer relative flex items-center p-1">
        <select
          bind:value={curr_sort}
          class="bg-transparent border-none outline-none font-bold"
          name="filtercategoria"
          id="filter">
          <option class="appearance-none" value="menor">menor precio</option>
          <option class="appearance-none" value="mayor">mayor precio</option>
        </select>
      </li>
    </ol>
  </nav>
</header>

<main class="w-full">
  <div class="px-6 grid grid-cols-4 gap-4 my-10">
    {#each productos
      .filter((item) =>
        curr_filter === 'todos'
          ? item.nombre
          : item.categoria_id === curr_filter
      )
      .sort(function (a, b) {
        if (curr_sort === 'mayor') {
          if (a.precio < b.precio) {
            return 1;
          } else {
            return -1;
          }
        } else {
          if (a.precio > b.precio) {
            return 1;
          } else {
            return -1;
          }
        }
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
                  href="productos/{item.id}">ver más</a>
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
        <!-- <p class="font-light text-3xl p-12">cargando productos...</p> -->
        <LoaderSpin />
      </div>
    {/each}
  </div>
</main>
