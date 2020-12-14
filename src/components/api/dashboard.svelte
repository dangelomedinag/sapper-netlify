<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { quintInOut } from "svelte/easing";
  import LoaderSpin from "../LoaderSpin.svelte";
  import Read from "./read.svelte";
  import Create from "./create.svelte";
  import Edit from "./edit.svelte";
  import Delete from "./delete.svelte";
  import Comments from "./comments.svelte";
  import Info from "./info.svelte";
  import Profile from "./profile.svelte";

  let y;
  let showMenu = false;
  let showProfile = false;

  // components
  const options = [
    { mode: "Leer", component: Read },
    { mode: "Crear", component: Create },
    { mode: "Editar", component: Edit },
    { mode: "Eliminar", component: Delete },
    { mode: "Comentarios", component: Comments },
  ];
  let selected = options[0];

  // get Data
  let data = {
    current: undefined,
    productos: [],
    categorias: [],
    comentarios: [],
  };

  // event Popover
  let popover = false;
  let popoverMessage = "";
  function popoverHandler(event) {
    getData();
    popoverMessage = event.detail.message;
    popover = !popover;
  }

  // functions
  onMount(() => {
    getData();
  });

  async function getData() {
    const getProductos = await fetch("api/productos.json");
    const getCategorias = await fetch("api/categorias.json");
    const getComentarios = await fetch("api/comentarios.json");
    let productos = await getProductos.json();

    data = {
      current: productos[0],
      productos,
      categorias: await getCategorias.json(),
      comentarios: await getComentarios.json(),
    };
  }

  const setCurrent = (id) => {
    const newCurrent = data.productos.filter((item) => item.id === id);
    data.current = newCurrent[0];
    showMenu = false;
  };
</script>

<svelte:window bind:scrollY={y} />

<!-- This is an example component -->
{#if popover}
  <div
    class="fixed bg-black bg-opacity-75 p-10 w-full h-full z-50 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
    <p
      on:click={() => (popover = !popover)}
      class="bg-white p-10 border border-gray-800">
      message:
      {popoverMessage}
    </p>
  </div>
{/if}

<!-- {#if showProfile}
  <Profile />
{/if} -->

<aside
  class="w-4/5 {showMenu ? '' : '-left-full'}  md:block h-full bg-neutral md:w-24 lg:w-56 fixed z-10 top-0 md:left-0 pt-16 lg:pt-24">
  <div
    class="w-4/5 {showMenu ? '' : '-left-full'} md:w-24 lg:w-56 fixed z-20 top-0 md:left-0 bg-white border-b-2">
    <nav class="flex flex-col justify-center items-center">
      <div class="flex justify-center font-bold items-center h-16">
        Dashboard
      </div>
      <div
        class="hidden lg:flex justify-center font-bold items-center w-full h-8 bg-secondary text-primary-700">
        Productos -
        {data.productos.length}
      </div>
    </nav>
  </div>
  <hr />
  <nav class="text-center overflow-x-hidden h-full max-h-full">
    {#each data.productos as producto (producto.id)}
      <div
        on:click={setCurrent(producto.id)}
        class="p-3 cursor-pointer hover:bg-gray-300"
        class:bg-primary-100={producto.id === data.current.id}
        class:text-primary-700={producto.id === data.current.id}>
        <h1 class="truncate">{producto.nombre}</h1>
        <div class="text-xs truncate">id: <code>{producto.id}</code></div>
      </div>
      <hr />
    {:else}
      <LoaderSpin />
    {/each}
  </nav>
</aside>

<main class="relative ml-0 md:ml-24 lg:ml-56 bg-white">
  <nav
    class="{y > 100 ? 'sticky top-0 left-0 z-50' : ''} bg-white w-full border-b-2">
    <div class="px-4 mx-auto">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="">
            <div class="flex items-center m-0 md:ml-3">
              {#each options as option}
                <buttom
                  on:click={() => {
                    selected = option;
                  }}
                  class:bg-primary-100={selected.mode === option.mode}
                  class:text-primary-700={selected.mode === option.mode}
                  class="cursor-pointer px-2 md:px-3 py-1 self-center text-sm font-medium text-gray-800 antialiased rounded-md focus:outline-none  hover:text-primary-700 focus:bg-blue-100">
                  {option.mode}
                </buttom>
              {/each}
            </div>
          </div>
        </div>
        <div class="">
          <div class="flex items-center md:ml-6">
            <input
              type="text"
              class="hidden px-4 py-1 text-sm text-gray-600 border-2 rounded focus:outline-none focus:shadow-none lg:block"
              placeholder="Search ..." />
            <button
              class="hidden p-1 ml-2 hover:text-blue-500 text-gray-700 border-2 border-transparent rounded-full hover:bg-blue-100 focus:outline-none lg:block"
              aria-label="Notifications">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 511.156 511.156"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M184.904 465.044c11.999 27.127 39.154 46.112 70.674 46.112s58.674-18.985 70.674-46.112zM255.573 48.836c20.8 0 40.772 3.67 59.306 10.389v-2.283C314.879 25.544 289.335 0 257.938 0h-4.719c-31.398 0-56.942 25.544-56.942 56.942v2.254c18.524-6.699 38.49-10.36 59.296-10.36zM442.747 435.044H68.409c-7.082 0-13.569-4.776-15.042-11.704-1.458-6.859 1.668-13.629 8.01-16.559 1.505-.976 12.833-8.897 24.174-32.862 20.829-44.01 25.201-106.005 25.201-150.263 0-79.855 64.967-144.82 144.821-144.82 79.665 0 144.512 64.652 144.82 144.245.007.191.011.383.011.575 0 44.258 4.372 106.253 25.201 150.263 11.341 23.965 22.668 31.887 24.174 32.862 6.342 2.93 9.469 9.699 8.01 16.559-1.473 6.927-7.959 11.704-15.042 11.704zm7.2-28.157h.01z" />
              </svg>
            </button>

            <button
              class="hidden p-1 ml-2 hover:text-blue-500 text-gray-700 border-2 border-transparent rounded-full hover:bg-blue-100 focus:outline-none lg:block"
              aria-label="Notifications">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 405.332c-11.777 0-21.332-9.555-21.332-21.332s9.555-21.332 21.332-21.332 21.332 9.555 21.332 21.332-9.555 21.332-21.332 21.332zm33.77-135.637c-7.551 3.477-12.438 11.094-12.438 19.395v9.578c0 11.773-9.535 21.332-21.332 21.332s-21.332-9.559-21.332-21.332v-9.578c0-24.899 14.633-47.723 37.227-58.156 21.738-10.004 37.437-36.567 37.437-49.602C309.332 151.937 285.418 128 256 128s-53.332 23.937-53.332 53.332c0 11.777-9.54 21.336-21.336 21.336S160 193.109 160 181.332c0-52.926 43.07-96 96-96s96 43.074 96 96c0 28.824-25.004 71.191-62.23 88.363zm0 0" />
              </svg>
            </button>
            <div class="ml-2">
              <button
                on:click={() => (showProfile = !showProfile)}
                class="p-1 hover:text-blue-500 text-gray-700 border-2 border-transparent rounded-full hover:bg-blue-100 focus:outline-none"
                aria-label="Notifications">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 477.867 477.867">
                  <path
                    fill-rule="evenodd"
                    d="M460.8 170.667h-28.894a203.036 203.036 0 00-8.226-19.934l20.48-20.48c6.663-6.664 6.663-17.468 0-24.132l-72.482-72.346c-6.665-6.663-17.468-6.663-24.132 0l-20.48 20.48a206.392 206.392 0 00-19.866-8.294V17.067C307.2 7.641 299.559 0 290.133 0h-102.4c-9.426 0-17.067 7.641-17.067 17.067v28.894a206.34 206.34 0 00-19.951 8.226l-20.48-20.48c-6.665-6.662-17.468-6.662-24.132 0l-72.329 72.482c-6.663 6.664-6.663 17.468 0 24.132l20.48 20.48a202.631 202.631 0 00-8.294 19.866H17.067C7.641 170.667 0 178.308 0 187.733v102.4c0 9.426 7.641 17.067 17.067 17.067h28.894a202.79 202.79 0 008.226 19.934l-20.48 20.48c-6.662 6.665-6.662 17.468 0 24.132l72.414 72.414c6.665 6.662 17.468 6.662 24.132 0l20.48-20.48a206.65 206.65 0 0019.934 8.226V460.8c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-28.894a206.34 206.34 0 0019.951-8.226l20.48 20.48c6.665 6.662 17.468 6.662 24.132 0l72.414-72.414c6.662-6.664 6.662-17.468 0-24.132l-20.48-20.48a202.67 202.67 0 008.209-19.934H460.8c9.426 0 17.067-7.641 17.067-17.067v-102.4c0-9.425-7.641-17.066-17.067-17.066zM238.933 358.4c-65.98 0-119.467-53.487-119.467-119.467s53.487-119.467 119.467-119.467S358.4 172.954 358.4 238.933c-.075 65.949-53.518 119.392-119.467 119.467z" />
                </svg>
              </button>
            </div>

            <div class="relative ml-2">
              <a
                class="p-1 flex hover:bg-blue-100 items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                id="user-menu"
                href="/productos">
                <img
                  class="w-6 h-6 rounded-full"
                  src="/consweet-logo-web.svg"
                  alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <button
            on:click={() => (showMenu = !showMenu)}
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
            <svg
              class="block w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24">
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
    {#if showProfile}
      <Profile />
    {/if}
  </nav>
  <div class="px-10 py-10">
    {#if data.current}
      {#key data.current}
        <div
          in:fly={{ delay: 300, scale: 0, y: -100, easing: quintInOut }}
          out:fly={{ delay: 0, scale: 0, y: 100, easing: quintInOut }}>
          {#if selected.mode !== 'Crear' && selected.mode !== 'Comentarios'}
            <Info {data} />
          {/if}
          <svelte:component
            this={selected.component}
            {data}
            on:popover={popoverHandler} />
        </div>
      {/key}
    {/if}
  </div>
</main>
