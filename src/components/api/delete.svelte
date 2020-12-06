<script>
  import { createEventDispatcher } from 'svelte';
  import Info from './info.svelte';

  export let current, categorias;
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
    console.log(promise);
    if (promise.ok) {
      // location.reload();
      const response = await promise.json();
      console.log(response);
      dispatch('popover', { message: 'Prodcuto eliminado exitosamente' });
    }
  }
</script>

<h1>Delete</h1>
<Info {categorias} {current} />
<hr />

{#if !delDoc && !delDocConfirm}
  <button
    on:click={() => (delDoc = !delDoc)}
    class="cursor-pointer text-red-500 text-md font-medium rounded-lg p-3 mt-3 border bg-transparent antialiased border-red-500 hover:bg-red-200 hover:border-red-200 hover:text-red-500">
    Eliminar Producto
  </button>
{:else if delDoc && !delDocConfirm}
  <button
    on:click={deleteDoc}
    class="cursor-pointer text-red-500 text-md font-medium rounded-lg p-3 mt-3 border bg-transparent antialiased border-red-500 hover:bg-red-200 hover:border-red-200 hover:text-red-500">
    Confirmar
  </button>
{/if}
