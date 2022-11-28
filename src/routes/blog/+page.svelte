<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="text-column">
	<h1>Blog</h1>
	{#each data.posts as { title, slug }}
		<a data-sveltekit-prefetch href={`/blog/${slug}`}>
			<h2>{title}</h2>
		</a>
	{/each}
</section>
