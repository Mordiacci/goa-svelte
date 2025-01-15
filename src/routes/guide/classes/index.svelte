<script lang="ts">
  import { _ } from "svelte-i18n";
  import Gallery from "$lib/components/gallery/Gallery.svelte";

  // Gallery data for each step
  const classStepImages = [
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839467612349005844/unknown.png",
      alt: "Step 1: Open the menu",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839470177640906782/unknown.png",
      alt: "Step 2: Click on Character",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839467838255267890/unknown.png",
      alt: "Step 3: Click on Class",
    },
    {
      src: "https://cdn.discordapp.com/attachments/689660026423345188/839467967615074304/unknown.png",
      alt: "Step 4: Select Class Tier",
    },
  ];

  // Define guide sections for headings and paragraphs
  const guideSections = [
    {
      heading: $_("classes.guide.h1"),
      paragraph: $_("classes.guide.p1"),
      images: classStepImages,
    },
    {
      heading: $_("classes.guide.h2"),
      paragraph: $_("classes.guide.p2"),
      images: [],
    },
    {
      heading: $_("classes.guide.h3"),
      paragraph: $_("classes.guide.p3"),
      images: [],
    },
  ];
</script>

<h2 class="text-2xl font-semibold pb-4">{$_("classes.subject")}</h2>
<p>{$_("classes.guide.p0")}</p>

<!-- Loop through guide sections for dynamic rendering -->
{#each guideSections as { heading, paragraph, images }}
  <h2 class="text-xl font-semibold pb-2 pt-8">{heading}</h2>
  <p class="pb-2">{paragraph}</p>

  <!-- Render gallery if there are images for this section -->
  {#if images.length > 0}
    <Gallery {images} />
  {/if}
{/each}
