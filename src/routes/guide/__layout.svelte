<script context="module" lang="ts">
  import Breadcrumb from "$lib/components/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/components/breadcrumb/BreadcrumbItem.svelte";
  import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
  import { page } from "$app/stores";
  import routes from "./routes";
</script>

<script lang="ts">
  // Reactive path derived from the page store
  $: path = $page.routeId;

  // Reactive props for Sidebar
  $: sidebarProps = {
    routes,
    activeUrl: path,
  };
</script>

<section class="container mx-auto my-9 p-2 flex flex-col gap-2 bg-base-50/[.8] rounded-lg lg:flex-row">
  <Sidebar {...sidebarProps} />
  <div class="w-full pt-2">
    <slot />
  </div>
</section>
