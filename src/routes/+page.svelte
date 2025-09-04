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
            .sort((a, b) => a.day_number - b.day_number)
    );

    console.log(membersByMonth);
</script>

<h1>Kalender</h1>

{#each months as month, i}
    <details>
        <summary>{month}</summary>
        <ul>
            {#each membersByMonth[i] as member}
                <li>
                    <a href="/{member.id}">{member.name} - {member.day_number}</a>
                </li>
            {:else}
                <li>No birthdays this month :(</li>
            {/each}
        </ul>
    </details>
{/each}

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
