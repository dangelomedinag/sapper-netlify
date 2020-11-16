<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
  export let delay = 0;
  let show = false;
  onMount(() => {
    show = true;
  });
</script>

{#if show}
  <div in:fly={{ delay, y: -300, duration: 1600, easing: quintInOut }}>
    <slot />
  </div>
{/if}
