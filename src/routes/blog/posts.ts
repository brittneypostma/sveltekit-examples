// import { parse } from 'node-html-parser';

export const getPosts = () =>
	Object.entries(import.meta.glob(`/src/routes/blog/posts/**/*.{md,svx}`, { eager: true })).map(
		([, post]) => ({
			metadata: post.metadata,
			component: post.default
		})
	);

// const component = parse(post.default.render().html);
// const metadata = post.metadata;
// return {
// 	component,
// 	metadata
// };
