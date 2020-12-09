<script>
  import Dashboard from '../../components/api/dashboard.svelte';
  import LoginApi from '../../components/api/LoginApi.svelte';

  let authenticationPass = false;

  function Login(e) {
    const { passport } = e.detail;
    authenticationPass = passport;
  }
</script>

{#if authenticationPass}
  <Dashboard />
{:else}
  <LoginApi on:authentication={Login} />
{/if}
