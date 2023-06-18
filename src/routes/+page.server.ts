import 'dotenv/config';

export async function load() {
	let hellos = await fetch(process.env.RALLY_API_URL);
	hellos = await hellos.json();

	return { hellos };
}
