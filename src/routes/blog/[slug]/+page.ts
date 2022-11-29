import { error } from '@sveltejs/kit';
import { getPosts } from '../posts';
import type { PageLoadEvent } from './$types';

export const load = async ({ parent }: PageLoadEvent) => {
	const { post } = await parent();
	return {
		metadata: post.metadata,
		component: post.component
	};
};
