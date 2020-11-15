<script context="module">
  export async function preload(page, session) {
    const { id } = page.params;

    const res = await this.fetch(`productos/${id}.json`);

    if (res.status == 200) {
      const producto = await res.json();
      return { producto };
    }
    if (res.status == 404) {
      const { error } = await res.json();
      this.error(404, error);
    }
  }
</script>

<script>
  export let producto;
</script>

<div>
  <h2>título: {producto.titulo}</h2>
  <p>precio: {producto.precio}</p>
  <p>{producto.desc}</p>
</div>
