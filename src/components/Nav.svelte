<script>
  import { fly } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
  export let segment;
  let showmenu = false;

  function menuVisible() {
    showmenu = !showmenu;
  }
</script>

<style>
  .foreground {
    cursor: pointer;
    background-color: theme('colors.secondary');
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .foreground.active {
    opacity: 0.8;
  }

  .dropdown {
    z-index: 400;
  }
  .navbar {
    max-height: 100%;
    position: relative;
    z-index: 300;
  }

  [aria-current] {
    color: theme('colors.primary.700');
  }

  a,
  button {
    text-decoration: none;
    padding: 0.45em;
    display: block;
  }
</style>

<div class="navbar bg-secondary px-4">
  <div
    class=" py-3 h-full flex justify-between items-center md:justify-start md:space-x-10">
    <div>
      <a href="/">
        <img
          class="h-8 sm:h-8 w-auto"
          src="consweet-logo-web.svg"
          alt="Workflow" />
      </a>
    </div>
    <nav class="flex space-x-3 md:space-x-10">
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href="."
        class="text-white m-0 p-0">inicio</a>

      <a
        rel="prefetch"
        aria-current={segment === 'productos' ? 'page' : undefined}
        href="productos"
        class="text-white m-0 p-0">productos</a>

      <a
        aria-current={segment === 'contacto' ? 'page' : undefined}
        href="contacto"
        class="text-white m-0 p-0">contacto</a>
    </nav>
    <div
      class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
      <a
        href="/nosotros"
        class="whitespace-no-wrap text-gray-500 hover:text-primary-700 focus:outline-none focus:text-primary-700">
        nosotros
      </a>
      <span class="m-0 p-0 inline-flex rounded-md shadow-sm">
        <a
          href="https://www.instagram.com/consweet.cl/"
          class="whitespace-no-wrap inline-flex items-center justify-center border border-transparent rounded-md text-neutral border-primary-700 bg-transparent hover:bg-primary-500 focus:outline-none focus:border-primary-700">
          Instagram
        </a>
      </span>
    </div>
    <div class="md:hidden">
      <button
        on:click={menuVisible}
        type="button"
        class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-300 hover:bg-primary-700 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</div>

{#if showmenu}
  <div class="foreground" class:active={showmenu} on:click={menuVisible} />
  <div
    transition:fly={{ duration: 600, y: 50, easing: quintInOut }}
    class="dropdown absolute top-0 inset-x-0 p-6 md:hidden">
    <div class="rounded-lg shadow-lg">
      <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <a href="." on:click={menuVisible}>
                <img
                  class="h-12 w-auto sm:h-12"
                  src="/consweet-logo-web.svg"
                  alt="Workflow" />
              </a>
            </div>
            <div class="-mr-2">
              <button
                on:click={menuVisible}
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center space-x-8">
            <a
              on:click={menuVisible}
              href="/nosotros"
              class="whitespace-no-wrap text-primary-700 hover:text-primary-900 focus:outline-none focus:text-primary-700">
              nosotros
            </a>
            <span class="m-0 p-0 inline-flex rounded-md shadow-sm">
              <a
                on:click={menuVisible}
                href="https://www.instagram.com/consweet.cl/"
                class="whitespace-no-wrap inline-flex items-center justify-center border border-transparent rounded-md text-neutral border-primary-700 bg-transparent hover:bg-primary-500 focus:outline-none focus:border-primary-700">
                Instagram
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
