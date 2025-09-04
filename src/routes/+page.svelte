<script>
    let { data } = $props();
    const members = data.members;
</script>

<svelte:head>
    <title>Overzichtspagina</title>
    <meta name="description" content="Overzichtspagina Squadpage" />
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<ul>
    {#each members as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.id}
        <img src="{member.avatar}" alt="De avatar van {member.name}"></a>
    </li>
    {/each}
</ul>
