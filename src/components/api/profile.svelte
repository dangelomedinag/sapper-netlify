<script>
  import { stores } from "@sapper/app";

  const { session } = stores();

  import { goto } from "@sapper/app";

  async function logout() {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        $session.user = false;
        goto("/api/login");
      });
  }
</script>

<div class="fixed bg-black bg-opacity-50 w-screen h-screen z-50" />
<div
  class="absolute z-50 top-0 right-0 mt-16 bg-neutral shadow-lg p-10 flex flex-col">
  <a href="/">Inicio</a>
  <button on:click={logout}>logout</button>
</div>
