import type { LayoutLoadEvent } from './$types';

export async function load({ cookies }: LayoutLoadEvent) {
	console.log(cookies);
	return {};
}
