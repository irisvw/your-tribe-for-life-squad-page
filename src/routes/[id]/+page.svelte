<script>
  let { data } = $props();
  const member = data.member;
</script>

<a href="/">Terug naar overzicht</a>
<img
  src={member.mugshot
    ? `https://fdnd.directus.app/assets/${member.mugshot}`
    : "https://wallpapers.com/images/high/funny-profile-picture-ylwnnorvmvk2lna0.webp"}
  alt={member.name}
  loading="lazy"
/>

<h1>{member.name}</h1>

<section>
  <div>
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

<style>
img {
  width: auto;
  height: 15rem;
  max-width: 100%;
}
</style>
