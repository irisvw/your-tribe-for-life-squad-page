<script>
    let { data } = $props();
    const members = data.members;
    const months = [
        "Januari",
        "Februari",
        "Maart",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Augustus",
        "September",
        "Oktober",
        "November",
        "December",
        "Onbekend",
    ];

    members.forEach((member) => {
        if (member.birthdate) {
            const dateString = member.birthdate;
            const date = new Date(dateString); // converteert datum string naar Date object
            member.month_number = date.getMonth();
            member.day_number = date.getDate(); // converteert datum naar dag van de maand en slaat het op in member
        } else {
            // member.month_name = "onbekend";
            member.month_number = 12;
            member.day_number = "?";
        }
    });

    // Maak een nieuw array gebaseerd op de months array.
    // Voor elke maand, kopieer alle members wiens month_number overeen komen met de index.
    // Sorteer daarna alleen die members.
    const membersByMonth = months.map((month, index) =>
        members
            .filter((member) => member.month_number === index)
            .sort((a, b) => a.day_number - b.day_number),
    );

    console.log(membersByMonth);
</script>

<svelte:head>
    <title>Overzichtspagina</title>
    <meta name="description" content="Overzichtspagina Squadpage" />

      <style>
    body {
      background-color: #C1D1E4;
      margin: 1rem 2rem;
      min-height: 100vh;
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>
</svelte:head>

<h1>Kalender</h1>


{#each months as month, i}
    <details>
        <summary>{month}</summary>
        <ul>
            {#each membersByMonth[i] as member}
                <li class="members-birthday">
                    <a href="/{member.id}">
                        <!-- {member.day_number} {member.name} -->
                        <span class="day-number">{member.day_number}</span>
                        <span class="member-name">{member.name}</span>
                    </a>
                </li>
            {:else}
                <li class="no-birthday">No birthdays this month :(</li>
            {/each}
        </ul>
    </details>
{/each}


<style>
    h1 {
        display: flex;
        justify-content: center;
        font-size: 3rem;
        font-family: "Caprasimo", serif;
    }

    details {
        background-color: white;
        margin: 1em;
        padding: 1em;
        border-radius: 1em;
        border: 0.125em solid;

        @media screen and (min-width: 768px) {
        max-width: 35em; 
        margin: 1em auto 1em auto;
    }
    }

    summary {
        font-family: "Caprasimo", serif;
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
        transition: .3s;
    }

    details[open] > summary::after {
        content: "▼";
        rotate: 180deg;
        transition: .3s;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    ul {
        list-style: none;
    }

    .members-birthday {
        margin: 1em 0.5em 1em 0.5em;
    }

    a {
        text-decoration: none;
    }

    .members-birthday a {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .day-number {
        font-size: 2rem;
        margin: 0em 1em 0em 0em;
        color: black;
        display: flex;
        justify-content: center;
        width: 1em;
        font-family: "Belanosima", sans-serif;
        &:hover{
            color: #406a58;
        }
    }

    .member-name {
        font-size: 1.1em;
        padding: 1em;
        background-color: #aacad4;
        border-radius: 0.5em;
        color: black;
        width: 100%;
        text-align: center;
        font-family: "Belanosima", sans-serif;
        &:hover{
            background-color: #6dbf9d;
        }
    }

    .no-birthday {
        font-size: 1.1em;
        font-family: "Belanosima", sans-serif;
        padding: 1em;
        background-color: #aacad4;
        border-radius: 0.5em;
        color: black;
        display: inline-block;
    }

</style>
