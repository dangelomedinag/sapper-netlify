<script>
  import { createEventDispatcher } from 'svelte';

  export let data;
  const { comentarios } = data;
</script>

<h1>Comentarios</h1>

<hr />
<div class="max-w-full overflow-auto">
  {#each comentarios as comentario (comentario.id)}
    <section class="py-5">
      <code> id: {comentario.id} </code>
      <code> fecha: {comentario.fecha_creacion} </code>
      <div class="border border-gray-300 p-5">
        <h1>{comentario.titulo}</h1>
        <p>{comentario.comentario}</p>
      </div>
    </section>
  {/each}
</div>
