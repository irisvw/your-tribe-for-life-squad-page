<script>
    import { page } from "$app/state";
</script>

<svelte:head>
    <title>Pagina niet gevonden</title>

    <style>
        body {
            background-color: #c1d1e4;
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</svelte:head>

<main>
    <h1>Pagina niet gevonden</h1>
    <a href="/">Terug naar overzicht</a>
</main>

<style>
    main {
        padding: 2em;
        border: 2px solid black;
        background-color: white;
        margin: auto;
        width: max-content;
        max-width: 90vw;
        margin-top: 30vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    h1 {
        font-family: "Caprasimo", serif;
        font-weight: normal;
        text-align: center;
        margin: 0;
    }

    a {
        font-family: "Belanosima", sans-serif;
        text-align: center;
        color: currentColor;

        &:visited {
            color: currentColor;
        }
    }
</style>
