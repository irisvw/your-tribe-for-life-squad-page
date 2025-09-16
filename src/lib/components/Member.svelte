<script>
    let { member, currentDay, currentMonth } = $props()

</script>

<li class="members-birthday">
    <a href="/{member.id}">
        <span class="day-number">{member.day_number}</span>
        <span
            class="member-name {member.day_number == currentDay &&
            member.month_number == currentMonth
                ? 'birthday-mode'
                : ''}">{member.name}</span
        >
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

<style>
    .members-birthday {
    margin: 1em 0.5em;
  }

  a {
    text-decoration: none;
  }

  .members-birthday a {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border: 2px solid var(--primary-color);
    overflow: hidden;
    text-decoration: none;
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
    color: var(--primary-text);
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

  .birthday-mode {
    background: linear-gradient(
      90deg in oklch,
      var(--bg-color-1),
      var(--bg-color-2),
      var(--bg-color-3)
    );
    background-size: 400% 400%;

    @media (prefers-reduced-motion: no-preference) {
      animation: gradient 3.5s ease infinite;
    }

    &:hover {
      cursor: url("$lib/assets/party.svg"), pointer;
    }

    &::after {
      padding-left: 0.25em;
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