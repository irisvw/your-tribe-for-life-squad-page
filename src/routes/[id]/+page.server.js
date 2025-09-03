export async function load({ url, params }) {
    const member = await fetch("https://fdnd.directus.app/items/person/" + params.id);
    const memberData = await member.json();

    return { member: memberData.data };
}