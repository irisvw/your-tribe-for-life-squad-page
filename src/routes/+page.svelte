<script>
  let { data } = $props();
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

  members.push({
    name: "Birthday Every Day",
    month_number: currentMonth,
    day_number: currentDay,
  });

  // Maak een nieuw array gebaseerd op de months array.
  // Voor elke maand, kopieer alle members wiens month_number overeen komen met de index.
  // Sorteer daarna alleen die members.
  const membersByMonth = months.map((month, index) =>
    members
      .filter((member) => member.month_number === index)
      .sort((a, b) => a.day_number - b.day_number)
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

{#each months as month, i}
  <details
    class="animation-fade-in--down"
    style="--delay: {i * 0.05}s"
    name="months"
  >
    <summary>{month}</summary>
    <ol>
      {#each membersByMonth[i] as member}
        <li class="members-birthday">
          <a href="/{member.id}">
            <span class="day-number">{member.day_number}</span>
            <span class="member-name">{member.name}</span>
            <div class="member-mugshot-container">
              <img
                class="member-mugshot"
                src={member.mugshot
                  ? `https://fdnd.directus.app/assets/${member.mugshot}?width=300&height=300`
                  : "https://wallpapers.com/images/high/funny-profile-picture-ylwnnorvmvk2lna0.webp"}
                alt={member.name}
              />
            </div>
          </a>
        </li>
      {:else}
        <li class="no-birthday">No birthdays this month :(</li>
      {/each}
    </ol>
  </details>
{/each}

<style>
  :root {
    interpolate-size: allow-keywords;
  }

  h1 {
    display: flex;
    justify-content: center;
    font-size: 2.6rem;
    font-family: var(--primary-font-family);
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

  .members-birthday {
    margin: 1em 0.5em;
  }

  a {
    text-decoration: none;
  }

  .members-birthday a,
  .no-birthday {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border: 2px solid var(--primary-color);
    overflow: hidden;
    text-decoration: none;
  }

  .no-birthday {
    padding: 1em;
    justify-content: center;
    font-size: 1rem;
    font-family: var(--secondary-font-family);

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }

    @media (min-width: 1025px) {
      font-size: 1.6rem;
    }
  }

  .day-number {
    flex: 0 0 3rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--secondary-text);
    background-color: var(--primary-color);
    border-right: 2px solid var(--primary-color);
    font-family: var(--secondary-font-family);

    @media (min-width: 768px) {
      flex: 0 0 4rem;
      font-size: 1.4rem;
    }

    @media (min-width: 1025px) {
      flex: 0 0 5rem;
      font-size: 1.6rem;
    }
  }

  .member-name {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem;
    color: black;
    border-right: 2px solid var(--primary-color);
    font-family: var(--secondary-font-family);

    @media (min-width: 768px) {
      font-size: 1.4rem;
      padding: 0.75rem;
    }

    @media (min-width: 1025px) {
      font-size: 1.6rem;
    }
  }

  .member-mugshot-container {
    flex: 0 0 4rem;
    height: 4rem;
    display: flex;

    @media (min-width: 768px) {
      flex: 0 0 6rem;
      height: 6rem;
    }

    @media (min-width: 1025px) {
      flex: 0 0 7rem;
      height: 7rem;
    }
  }

  .member-mugshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* .no-birthday {
    font-size: 1.1em;
    font-family: var(--secondary-font-family);
    padding: 1em;
    background-color: #aacad4;
    border-radius: 0.5em;
    color: var(--primary-text);
    display: inline-block;
  } */

  .birthday-mode {
    background: linear-gradient(red, yellow, green, blue, purple);
  }
</style>
