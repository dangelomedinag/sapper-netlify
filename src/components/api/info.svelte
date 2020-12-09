<script>
  export let data;
  const { categorias, current } = data;

  const categoria_parse = (categoria_id) => {
    const result = categorias.filter((item) => item.id === categoria_id);
    const name = result[0].nombre;
    return name;
  };
</script>

<style>
  .list-item::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 100%;
    left: 0;
    top: 0;
    margin-left: 0.5em;
    background: black;
  }
</style>

<code class="inline-block w-full">id: {current.id}</code>
<code class="inline-block w-full">categoria:
  {categoria_parse(current.categoria_id)}
</code>
<code class="inline-block w-full">categoria_id: {current.categoria_id}</code>
<h1 class="text-2xl py-5">{current.nombre}</h1>
<hr />
<h1>cloudinary:</h1>
<ul>
  {#each current.cloudinary as item, index}
    <li>
      <details>
        <summary class="outline-none cursor-pointer select-none">
          [{index}]
          {item.public_id}.{item.format}
          <img class="w-8 h-auto" src={item.secure_url} alt={item.format} />
        </summary>
        <ul class="relative list-item list-inside list-decimal m-0 p-0 pl-4">
          {#each Object.entries(item).sort() as [key, val] (key)}
            <li class="truncate"><strong>{key}:</strong> {val}</li>
          {/each}
        </ul>
      </details>
    </li>
    <hr />
  {/each}
</ul>
<hr />
