<!-- Hier staat de JS -->
<script>
  let { data } = $props();
  const member = data.member;
</script>

<!-- Vanaf hier komt de content -->
<a href="/">Terug naar overzicht</a>

<div class="profile-container">
  <div class="img-container">
    <img
      src={member.mugshot
        ? `https://fdnd.directus.app/assets/${member.mugshot}`
        : "https://wallpapers.com/images/high/funny-profile-picture-ylwnnorvmvk2lna0.webp"}
      alt={member.name}
      loading="lazy"
    />
  </div>

  <div class="text-container">
    <h1>{member.name}</h1>

    <section class="info">
      <div class="bio">
        <span>{member.bio}</span>
      </div>
      <ul>
        <li>
          {member.birthdate
            ? new Date(member.birthdate).toLocaleDateString("nl-NL", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
            : "Geen verjaardag bekend"}
        </li>
        <li style="color: {member.fav_color}">This is my favorite color</li>
        <li>{member.fav_tag}</li>
        <li>
          {#if member.website}
            <a href={member.website} target="_blank" rel="noopener noreferrer">
              Bezoek mijn website!
            </a>
          {:else}
            <span>Geen website beschikbaar</span>
          {/if}
        </li>
      </ul>
    </section>
  </div>
</div>

<!-- Hier komt de CSS -->
<style>
  :global body {
    background-color: #dac1e4;
    margin: 1rem 2rem;
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    text-align: center;
    margin: 1rem 0;
  }

  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
  }

  .img-container {
    width: 100%;
    max-width: 30rem;
    display: flex;
    justify-content: center;
  }

  .img-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border: 1px solid black;
  }

  .bio {
    background-color: black;
    color: white;
    line-height: 1.3rem;
    text-align: center;
    padding: 1rem;
    max-width: 30rem;
  }

  ul {
    list-style: none;
    margin: 1rem 0;
    text-align: center;
    padding: 0;
  }

  li {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0.2rem 0;
    line-height: 1.2rem;
  }

  .info {
    border: 1px solid black;
    background-color: white;
    width: 100%;
    max-width: 30rem;
    text-align: center;
  }

  /* Tablet */
  @media (min-width: 600px) {
    .profile-container {
      flex-direction: column;
      align-items: center;
    }

    .bio,
    .info {
      max-width: 40rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
  .profile-container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .img-container {
    max-width: 30rem;
    width: auto;
    display: flex;
    justify-content: flex-start;
  }

  .img-container img {
    width: 100%;
    height: auto;
    border: 1px solid black;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 40rem;
  }

  .bio,
  .info {
    text-align: left;
  }
}
</style>
