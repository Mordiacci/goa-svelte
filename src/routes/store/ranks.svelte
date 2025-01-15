<script context="module" lang="ts">
  import CardStoreRank from "$lib/components/card/CardStoreRank.svelte";
  import CardStoreRankLine from "$lib/components/card/CardStoreRankLine.svelte";
  import ButtonBlock from "$lib/components/button/ButtonBlock.svelte";

  export const prerender = true;

  // Centralized rank data for scalability
  const ranks = [
    {
      price: 4,
      name: "HERO",
      lines: [
        { content: "Chat Tag: ", image: "/img/store/rank_hero.png", alt: "hero" },
        { content: "Character Slots: +2" },
        { content: "Beta Access", yes: false },
        { content: "Daily Crates", yes: false },
      ],
    },
    {
      price: 9,
      name: "LEGEND",
      lines: [
        { content: "Chat Tag: ", image: "/img/store/rank_hero.png", alt: "hero" },
        { content: "Character Slots: +4" },
        { content: "Beta Access" },
        { content: "Daily Crates", yes: false },
      ],
    },
    {
      price: 15,
      name: "TITAN",
      lines: [
        { content: "Chat Tag: ", image: "/img/store/rank_hero.png", alt: "hero" },
        { content: "Character Slots: +6" },
        { content: "Beta Access" },
        { content: "Daily Crates" },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Guardians of Adelia - Store - Ranks</title>
</svelte:head>

<div class="flex flex-row gap-8">
  {#each ranks as { price, name, lines }}
    <CardStoreRank {price} {name}>
      {#each lines as line}
        <CardStoreRankLine {line.yes}>
          {#if line.image}
            <div class="flex">
              {line.content}
              <img src={line.image} alt={line.alt} class="ml-2" />
            </div>
          {:else}
            {line.content}
          {/if}
        </CardStoreRankLine>
      {/each}
      <ButtonBlock type="button" customClass="w-full" slot="button">
        Buy Now <i class="fas fa-shopping-cart" />
      </ButtonBlock>
    </CardStoreRank>
  {/each}
</div>