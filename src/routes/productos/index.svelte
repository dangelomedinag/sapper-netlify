<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('/productos.json');
    const productos = await res.json();

    return { productos };
  }
</script>

<script>
  export let productos;
</script>

<style lang="scss">
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

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

<header class="flex justify-center items-center">
  <h1
    class="title text-3xl leading-9 font-extrabold tracking-tight text-neutral sm:text-4xl sm:leading-10">
    Productos
  </h1>
</header>
<ul>
  {#each productos as item}
    <li><a rel="prefetch" href={`productos/${item.id}`}>{item.titulo}</a></li>
  {/each}
</ul>

<a href="productos/crear">Crear producto</a>
