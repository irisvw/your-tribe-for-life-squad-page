<script>
    let { data } = $props();
    const members = data.members;

    members.forEach(member => {
        const dateString = member.birthdate;
        const date = new Date(dateString); // converteert datum string naar Date object
        member.birthmonth = date.toLocaleString('default', { month: 'short' }).toLowerCase(); // converteert datum naar maandnaam en slaat het op in member
        member.birthday = date.getDate(); // converteert datum naar dag van de maand en slaat het op in member
    });

    const membersByMonth = Object.groupBy(members, ({ birthmonth }) => birthmonth);
    console.log(membersByMonth);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<ul>
    {#each members as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.id} - {member.birthdate}</a>
    </li>
    {/each}

    <h2>Augustus</h2>
    {#each membersByMonth.aug as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</ul>
