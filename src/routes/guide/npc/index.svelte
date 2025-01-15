<script lang="ts">
  import { _ } from "svelte-i18n";
  import Link from "$lib/components/link/Link.svelte";
  import Gallery from "$lib/components/gallery/Gallery.svelte";

  // Image data for the gallery
  const galleryImages = [
    {
      src: "TODO",
      alt: "TODO",
    },
  ];
</script>

<!-- Translated headings and paragraphs for better maintainability -->
<h2 class="text-2xl font-semibold pb-4">{$_("npc.subject")}</h2>
<p>{$_("npc.guide.p0")}</p>
<p>{$_("npc.guide.p1")}</p>

<!-- Using semantic headings and clear title structure -->
<h2 class="text-xl font-semibold pb-2 pt-8">{$_("npc.galleryTitle")}</h2>

<!-- Pass dynamic image data to Gallery component -->
<Gallery {galleryImages} />
