<script>
  import { goto } from '@sapper/app';
  let form = {
    nombre: undefined,
    precio: undefined,
    descripcion: undefined,
  };

  const handleSubmit = async () => {
    const { nombre, precio, descripcion } = form;
    if (nombre && precio && descripcion) {
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
    placeholder="nombre del producto"
    bind:value={form.nombre}
    required />
  <input type="number" placeholder="precio" bind:value={form.precio} required />
  <textarea placeholder="descripcionripción" bind:value={form.descripcion} required />
  <button type="submit">guardar</button>
</form>
