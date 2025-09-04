<script>
    let { data } = $props();
    const member = data.member;
</script>

<svelte:head>
    <title>{member.name}</title>
    <meta name="description" content="Profielpagina van {member.name}" />
</svelte:head>

<a href="/">Terug naar overzicht</a>
<h1>{ member.name }</h1>