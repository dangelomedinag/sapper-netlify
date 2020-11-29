<script>
  import Header from '../components/Header.svelte';
</script>

<style>
  h1 {
    text-align: center;
    padding-top: 1em;
    /* padding-bottom: 1em; */
  }
</style>

<svelte:head>
  <title>conSweet - Inicio</title>
</svelte:head>

<Header />

<!-- < Slidy > -->

<div class="flex flex-col items-center justify-center mx-auto bg-gray-100">
  <h1
    class="text-center py-2 text-2xl text-primary-700 uppercase font-light tracking-wider">
    destacado
  </h1>
  <div class="w-full">
    <!-- <Slidy {...slidy_cards} let:item>
      <div class="slide">
        <img alt={item.header} src={item.src} />
        <article class="px-8">
          <h2 class="text-primary-700">{item.header}</h2>
          <p class="text-gray-500 truncate">{item.text}</p>
        </article>
      </div>
    </Slidy> -->
  </div>
</div>

<!-- < Slidy > -->
<hr />
