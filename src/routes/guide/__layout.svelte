<script context="module" lang="ts">
  import Breadcrumb from "$lib/components/breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "$lib/components/breadcrumb/BreadcrumbItem.svelte";
  import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
  import { page } from "$app/stores";
  import routes from "./routes";
  import { onDestroy } from "svelte";
</script>

<script lang="ts">
  let path = "";
  const unsubscribePage = page.subscribe(({ routeId }) => (path = routeId));

  // Cleanup subscription on component destruction
  onDestroy(unsubscribePage);

  // Use reactive statements for derived values
  $: sidebarProps = {
    routes,
    activeUrl: path,
  };
</script>

<section class="container mx-auto flex flex-col lg:flex-row gap-2 my-9 p-2 bg-base-50/[.8] rounded-lg">
  <Sidebar {...sidebarProps} />
  <div class="pt-2 w-full">
    <slot />
  </div>
</section>
