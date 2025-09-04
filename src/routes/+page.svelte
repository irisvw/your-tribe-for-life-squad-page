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
</details>

<details>
    <summary>Februari</summary>
</details>

<details>
    <summary>Maart</summary>
</details>

<details>
    <summary>April</summary>
</details>

<details>
    <summary>Mei</summary>
</details>

<details>
    <summary>Juni</summary>
</details>

<details>
    <summary>Juli</summary>
</details>

<details>
    <summary>Augustus</summary>
</details>

<details>
    <summary>September</summary>
</details>

<details>
    <summary>Oktober</summary>
</details>

<details>
    <summary>November</summary>
</details>

<details>
    <summary>December</summary>
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
