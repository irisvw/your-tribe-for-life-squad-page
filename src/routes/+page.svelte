<script>
        import { onMount } from 'svelte';
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
            .sort((a, b) => a.day_number - b.day_number),
    );

    function getRandomRange() { //maakt een getal tussen 0 en 1
    const start = Math.floor(Math.random() * 50); //maakt een getal tussen 0 en 50 startpunt
    const end = start + Math.floor(Math.random() * 20) + 10; //getal tussen 10 en 29
    return [start, Math.min(end, 100)]; //komt niet hoger dan 100
  }
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

<div class="animation-scroll-text">
    {#each membersByMonth.flat() as member}
      {#key member.id}
        {#await Promise.resolve(getRandomRange()) then range}
          <p 
            class="animation-text-name-scroll" 
            style="--range-start: {range[0]}%; --range-end: {range[1]}%;">
            {member.name}
          </p>
        {/await}
      {/key}
    {/each}
  
    <p 
      class="animation-text-name-scroll special"
      style="--range-start: 0%; --range-end: 100%;">
      <b>FDND</b>
    </p>
  </div>

<h1 class="animation-fade-in" style="--delay: 0.25s">Kalender</h1>

{#each months as month, i}
    <details
        class="animation-fade-in--down animation-scroll-appear"
        style="--delay: {i * 0.05}s"
        name="months"
    >
        <summary>{month}</summary>
        <ol>
            {#each membersByMonth[i] as member}
                <li class="members-birthday">
                    <a href="/{member.id}">
                        <span class="day-number">{member.day_number}</span>
                        <span
                            class="member-name {member.day_number ==
                                currentDay &&
                            member.month_number == currentMonth
                                ? 'birthday-mode'
                                : ''}">{member.name}</span
                        >
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

    @keyframes zoom-in {
  0% {
    transform: translateZ(-1000px);
    opacity: 0;
    filter: blur(2px);
  }
  50% {
    transform: translateZ(0px);
    opacity: 1;
    filter: blur(0px);
  }
  100% {
    transform: translateZ(1000px);
    opacity: 0;
    filter: blur(7px);
  }
}

.animation-scroll-text {
  block-size: 300vh;
  perspective: 1500px;
  transform-style: preserve-3d;

  display: grid;
  grid: repeat(4, 25dvh) / repeat(4, 25dvw);;
  place-items: center;

  position: sticky;
  top: 0;

  > .animation-text-name-scroll{
    transform-style: preserve-3d;

    font-size: 1.5rem;
    font-family: var(--secondary-font-family);

    text-wrap: nowrap;

    @supports (animation-timeline: scroll()) {
      @media (prefers-reduced-motion: no-preference) {
        animation: zoom-in linear both;
        animation-timeline: scroll(root block);
        will-change: transform, opacity, filter;
        animation-range: var(--range-start) var(--range-end);
      }
    }

    &.special {
      grid-row: 2 / span 2;
      grid-column: 2 / span 2;
    }

    > b {
      font-size: 8rem;
      font-family: var(--primary-font-family);
    }

    @supports (animation-timeline: scroll()) {

      &:nth-of-type(1) { grid-area: 1/1 }
      &:nth-of-type(2) { grid-area: 1/2 }
      &:nth-of-type(3) { grid-area: 1/3 }
      &:nth-of-type(4) { grid-area: 1/4 }
      &:nth-of-type(5) { grid-area: 2/1 }
      &:nth-of-type(6) { grid-area: 2/2 }
      &:nth-of-type(7) { grid-area: 2/3 }
      &:nth-of-type(8) { grid-area: 2/4 }
      &:nth-of-type(9) { grid-area: 3/1 }
      &:nth-of-type(10) { grid-area: 3/2 }
      &:nth-of-type(11) { grid-area: 3/3 }
      &:nth-of-type(12) { grid-area: 3/4 }
      &:nth-of-type(13) { grid-area: 4/1 }
      &:nth-of-type(14) { grid-area: 4/2 }
      &:nth-of-type(15) { grid-area: 4/3 }
      &:nth-of-type(16) { grid-area: 4/4 }
      &:nth-of-type(17) { grid-area: 2/1 }
      &:nth-of-type(18) { grid-area: 2/2 }
      &:nth-of-type(19) { grid-area: 2/3 }
      &:nth-of-type(20) { grid-area: 2/4 }
      &:nth-of-type(21) { grid-area: 3/1 }
      &:nth-of-type(22) { grid-area: 3/2 }
      &:nth-of-type(23) { grid-area: 3/3 }
      &:nth-of-type(24) { grid-area: 3/4 }
      &:nth-of-type(25) { grid-area: 1/1 }
      &:nth-of-type(26) { grid-area: 1/2 }
      &:nth-of-type(27) { grid-area: 1/3 }
      &:nth-of-type(28) { grid-area: 1/4 }
      &:nth-of-type(29) { grid-area: 4/1 }
      &:nth-of-type(30) { grid-area: 4/2 }
      &:nth-of-type(31) { grid-area: 4/3 }
      &:nth-of-type(32) { grid-area: 4/4 }
      &:nth-of-type(33) { grid-area: 2/1 }
      &:nth-of-type(34) { grid-area: 2/2 }
      &:nth-of-type(35) { grid-area: 2/3 }
      &:nth-of-type(36) { grid-area: 2/4 }
      &:nth-of-type(37) { grid-area: 3/1 }
      &:nth-of-type(38) { grid-area: 3/2 }
      &:nth-of-type(39) { grid-area: 3/3 }
      &:nth-of-type(40) { grid-area: 3/4 }
      &:nth-of-type(41) { grid-area: 1/1 }
      &:nth-of-type(42) { grid-area: 1/2 }
      &:nth-of-type(43) { grid-area: 1/3 }
      &:nth-of-type(44) { grid-area: 1/4 }
      &:nth-of-type(45) { grid-area: 4/1 }
      &:nth-of-type(46) { grid-area: 4/2 }
      &:nth-of-type(47) { grid-area: 4/3 }
      &:nth-of-type(48) { grid-area: 4/4 }
      &:nth-of-type(49) { grid-area: 3/1 }
      &:nth-of-type(50) { grid-area: 3/2 }
      &:nth-of-type(51) { grid-area: 3/3 }
      &:nth-of-type(52) { grid-area: 3/4 }
    }
  }
}

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

        &::after {
            content: "▼";
            position: absolute;
            right: 0;
            transition: 0.3s;
        }
    }

    summary::-webkit-details-marker {
        display: none;
    }

    ol {
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
        background: linear-gradient(red, yellow, green, blue, purple);
    }
</style>
