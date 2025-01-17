<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Guardians of Adelia - Map</title>
  <meta name="description" content="Explore the interactive map of Guardians of Adelia and discover new adventures in this fantasy MMORPG." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="container h-screen py-12 mx-auto">
  <iframe
    class="w-full h-full rounded-lg border-4"
    title="Interactive Map of Guardians of Adelia"
    aria-label="Interactive map showcasing the Guardians of Adelia world"
    src="https://master.d2esxhypr1dlpv.amplifyapp.com"
  ></iframe>
</div>
