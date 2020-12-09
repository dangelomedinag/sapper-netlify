<script>
  import { createEventDispatcher } from 'svelte';
  export let data;
  const { comentarios, productos, categorias, current } = data;

  const dispatch = createEventDispatcher();
  let doc = current.id;
  let imgs = current.cloudinary ? current.cloudinary : [];

  let delDoc = false;
  let delDocConfirm = false;

  async function deleteDoc() {
    const promise = await fetch('/api/eliminar', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: doc, imgs }),
    });
    if (promise.ok) {
      // location.reload();
      const response = await promise.json();
      dispatch('popover', { message: 'Prodcuto eliminado exitosamente' });
    }
  }
</script>

{#if !delDoc && !delDocConfirm}
  <button
    on:click={() => (delDoc = !delDoc)}
    class="cursor-pointer text-red-500 text-md font-medium rounded-lg p-3 mt-3 border bg-transparent antialiased border-red-500 hover:bg-red-200 hover:border-red-200 hover:text-red-500">
    Eliminar Producto
  </button>
{:else if delDoc && !delDocConfirm}
  <p class="py-3 text-red-500">
    ¿Seguro que deseas eliminar
    {current.nombre}? este paso no puede desahacer
  </p>
  <button
    on:click={deleteDoc}
    class="cursor-pointer text-red-500 text-md font-medium rounded-lg p-3 mt-3 border bg-transparent antialiased border-red-500 hover:bg-red-200 hover:border-red-200 hover:text-red-500">
    Confirmar "{current.nombre}"
  </button>
  <button
    on:click={() => (delDoc = !delDoc)}
    class="cursor-pointer text-gray-400 text-md font-medium rounded-lg p-3 mt-3 border bg-transparent antialiased border-gray-400 hover:bg-gray-100 hover:border-gray-500 hover:text-gray-500">
    cancelar
  </button>
{/if}
