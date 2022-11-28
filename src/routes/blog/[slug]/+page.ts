import { error } from '@sveltejs/kit';
import { getPosts } from '../posts';
import type { PageLoadEvent } from './$types';

export const load = async ({ params }: PageLoadEvent) => {
	const { slug } = params;
	const post = await getPosts().find((post) => {
		if (!post.metadata.slug) {
			post.metadata.slug = post.metadata.title.replace(/\s/g, '-').toLowerCase();
			return post.metadata.slug;
		} else if (slug === post.metadata.slug) return slug;
	});
	if (!post) {
		throw error(404, 'Post not found');
	}
	return {
		metadata: post.metadata,
		component: post.component
	};
};
