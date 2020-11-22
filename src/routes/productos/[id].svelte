<script context="module">
  export async function preload(page, session) {
    const { id } = page.params;
    // const { filter, categoria } = page.query;
    // console.log(page.query);

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
  import { quintInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  export let producto;
  let currImg = producto.imgs[0];
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
    height: 500px;
  }
  .preview {
    width: 100px;
  }
  .currImg {
    background-size: contain;
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
      {#each ['productos', producto.tipo, producto.nombre] as breadcrum, index}
        <li class="flex items-center p-2">
          <a href="/">{breadcrum}</a>
          {#if index !== 2}
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
<div class="container w-full mx-auto text-center">
  <div class="p-10 mx-auto text-2xl font-light">
    <p>{producto.descripcion}</p>
  </div>
</div>

<div class="flex flex-row w-full lightbox  max-w-screen-md mx-auto">
  <div class="preview px-1">
    {#each producto.imgs as img, index}
      <div
        on:click={() => (currImg = producto.imgs[index])}
        class="hover:opacity-50 cursor-pointer"
        style="height: calc(100% / {producto.imgs.length}); background: url({img}) no-repeat center; background-size: cover" />
    {/each}
  </div>
  <div class="w-full">
    <div
      transition:fade={{ duration: 600, easing: quintInOut }}
      class="h-full w-full currImg"
      style="background: url({currImg}) no-repeat center;" />
  </div>
</div>

<!-- <div>
  <h2 class="text-primary-600 bg-secondary">título: {producto.nombre}</h2>
  <p>precio: {producto.precio}</p>
  <p>{producto.descripcion}</p>
</div> -->
