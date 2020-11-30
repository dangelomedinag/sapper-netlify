<script>
  export let segment;
  let user = 'admin';
  let pass = '12345678';
  let auth = false;
  let clientuser = '';
  let clientpass = '';
  let message = false;
  function authorization() {
    if (clientuser === user && clientpass === pass) {
      auth = !auth;
    } else {
      clientuser = '';
      clientpass = '';
      message = true;
    }
  }
</script>

{#if auth}
  <slot />
{:else}
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <div>
      <label for="user">User</label>
      <input type="text" id="user" placeholder="User" bind:value={clientuser} />
      <label for="pass">Password</label>
      <input
        type="password"
        id="pass"
        placeholder="*****"
        bind:value={clientpass} />
      <button on:click={authorization}>entrar</button>
    </div>
    {#if message}
      <div class="border border-red-700 text-red-700 p-2 rounded-md">
        error... usuario o contraseña invalida.
      </div>
    {/if}
  </div>
{/if}
