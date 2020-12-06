<script>
  import { scale, fly } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
  let y;
</script>

<svelte:window bind:scrollY={y} />
{#if y > 250}
  <div
    on:click={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    transition:scale={{ easing: quintInOut, duration: 300, scale: 0 }}
    class="shadow-lg bg-primary-700 p-5 cursor-pointer rounded-full fixed bottom-0 right-0 mr-10 mb-10 z-50 hover:bg-primary-900 hover:text-white">
    <svg
      transition:fly={{ y: 300, duration: 500, easing: quintInOut }}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="fill-current w-5 h-5 text-white">
      <g stroke="none" stroke-width="1">
        <g id="icon-shape">
          <polygon
            id="Combined-Shape"
            points="9 3.82842712 2.92893219 9.89949494 1.51471863 8.48528137 10 0 10.7071068 0.707106781 18.4852814 8.48528137 17.0710678 9.89949494 11 3.82842712 11 20 9 20 9 3.82842712" />
        </g>
      </g>
    </svg>
  </div>
{/if}
