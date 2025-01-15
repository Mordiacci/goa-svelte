<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";

  // Define images for each gallery
  const galleryData = [
    {
      title: $_("crafting.guide.h1"),
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/689660026423345188/908125486872424508/unknown.png",
          alt: "Campfire for cooking",
        },
        {
          src: "https://cdn.discordapp.com/attachments/689660026423345188/908124751887728640/unknown.png",
          alt: "Grindstone & fletching table",
        },
      ],
    },
    {
      title: $_("crafting.guide.h2"),
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/689660026423345188/907955538707496970/unknown.png",
          alt: "Select crafting level",
        },
        {
          src: "https://cdn.discordapp.com/attachments/689660026423345188/907955610140692550/unknown.png",
          alt: "Crafting Guide",
        },
      ],
    },
    {
      title: $_("crafting.guide.h3"),
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/689660026423345188/907956807824191528/unknown.png",
          alt: "Crafting info",
        },
      ],
    },
  ];
</script>

<!-- Title and first paragraph -->
<h2 class="text-2xl font-semibold pb-4">{$_("crafting.subject")}</h2>
<p>{$_("crafting.guide.p0")}</p>

<!-- Loop through the gallery data to render galleries -->
{#each galleryData as gallery}
  <h2 class="text-xl font-semibold pb-2 pt-8">{gallery.title}</h2>
  <p>{$_(`crafting.guide.p${galleryData.indexOf(gallery) + 1}`)}</p>
  <Gallery {gallery.images} />
{/each}
