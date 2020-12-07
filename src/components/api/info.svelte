<script>
  export let current, categorias, comentarios;
  const categoria_parse = (categoria_id) => {
    const result = categorias.filter((item) => item.id === categoria_id);
    const name = result[0].nombre;
    return name;
  };
</script>

<code class="inline-block w-full">id: {current.id}</code>
<code class="inline-block w-full">categoria:
  {categoria_parse(current.categoria_id)}</code>
<code class="inline-block w-full">categoria_id: {current.categoria_id}</code>
<h1 class="text-2xl py-5">{current.nombre}</h1>
<hr />
<h1>cloudinary:</h1>
<pre>
  <code>
    {JSON.stringify(current.cloudinary, null, 2)}
  </code>
</pre>
<hr />
