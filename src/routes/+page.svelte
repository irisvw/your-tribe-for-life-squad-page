<script>
    let { data } = $props();
    const members = data.members;

    members.forEach(member => {
        if (member.birthdate) {
            const dateString = member.birthdate;
            const date = new Date(dateString); // converteert datum string naar Date object
            member.birthmonth = date.toLocaleString('default', { month: 'short' }).toLowerCase(); // converteert datum naar maandnaam en slaat het op in member
            member.birthday = date.getDate(); // converteert datum naar dag van de maand en slaat het op in member
        } else {
            member.birthmonth = "onbekend";
            member.birthday = "onbekend";
        }
    });

    const membersByMonth = Object.groupBy(members, ({ birthmonth }) => birthmonth);
</script>

<h1>Kalender</h1>

<details>
    <summary>Januari</summary>
    {#each membersByMonth.jan as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>Februari</summary>
    {#each membersByMonth.feb as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>Maart</summary>
    {#each membersByMonth.mar as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>April</summary>
    {#each membersByMonth.apr as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>Mei</summary>
    {#each membersByMonth.may as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>Juni</summary>
    {#each membersByMonth.jun as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>Juli</summary>
    {#each membersByMonth.jul as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>Augustus</summary>
    {#each membersByMonth.aug as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>September</summary>
    {#each membersByMonth.sep as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>Oktober</summary>
    {#each membersByMonth.oct as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>November</summary>
    {#each membersByMonth.nov as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>December</summary>
    {#each membersByMonth.dec as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<details>
    <summary>Onbekend</summary>
    {#each membersByMonth.onbekend as member}
    <li>
        <a href="/{member.id}">{member.name} - {member.birthday}</a>
    </li>
    {/each}
</details>

<style>
    h1 {
        display: flex;
        justify-content: center;
        font-size: 2.6rem;
    }

    details {
        background-color: white;
        margin: 1em;
        padding: 1em;
        border-radius: 1em;
        border: 0.125em solid;
    }

    summary {
        font-size: 2rem;
        list-style: none;
        position: relative;
        display: flex;
        justify-content: center;
    }

    summary::after {
        content: "▼";
        position: absolute;
        right: 0;
    }

    details[open] > summary::after {
        content: "▼";
        rotate: 180deg;
    }

    summary::-webkit-details-marker {
        display: none;
    }
</style>
