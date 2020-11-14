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

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Productos - conSweet</title>
</svelte:head>

<h1>Productos</h1>
<ul>
  {#each productos as item}
    <li><a rel="prefetch" href={`productos/${item.id}`}>{item.titulo}</a></li>
  {/each}
</ul>

<a href="productos/crear">Crear producto</a>
