export const load = async ({ fetch }) => {
	const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=9');
	const cats = await res.json();
	return {
		cats
	};
};
