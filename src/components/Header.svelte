<script>
  let cssrules = {
    wrapper: 'wrapper py-12 bg-secondary w-full flex overflow-hidden',
    content: 'wrapper-content mx-auto',
    title:
      'title text-3xl leading-9 font-extrabold tracking-tight text-neutral sm:text-4xl sm:leading-10',
  };
</script>

<style lang="scss">
  .wrapper {
    background: linear-gradient(
        0deg,
        #{theme('colors.secondary')}#{80} -90%,
        theme('colors.secondary') 90%
      ),
      url('/IMG_03.jpg') no-repeat top;
    background-size: cover;
  }
</style>

<div class={cssrules['wrapper']}>
  <div class={cssrules['content']}>
    <h2 class={cssrules['title']}>
      <slot />
      <br />
      <span class="text-primary-600">
        <slot name="sub" />
        <span
          class="block mt-2 md:inline-block text-4xl md:text-4xl lg:text-6xl">
          <slot name="icons">😋🍰</slot>
        </span></span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 mr-auto">
      <div class="inline-flex rounded-md shadow">
        <slot name="btn">
          <a
            href="."
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Descúbrelo!
          </a>
        </slot>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a
          href="/productos"
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-600 bg-white hover:text-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Productos
        </a>
      </div>
    </div>
  </div>
</div>
