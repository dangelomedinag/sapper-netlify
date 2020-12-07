<script>
  import Info from './info.svelte';

  export let current, categorias, comentarios;
</script>

<h1>Read</h1>
<Info {categorias} {current} />
<hr />
<p>{current.descripcion}</p>
<p>{current.tipo}</p>
<input type="number" value={current.precio} disabled />
<input type="number" value={current.descuento} disabled />
<input
  type="checkbox"
  checked={current.salient}
  value={current.salient}
  disabled />
<div class="flex flex-row">
  {#each current.imgs as img (img)}
    <img src={img} class="w-32 h-auto" alt="" />
  {/each}
</div>
