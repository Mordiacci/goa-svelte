<script context="module" lang="ts">
  import Card from "$lib/components/card/Card.svelte";

  export const prerender = true;

  // Example news articles to populate the cards dynamically
  export let newsArticles = [
    { title: "News Headline 1", content: "This is the content of the first article." },
    { title: "News Headline 2", content: "This is the content of the second article." },
    { title: "News Headline 3", content: "This is the content of the third article." },
  ];
</script>

<svelte:head>
  <title>Guardians of Adelia - News</title>
</svelte:head>

<section class="news-container" aria-label="News Articles">
  {#each newsArticles as { title, content }}
    <article>
      <Card>
        <h2 slot="header">{title}</h2>
        <p>{content}</p>
      </Card>
    </article>
  {/each}
</section>

<style>
  /* Container for news cards */
  .news-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem; /* Consistent spacing between articles */
    padding-top: 4rem; /* Matches original design */
  }

  article {
    width: 100%;
    max-width: 600px; /* Ensures a consistent card size */
  }
</style>
