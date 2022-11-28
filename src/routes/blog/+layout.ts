import { getPosts } from './posts';
import type { LayoutLoadEvent } from '../$types';
import { error } from '@sveltejs/kit';

export const load = async ({ params }: LayoutLoadEvent) => {
	const { slug } = params;
	const post = await getPosts().find((post) => {
		if (slug === post.metadata.slug) return slug;
		if (!post.metadata.slug) {
			post.metadata.slug = post.metadata.title.replace(/\s/g, '-').toLowerCase();
			return post.metadata.slug;
		}
	});
	if (!post) {
		throw error(404, 'Post not found');
	}
	return {
		posts: getPosts().map((post) => post.metadata),
		post: post.component
	};
};
