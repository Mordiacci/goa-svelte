<script context="module" lang="ts">
  import ButtonBlock from "$lib/components/button/ButtonBlock.svelte";
  export const prerender = true;
</script>

<svelte:head>
  <title>Guardians of Adelia - Login</title>
</svelte:head>

<div class="flex flex-col w-96 rounded-lg mx-auto card">
  <div class="px-0 sm:px-4 text-center">
    <h1 class="font-bold text-2xl py-6">Account Login</h1>
    <p class="italic py-4">
      Login with a Microsoft account that owns Minecraft to directly link your
      Minecraft account.
    </p>
    <ButtonBlock type="button" style="primary">
      <i class="fab fa-microsoft pr-2" />Login With Microsoft
    </ButtonBlock>

    <div class="divider py-4">OR</div>

    <p class="italic pb-4">
      Login with an alternative social account. You will have to link your
      Minecraft account manually with an in-game command.
    </p>

    <div class="flex justify-center gap-2 pb-4">
      {#each socialLogins as { name, icon, color }} 
        <button 
          class="oauth-link" 
          style="background-color: {color};" 
          aria-label={`Login with ${name}`} 
          type="button">
          <i class={`fab fa-${icon}`} />
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .card {
    background-color: rgba(15, 23, 42, 0.55);
  }

  .divider {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }

  .oauth-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    color: rgb(var(--color-base-900));
    cursor: pointer;
    text-decoration: none;
  }

  .oauth-link:hover {
    transform: translateY(-4px);
  }

  .oauth-link:disabled {
    cursor: default;
    background-color: rgb(var(--color-base-200));
  }

  /* Custom color definitions for each provider */
  .oauth-link.facebook {
    background-color: #3763d2;
  }

  .oauth-link.discord {
    background-color: #7289da;
  }

  .oauth-link.twitch {
    background-color: #7b5dfa;
  }

  .oauth-link.google {
    background-color: #fd434f;
  }

  .oauth-link.minecraft {
    background-color: #00aa00;
  }

  .oauth-link.twitter {
    background-color: #1abcff;
  }
</style>

<script lang="ts">
  // Defining social login providers with their names, icons, and colors
  let socialLogins = [
    { name: "Facebook", icon: "facebook", color: "#3763d2" },
    { name: "Discord", icon: "discord", color: "#7289da" },
    { name: "Twitch", icon: "twitch", color: "#7b5dfa" },
    { name: "Google", icon: "google", color: "#fd434f" },
    { name: "Minecraft", icon: "minecraft", color: "#00aa00" },
    { name: "Twitter", icon: "twitter", color: "#1abcff" },
  ];
</script>
