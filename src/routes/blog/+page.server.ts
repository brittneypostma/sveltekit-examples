import { getPosts } from './posts';

export const load = async () => {
	return {
		posts: getPosts().map((post) => post.metadata)
	};
};
