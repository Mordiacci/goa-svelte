<script context="module" lang="ts">
  import Card from "$lib/components/card/Card.svelte";

  export const prerender = true;

  // Example news articles to populate the cards dynamically
  let newsArticles = [
    { title: "News Headline 1", content: "This is the content of the first article." },
    { title: "News Headline 2", content: "This is the content of the second article." },
    { title: "News Headline 3", content: "This is the content of the third article." },
  ];
</script>

<svelte:head>
  <title>Guardians of Adelia - News</title>
</svelte:head>

<div class="flex flex-col items-center gap-8 pt-16">
  {#each newsArticles as { title, content }}
    <Card>
      <h2 slot="header">{title}</h2>
      <p>{content}</p>
    </Card>
  {/each}
</div>

<style>
  /* Optional: add some card styling here if needed */
  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gap-8 {
    gap: 2rem;
  }

  .pt-16 {
    padding-top: 4rem;
  }
</style>
