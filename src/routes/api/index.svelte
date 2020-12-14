<script context="module">
  export async function preload(page, session) {
    let { user } = session;
    if (!user) {
      return this.redirect(302, "/api/login");
    }
  }
</script>

<script>
  import Dashboard from "../../components/api/dashboard.svelte";
</script>

<Dashboard />
