<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
  let show = false;
  onMount(() => {
    show = true;
  });
</script>

{#if show}
  <div
    in:fly={{ delay: 300, y: -300, opacity: 0, duration: 1600, easing: quintInOut }}>
    <slot />
  </div>
{/if}
