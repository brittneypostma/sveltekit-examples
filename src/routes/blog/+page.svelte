<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="text-column">
	<h1>Blog</h1>
	<section class="grid mt-4 bg-slate-900 p-8 rounded-lg">
		{#each data.posts as { title, slug }}
			<a class="inline-block" data-sveltekit-prefetch href={`/blog/${slug}`}>
				<h2>{title}</h2>
			</a>
		{/each}
	</section>
</div>
