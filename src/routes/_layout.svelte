<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
  import TransitionWrapper from '../components/TransitionWrapper.svelte';
  import ScrollTop from '../components/ScrollTop.svelte';
  export let segment;
</script>

{#if segment !== 'api' && segment !== 'admin'}
  <TransitionWrapper>
    <ScrollTop />
    <Nav {segment} />
    <slot />

    <Footer />
  </TransitionWrapper>
{:else}
  <slot />
{/if}
