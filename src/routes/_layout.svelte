<script>
  import Nav from '../components/Nav.svelte';
  import TransitionWrapper from '../components/TransitionWrapper.svelte';

  export let segment;
</script>

<style>
</style>

<!-- <TransitionWrapper> -->
{#if segment !== 'api'}
  <Nav {segment} />
{/if}

<slot />
<!-- </TransitionWrapper> -->
