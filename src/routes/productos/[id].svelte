<script context="module">
  export async function preload(page, session) {
    const { id } = page.params;
    const res = await this.fetch(`productos/${id}.json`);

    if (res.status == 200) {
      const producto = await res.json();
      return { producto };
    }
    if (res.status == 404) {
      const { error } = await res.json();
      this.error(404, error);
    }
  }
</script>

<script>
  import ContactList from '../../components/ContactList.svelte';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
  export let producto;
  let max_img_count = 5;
  let playcount = 0;
  $: currImg = producto.imgs[playcount];

  onMount(() => {
    const interval = setInterval(() => {
      playcount = playcount + 1;
      if (playcount >= producto.imgs.length) playcount = 0;
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<style lang="scss">
  header {
    height: 150px;
    background-color: theme('colors.secondary');

    h1 {
      color: white;
    }
  }

  .lightbox {
    max-width: 100vw;
    height: 350px;
    min-height: 350px;

    @media (min-width: 640px) {
      max-width: 100vw;
      min-height: 400px;
    }
    @media (min-width: 768px) {
      max-width: 100%;
      min-height: 500px;
    }
  }
  .preview {
    width: 100px;
  }
  .bg-price {
    background: url('/logo-iso.svg') no-repeat center 430%;
    background-size: 90% 90%;
  }
</style>

<svelte:head>
  <title>Productos - {producto.tipo}</title>
</svelte:head>

<header class="flex flex-col justify-center items-center">
  <h1
    class="title text-3xl leading-9 font-extrabold tracking-tight text-neutral sm:text-4xl sm:leading-10">
    {producto.nombre}
  </h1>
  <nav class="text-primary-700 font-bold my-8" aria-label="Breadcrumb">
    <ol class="list-none p-0 inline-flex border border-primary-700 rounded-md">
      {#each ['productos', producto.tipo] as breadcrum, index}
        <li class="flex items-center p-2">
          <a
            class="hover:text-primary-900"
            href="/{index == 0 ? 'productos' : `productos?filter=${producto.categoria_id}`}">{breadcrum}</a>
          {#if index !== 1}
            <svg
              class="fill-current w-3 h-3 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"><path
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" /></svg>
          {/if}
        </li>
      {/each}
    </ol>
  </nav>
</header>
<div class="w-full mx-auto text-center">
  <div class="container px-10 pb-10 mx-auto text-2xl font-light">
    <div class="uppercase my-4 font-bold text-sm text-primary-700">
      descripción
    </div>
    <hr />
    <p>{producto.descripcion}</p>
  </div>
</div>
<!-- {#if producto.imgs.length !== 0}
  <div
    class="mt-4 flex flex-row lightbox mx-auto rounded-xl border-4 border-gray-200 overflow-hidden bg-gray-200">
    <div class="preview">
      {#each producto.imgs.slice(0, max_img_count) as img, index}
        <div
          on:click={() => (currImg = producto.imgs[index])}
          class="text-white overflow-hidden font-bold hover:opacity-100 cursor-pointer {img == currImg ? 'border-r-4 border-primary-700' : 'opacity-25'} transition-all duration-300 ease-in-out"
          style="height: calc(100% / {max_img_count}); background: url({img}) no-repeat center; background-size: cover;">
          <span class="m-2 p-2 bg-primary-700 rounded-full">{index + 1}</span>
        </div>
      {/each}
    </div>

    <div class="w-full">
      {#key currImg}
        <div
          class="h-full w-full currImg border-l-4 border-primary-700"
          style="height: 100%;  background: url({currImg}) no-repeat center; background-size: cover;" />
      {/key}
    </div>
  </div>
{/if} -->
<!-- <div>
  <ContactLista />
</div> -->

<div
  class="grid grid-cols-12 rounded-xl overflow-hidden shadow-xl md:container mx-auto gap-0 mb-10">
  <div class="col-span-full lg:col-span-5 bg-secondary">
    <div
      class="bg-price text-white max-w-full h-full p-12 mx-auto flex flex-col justify-center items-center">
      <h4 class="text-2xl font-light">precio</h4>
      <h1 class="text-primary-700 font-bold text-6xl">
        <span class="text-4xl font-light">$</span>{producto.precio}
      </h1>
      <hr />
      precio por unidad - 210gr aprox.
    </div>
  </div>
  <div class="col-span-full lg:col-span-7">
    {#if producto.imgs.length !== 0}
      <div
        class="flex flex-row lightbox border-0 border-gray-200 overflow-hidden bg-gray-200">
        <div class="w-full">
          {#key currImg}
            <div
              transition:slide={{ easing: quintInOut }}
              class="h-full w-full currImg border-l-4 border-primary-700"
              style="height: 100%;  background: url({currImg}) no-repeat center; background-size: cover;" />
          {/key}
        </div>
        <div class="preview">
          {#each producto.imgs.slice(0, max_img_count) as img, index}
            <div
              on:click={() => (currImg = producto.imgs[index])}
              class="text-white overflow-hidden font-bold hover:opacity-100 cursor-pointer {img == currImg ? 'border-r-4 border-primary-700' : 'opacity-25'} transition-all duration-300 ease-in-out"
              style="height: calc(100% / {max_img_count}); background: url({img}) no-repeat center; background-size: cover;">
              <span
                class="m-2 p-2 bg-primary-700 rounded-full">{index + 1}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
<section class="container mx-auto px-12 mb-10">
  <ContactList />
</section>
