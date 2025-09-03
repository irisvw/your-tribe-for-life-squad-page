export async function load({ url }) {
    const members = await fetch("https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2526&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202");
    const membersData = await members.json();

    return { members: membersData.data };
}