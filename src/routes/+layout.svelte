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
    animation-duration: 0.45s;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    animation-fill-mode: both;
  }

  :global(::view-transition-old(root)) {
    animation-name: zoomOutFade;
  }

  :global(::view-transition-new(root)) {
    animation-name: zoomIn;
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0.95);
      opacity: 0;
    }
    60% {
      transform: scale(1.02);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes zoomOutFade {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    40% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1.1);
      opacity: 0;
    }
  }
</style>
