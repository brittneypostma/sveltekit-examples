import { error } from '@sveltejs/kit';
import { getPosts } from '../posts';
import type { PageLoadEvent } from './$types';

export const load = async ({ params }: PageLoadEvent) => {
	const { slug } = params;
	const post = getPosts().find((post) => slug === post.metadata.slug);
	if (!post) {
		throw error(404, 'Post not found');
	}
	return {
		post: {
			metadata: post.metadata,
			component: post.component
		}
	};
};
