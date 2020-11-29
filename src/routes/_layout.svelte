<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
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

{#if segment !== 'api'}
  <Footer />
{/if}
