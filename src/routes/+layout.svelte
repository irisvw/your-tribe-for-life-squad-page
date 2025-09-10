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
		--bg-color-1: #DAC1E4;
		--bg-color-2: #C1D1E4;
		--bg-color-3: #FAE3B8; 
		--error-color:#ff7171;
		--primary-text:#000000 ;
		--secondary-text:#FFFFFF ; 

		--border: 2px solid var(--primary-color);

	}
</style>