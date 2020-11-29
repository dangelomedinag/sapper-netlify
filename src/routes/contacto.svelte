<script>
  import Contactform from '../components/Contactform.svelte';
  import ContactLista from '../components/ContactList.svelte';
</script>

<style lang="scss">
  header {
    height: 150px;
    background-color: theme('colors.secondary');

    h1 {
      color: white;
    }
  }
</style>

<header class="flex justify-center items-center">
  <h1
    class="title text-3xl leading-9 font-extrabold tracking-tight text-neutral sm:text-4xl sm:leading-10">
    ¿Deseas contactar con nosotros?
  </h1>
</header>

<div class="mt-4 px-6 mx-auto flex flex-col justify-center items-center">
  <h1 class="text-5xl text-secondary font-light text-center">
    Nos encantaria poder ayudarte 😊
  </h1>
  <p class="my-5 ">
    a traves de las siguientes vías podremos ponernos en contacto contigo
  </p>
</div>

<div class="sm:container mx-auto px-6">
  <ContactLista />

  <Contactform />
</div>
