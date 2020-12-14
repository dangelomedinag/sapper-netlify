<script>
  import LoaderSpin from "../../components/LoaderSpin.svelte";
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";

  const { session } = stores();

  onMount(() => {
    if ($session.user) {
      goto("/api");
    }
  });

  let form = {
    user: undefined,
    pass: undefined,
  };

  let userInput;
  let passInput;
  let waiting = false;
  let showMessage = false;
  let summitReady = false;

  function checkEmpty(event) {
    const element = event.target;

    if (element.value.length < 4) {
      element.classList.add("border-red-200");
      element.classList.remove("bg-green-100");
    } else {
      element.classList.remove("border-red-200");
      element.classList.add("bg-green-100");

      if (userInput.value.length > 4 && passInput.value.length > 4) {
        summitReady = true;
      }
    }
  }

  async function login() {
    // console.log(form.user, form.pass);
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(form.user, form.pass)
        .then((res) => {
          // console.log("paso la prueba!");
          const currentUser = firebase.auth().currentUser;
          if (user != null) {
            currentUser.getIdToken().then((data) => ($session.user = data));
          }
          // console.log($session.user);
          goto("/api");
        });
    } catch (e) {
      showMessage = !showMessage;
      let message = e.message || e;
      console.log("Something went wrong:", message);
    }
  }
</script>

<div class="container mx-auto py-24 px-6">
  <div class="max-w-sm mx-auto">
    {#if !waiting}
      <form on:submit|preventDefault={login}>
        <!-- user input -->
        <div class="flex flex-col w-full my-3">
          <label class="text-gray-400 my-1" for="user">Usuario</label>
          <input
            bind:this={userInput}
            required
            class="text-md block px-3 py-2 rounded-lg w-full bg-white bg-opacity-30 border-2 border-gray-100 placeholder-gray-400 shadow-md focus:placeholder-gray-500 focus:outline-none focus:shadow-xl"
            on:blur={checkEmpty}
            type="text"
            name="user"
            id="user"
            placeholder="Escribe tu usuario"
            bind:value={form.user} />
        </div>

        <!-- pass input -->
        <div class="flex flex-col w-full my-3">
          <label class="text-gray-400 my-1" for="pass">Contraseña</label>
          <input
            bind:this={passInput}
            required
            class="text-md block px-3 py-2 rounded-lg w-full bg-white bg-opacity-30 border-2 border-gray-100 placeholder-gray-400 shadow-md focus:placeholder-gray-500 focus:outline-none focus:shadow-xl"
            on:keyup={checkEmpty}
            type="password"
            name="pass"
            id="pass"
            placeholder="******"
            bind:value={form.pass} />
        </div>

        <!-- options checks -->
        <div class="flex justify-between my-6">
          <label for="remember">
            <input type="checkbox" id="remember" name="remember" />
            <span>mantener sesion</span>
          </label>

          <a
            href="/"
            class="cursor-pointer font-bold text-black border-b-2 border-gray-200 hover:border-gray-400">olvidaste
            tu contraseña?</a>
        </div>
        <button
          disabled={!summitReady}
          class="w-full py-4 {summitReady ? 'bg-secondary text-white hover:text-primary-700 focus:text-primary-700' : 'bg-neutral text-gray-400 cursor-not-allowed'} rounded-lg text-lg font-semibold"
          type="submit">Login</button>
      </form>
    {:else if !showMessage}
      <LoaderSpin />
    {:else}
      <div
        class="bg-red-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto w-full">
        <svg
          viewBox="0 0 24 24"
          class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
          <path
            fill="currentColor"
            d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z" />
        </svg>
        <span class="text-red-800">Usuario o contraseña invalida.</span>
      </div>
      <button
        on:click={() => {
          showMessage = false;
          waiting = false;
        }}
        class="w-full py-4 bg-neutral text-gray-400 rounded-lg text-lg font-semibold">Volver</button>
    {/if}
  </div>
</div>
