<script>
  import favicon from "$lib/assets/favicon.png";
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    // start de view transition en wacht op navigatie
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
  :global(::view-transition-old(root), ::view-transition-new(root)) {
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-fill-mode: both;
  }

  :global(::view-transition-old(root)) {
    animation-name: zoomOutFade;
  }

  :global(::view-transition-new(root)) {
    animation-name: zoomIn;
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes zoomOutFade {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(1.1);
      opacity: 0;
    }
  }
</style>
