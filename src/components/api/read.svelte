<script>
  export let data;
  const { current } = data;
</script>

<p>{current.descripcion}</p>
<p>{current.tipo}</p>
<input type="number" value={current.precio} disabled />
<input type="number" value={current.descuento} disabled />
<input
  type="checkbox"
  checked={current.salient}
  value={current.salient}
  disabled />
<div class="flex flex-row flex-wrap">
  {#each current.imgs as img (img)}
    <img src={img} class="w-32 h-auto" alt="" />
  {/each}
</div>
