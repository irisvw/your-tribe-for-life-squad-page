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
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    members.forEach((member) => {
        if (member.birthdate) {
            const dateString = member.birthdate;
            const date = new Date(dateString); // converteert datum string naar Date object
            member.month_number = date.getMonth();
            member.day_number = date.getDate(); // converteert datum naar dag van de maand en slaat het op in member
        } else {
            member.month_number = 12;
            member.day_number = "?";
        }
    });

    members.push({"name": "Birthday Every Day", "month_number": currentMonth, "day_number": currentDay});

    // Maak een nieuw array gebaseerd op de months array.
    // Voor elke maand, kopieer alle members wiens month_number overeen komen met de index.
    // Sorteer daarna alleen die members.
    const membersByMonth = months.map((month, index) =>
        members
            .filter((member) => member.month_number === index)
            .sort((a, b) => a.day_number - b.day_number),
    );
</script>

<svelte:head>
    <title>Overzichtspagina</title>
    <meta name="description" content="Overzichtspagina Squadpage" />

    <style>
        body {
            background-color: var(--bg-general);
            margin: 1rem 2rem;
            min-height: 100vh;
        }
    </style>
</svelte:head>

<h1 class="animation-fade-in" style="--delay: 0.25s">Kalender</h1>

{#each months as month, i}
    <details class="animation-fade-in--down" style="--delay: {i * 0.05}s">
        <summary>{month}</summary>
        <ul>
            {#each membersByMonth[i] as member}
                <li class="members-birthday">
                    <a href="/{member.id}">
                        <span class="day-number">{member.day_number}</span>
                        <span class="member-name { member.day_number == currentDay && member.month_number == currentMonth ? "birthday-mode" : "" }">{member.name}</span>
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
        font-family: var(--primary-font-family);
    }

    details {
        background-color: var(--secondary-color);
        margin: 1em;
        padding: 1em;
        border-radius: 1em;
        border: 0.125em solid;

        &[open] > summary::after {
        content: "▼";
        rotate: 180deg;
        transition: 0.3s;
    }

        @media screen and (min-width: 768px) {
            max-width: 35em;
            margin: 1em auto 1em auto;
        }
    }

    summary {
        font-family: var(--primary-font-family);
        font-size: 2rem;
        list-style: none;
        position: relative;
        display: flex;
        justify-content: center;

        &::after{
        content:"▼";
        position: absolute;
        right: 0;
        transition: 0.3s;
        }
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
        font-family: var(--secondary-font-family);

        &:hover {
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
        font-family: var(--secondary-font-family);

        &:hover {
            background-color: #6dbf9d;
        }
    }

    .no-birthday {
        font-size: 1.1em;
        font-family: var(--secondary-font-family);
        padding: 1em;
        background-color: #aacad4;
        border-radius: 0.5em;
        color: var(--primary-text);
        display: inline-block;
    }

    .birthday-mode {
        background: linear-gradient(90deg in oklch, var(--bg-color-1), var(--bg-color-2), var(--bg-color-3));
        background-size: 400% 400%;
        
        @media (prefers-reduced-motion: no-preference) {
            animation: gradient 3.5s ease infinite;
        }

        &:hover {
            cursor: url('$lib/assets/party.svg'), pointer;
        }

        &::after {
          padding-left: .25em;
          content: "🥳";
        }
    }

    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
