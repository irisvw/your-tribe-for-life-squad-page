<script>
  let { data } = $props();
  import Member from "$lib/components/Member.svelte";

  const members = data.members;
  const months = [
    "JANUARI",
    "FEBRUARI",
    "MAART",
    "APRIL",
    "MEI",
    "JUNI",
    "JULI",
    "AUGUSTUS",
    "SEPTEMBER",
    "OKTOBER",
    "NOVEMBER",
    "DECEMBER",
    "ONBEKEND",
  ];
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  // beide squads zijn geselecteerd bij default. deze waarde hangt af van de selectedSquads checkboxes.
  let selectedSquads = $state(["2E", "2F"]);

  // push een member die elke dag jarig is - als hij nog niet bestaat
  if (!members.some((member) => member.name === "Birthday Every Day")) {
    members.push({
      name: "Birthday Every Day",
      month_number: currentMonth,
      day_number: currentDay,
      squads: [{ squad_id: { name: "2E" } }, { squad_id: { name: "2F" } }],
    });
  }

  members.forEach((member) => {
    // converteer elk member's brithdate naar een dag en maand
    if (member.birthdate) {
      const dateString = member.birthdate;
      const date = new Date(dateString); // converteert datum string naar Date object
      member.month_number = date.getMonth();
      member.day_number = date.getDate(); // converteert datum naar dag van de maand en slaat het op in member
    } else if (member.name == "Birthday Every Day") {
      // doe niets (haal dit weg als we birthday every day eruit halen)
    } else {
      // vul default waardes in als birthdate niet bestaat
      member.month_number = 12;
      member.day_number = "?";
    }

    // haal de namen van de squadnames uit de data en sla ze op in een nieuwe key genaamd squadnames
    member.squadnames = member.squads.map((item) => {
      return item.squad_id.name;
    });
  });

  // maak een nieuw array gebaseerd op de months array.
  // voor elke maand, kopieer alle members wiens month_number overeen komen met de index.
  // sorteer daarna alleen die members.
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
      background-color: var(--bg-color-3);
      margin: 1rem;
      min-height: 100vh;
    }
  </style>
</svelte:head>

<h1 class="animation-fade-in" style="--delay: 0.25s">Kalender</h1>

<p class="animation-fade-in intro-text" style="--delay: 0.25s">
  Welkom op onze squadpage! 🎉 <br />
  <br />
  Hier zie je precies wanneer iedereen jarig is (want die dagen zijn natuurlijk de
  leukste 🍰). Klik op een maand voor het overzicht van jarige squadleden en leer
  ze meteen beter kennen.
</p>

<!-- deze checkboxes bepalen samen de waarde van selectedSquads -->
<div class="filters animation-fade-in intro-text" style="--delay: 0.25s">
  <label>
    <input type="checkbox" value="2E" bind:group={selectedSquads} />
    2E
  </label>
  <label>
    <input type="checkbox" value="2F" bind:group={selectedSquads} />
    2F
  </label>
</div>

<!-- re-render when selectedSquad changes -->
{#key selectedSquads}
  <!-- i staat hier voor index -->
  {#each months as month, i}
    <details
      class="animation-fade-in--down"
      style="--delay: {i * 0.05}s"
      name="months"
    >
      <summary>{month}</summary>
      <ol>
        <!-- pak alle members die bij een bepaalde maand horen (0 = januari, 1 = februari etc. ).
         filter de members door te checken of hun squadnames in selectedSquads voorkomen. -->
        {#each membersByMonth[i].filter( (member) => selectedSquads.some( (squad) => member.squadnames.includes(squad), ), ) as member}
          <!-- render het member component -->
          <Member {member} {currentDay} {currentMonth} />
          <!-- als er geen members zijn uit de selectedSquads deze maand, render dan 'No birthdays this month'. -->
        {:else}
          <li class="no-birthday">No birthdays this month :(</li>
        {/each}
      </ol>
    </details>
  {/each}
{/key}

<style>
  :root {
    interpolate-size: allow-keywords;
  }

  h1 {
    display: flex;
    justify-content: center;
    font-size: 2.6rem;
    font-family: var(--primary-font-family);
    color: var(--primary-text);
  }

  .intro-text {
    text-align: center;
    font-family: var(--secondary-font-family);
    font-weight: 100;
    color: var(--primary-text);
    line-height: 1.3;
    font-size: 1.4rem;
    max-width: 30em;
    margin: auto;
    padding-bottom: 1em;
  }

  .filters {
    display: flex;
    justify-content: center;
  }

  label {
    background-color: var(--secondary-color);
    border: var(--border);
    padding: 1em;
    font-family: var(--secondary-font-family);
    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
    color: var(--primary-text);
    margin: 1em;
    cursor: pointer;
  }

  input[type="checkbox"] {
    appearance: none;
    width: 1em;
    height: 0.5em;
    margin: 0em 1em 0em 0em;
  }

  input[type="checkbox"]::before {
    content: "❌";
    font-size: 1.2em;
  }

  input[type="checkbox"]:checked::before {
    content: "🎁";
  }

  label:focus-within {
    outline: var(--border);
    outline-offset: 0.5em;
  }

  input[type="checkbox"]:focus {
    outline: none;
  }

  details {
    background-color: var(--secondary-color);
    margin: 1em;
    border: 0.125em solid;
    overflow: hidden;

    &::details-content {
      block-size: 0;
      transition-property: block-size, content-visibility;
      transition-duration: 0.5s;
      transition-behavior: allow-discrete;
      padding: 1px;
    }

    &[open]::details-content {
      block-size: auto;
      block-size: calc-size(auto);
    }

    &[open] > summary::after {
      content: "▼";
      rotate: 180deg;
      transition: 0.3s;
      margin-right: 1em;
    }

    @media (min-width: 768px) {
      max-width: 35em;
      margin: 1.5em auto;
    }
  }

  summary {
    font-family: var(--secondary-font-family);
    color: var(--primary-color);
    font-size: 1.6rem;
    list-style: none;
    position: relative;
    display: flex;
    justify-content: center;
    font-weight: 500;
    cursor: pointer;
    padding: 1rem;
    transition:
      background 0.3s,
      color 0.3s;

    &::after {
      content: "▼";
      position: absolute;
      right: 0;
      transition: 0.3s;
      margin-right: 1em;
    }
  }

  details[open] > summary {
    background-color: var(--primary-color);
    color: var(--secondary-text);
  }

  summary::-webkit-details-marker {
    display: none;
  }

  ol {
    list-style: none;
    padding-inline-start: 0;
    margin: 1rem 0.5em;
  }

  .no-birthday {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border: 2px solid var(--primary-color);
    overflow: hidden;
    text-decoration: none;
    padding: 1em;
    justify-content: center;
    font-size: 1rem;
    font-family: var(--secondary-font-family);
    color: var(--primary-text);

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }

    @media (min-width: 1025px) {
      font-size: 1.6rem;
    }
  }
</style>
