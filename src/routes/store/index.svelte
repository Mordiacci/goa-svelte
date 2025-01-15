<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Guardians of Adelia - Store</title>
</svelte:head>

<section class="flex flex-wrap -mx-2 h-96 w-full">
  {#each storeItems as { href, className, title }}
    <article class="my-2 px-2 w-full md:w-1/2">
      <a
        href={href}
        class={`btn flex items-end justify-start h-full w-full ${className} duration-200 ease-in-out hover:no-underline rounded-lg`}
      >
        <span class="capitalize text-4xl font-bold px-4 py-2">{title}</span>
      </a>
    </article>
  {/each}
</section>

<script lang="ts">
  const storeItems = [
    { href: "/store/ranks", className: "ranks", title: "Ranks" },
    { href: "/store/crates", className: "crates", title: "Crates" },
    { href: "/store/boosts", className: "boosts", title: "Boosts" },
  ];
</script>

<style>
  .btn {
    border: rgb(var(--color-base-200)) solid 4px;
  }

  .btn:hover {
    background-position: 90%;
  }

  .crates {
    background: url("/img/store/crate_preview_purple.png"),
      linear-gradient(345deg, #a855f7 15%, #7c3aed 100%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 95%;
    color: rgb(var(--color-base-800));
  }

  .crates:hover {
    border: #d56df8 solid 4px;
  }

  .ranks {
    background: url("/img/store/ranks.png"),
      linear-gradient(345deg, #facc15 15%, #df9920 100%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 95%;
    color: rgb(var(--color-base-900));
  }

  .ranks:hover {
    border: #fafa14 solid 4px;
  }

  .boosts {
    background: url("/img/store/boost.png"),
      linear-gradient(345deg, #9ecb15 15%, #578e0b 100%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 95%;
    color: rgb(var(--color-base-800));
  }

  .boosts:hover {
    border: #c2ec46 solid 4px;
  }
</style>