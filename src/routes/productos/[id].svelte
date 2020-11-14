<script context="module">
  export async function preload(page, session) {
    const { id } = page.params;

    const res = await fetch(`productos/${id}.json`);
    const producto = await res.json();

    return { producto };
  }
</script>

<script>
  export let producto;
  console.log(producto);
</script>

<div>
  <h2>título: {producto.titulo}</h2>
  <p>precio: {producto.precio}</p>
  <p>{producto.desc}</p>
</div>
