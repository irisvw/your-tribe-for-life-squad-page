<script>
    let { data } = $props();
    const members = data.members;
</script>

<h1 class="title">Kalender</h1>

<details class="month-birthday">
    <summary>Januari</summary>
</details>

<details class="month-birthday">
    <summary>Februari</summary>
</details>

<details class="month-birthday">
    <summary>Maart</summary>
</details>

<details class="month-birthday">
    <summary>April</summary>
</details>

<details class="month-birthday">
    <summary>Mei</summary>
</details>

<details class="month-birthday">
    <summary>Juni</summary>
</details>

<details class="month-birthday">
    <summary>Juli</summary>
</details>

<details class="month-birthday">
    <summary>Augustus</summary>
</details>

<details class="month-birthday">
    <summary>September</summary>
</details>

<details class="month-birthday">
    <summary>Oktober</summary>
</details>

<details class="month-birthday">
    <summary>November</summary>
</details>

<details class="month-birthday">
    <summary>December</summary>
</details>

<style>
    .title {
        display: flex;
        justify-content: center;
        font-size: 42px;
    }

    .month-birthday {
        background-color: white;
        margin: 1em;
        padding: 1em;
        border-radius: 15px;
        border: 2px solid;
    }

    summary {
        font-size: 32px;
        list-style: none;
        position: relative;
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
