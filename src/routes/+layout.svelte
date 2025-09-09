<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
	:root{

		--primary-font-family: "Caprasimo", serif;
		--secondary-font-family: "Belanosima", sans-serif;
	
		--primary-color:#000000 ;
		--secondary-color: #FFFFFF ;
		--bg-general: #C2ECC0;
		--bg-layer-1: #DAC1E4;
		--bg-layer-2: #C1D1E4;
		--bg-layer-3: #FAE3B8; 
		--primary-text:#000000 ;
		--secondary-text:#FFFFFF ; 

		--border: 2px solid var(var(--primary-color))

	}
</style>