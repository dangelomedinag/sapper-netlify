<script>
  import Header from '../components/Header.svelte';
  import Slidy from '../components/Slidy.svelte';
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

<Slidy />
