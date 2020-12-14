<script context="module">
  export async function preload(page, session) {
    let { user } = session;
    if (!user) {
      return this.redirect(302, "/");
    }
  }
</script>

<h2>testing!</h2>
