export const getPosts = () =>
	Object.entries(import.meta.glob(`/src/routes/blog/posts/**/*.{md,svx}`, { eager: true })).map(
		([, post]) => ({
			metadata: post.metadata,
			component: post.default
		})
	);
