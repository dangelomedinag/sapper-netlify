<script>
  import { goto } from '@sapper/app';
  let form = {
    titulo: undefined,
    precio: undefined,
    desc: undefined,
  };

  const handleSubmit = async () => {
    const { titulo, precio, desc } = form;
    if (titulo && precio && desc) {
      const res = await fetch('productos.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
      });

      const updateProductos = await res.status;
      console.log(updateProductos);
      goto('productos');
    }
  };
</script>

<h2>Crear un nuevo producto</h2>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    placeholder="titulo del producto"
    bind:value={form.titulo}
    required />
  <input type="number" placeholder="precio" bind:value={form.precio} required />
  <textarea placeholder="descripción" bind:value={form.desc} required />
  <button type="submit">guardar</button>
</form>
