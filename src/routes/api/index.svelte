<script>
  import { onMount } from 'svelte';
  let productos = [];
  onMount(async () => {
    const promise = await fetch('api/productos.json');
    const res = await promise.json();

    productos = res;
  });
</script>

<h1>lista de productos</h1>

{#each productos as producto}
  <div class="rounded-lg p-3 mb-2 shadow-lg">
    <h1>{producto.nombre}</h1>
    <p>{producto.descripcion}</p>
    <div>id: <code>{producto.id}</code></div>
  </div>
{:else}no hay productos{/each}
