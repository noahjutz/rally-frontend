export async function load() {
	let hellos = await fetch('https://api.rally.noahjutz.com/'); // todo: save api url in variable
	hellos = await hellos.json()
	
	return { hellos };
}
