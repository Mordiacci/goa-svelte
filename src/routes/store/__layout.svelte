<script context="module" lang="ts">
  import Breadcrumb from "$lib/components/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/components/breadcrumb/BreadcrumbItem.svelte";
</script>

<script lang="ts">
  import { page } from "$app/stores";
  import { onDestroy } from "svelte";

  let path = "";
  const unsubscribePage = page.subscribe((value) => (path = value.routeId));

  onDestroy(() => {
    unsubscribePage();
  });

  // Define `items` as an array of strings directly
  $: items = path
    .split("/")
    .filter(Boolean) // .filter(Boolean) removes empty strings
    .map((item, i, arr) => ({
      name: item,
      isFirst: i === 0,
      isLast: i === arr.length - 1,
    }));
</script>

<section class="container mx-auto">
  <Breadcrumb customClass="my-9">
    {#each items as { name, isFirst, isLast }}
      <BreadcrumbItem
        href={`/${name}`}
        first={isFirst}
        last={isLast}
      >
        {name}
      </BreadcrumbItem>
    {/each}
  </Breadcrumb>
  <slot />
</section>
