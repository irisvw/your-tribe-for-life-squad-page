<!-- Hier staat de JS -->
<script>
  let { data } = $props();
  const member = data.member;
</script>

<!-- Vanaf hier komt de content -->
<a href="/">Terug naar overzicht</a>
<div class="img-container">
  <img
    src={member.mugshot
      ? `https://fdnd.directus.app/assets/${member.mugshot}`
      : "https://wallpapers.com/images/high/funny-profile-picture-ylwnnorvmvk2lna0.webp"}
    alt={member.name}
    loading="lazy"
  />
</div>

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
  </ul>
</section>

<!-- Hier komt de CSS -->
<style>
  :global body {
    background-color: #dac1e4;
    margin: 1rem 2rem;
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }

  .img-container img {
    width: 20rem;
    height: auto;
    object-fit: cover;
    border: 1px solid black;
  }

  h1 {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    text-align: center;
    margin: 1rem;
  }

  .bio {
    background-color: black;
    color: white;
    line-height: 1.3rem;
    text-align: center;
    padding: 1rem;
  }

  span {
    font-family: Arial, Helvetica, sans-serif;
  }

  ul {
    list-style: none;
    margin: 1rem;
    text-align: center;
  }

  li {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    line-height: 1.2rem;
  }

  .info {
    border: 1px solid black;
    background-color: white;
  }
</style>
