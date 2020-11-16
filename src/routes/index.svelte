<script>
  import Header from '../components/Header.svelte';
</script>

<style lang="scss">
  p {
    text-align: center;
    margin: 0 auto;
    margin: 1em auto;
  }
</style>

<svelte:head>
  <title>conSweet</title>
</svelte:head>

<Header>
  Antojo de algo rico?
  <span slot="sub">Estas en el lugar indicado</span>
  <!-- <a href="." slot="btn">xxxxx</a> -->
</Header>

<p>
  <strong>Try editing this file (src/routes/index.svelte) to test live
    reloading.</strong>
</p>
