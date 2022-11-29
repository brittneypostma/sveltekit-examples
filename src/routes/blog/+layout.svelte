<script lang="ts">
	import type { LayoutData } from './$types';
	import BlogNav from './BlogNav.svelte';
	export let data: LayoutData;
</script>

<div class="grid">
	<BlogNav nav={data.posts} />
	<main
		class="bg-slate-300 lg:ml-64 text-black dark:text-white dark:bg-slate-900 rounded-lg p-8 h-full"
	>
		<slot />
	</main>
</div>

<style>
	div {
		margin-left: -10rem;
		grid-template-columns: 24rem 1fr;
		width: 100vw;
	}
	main {
		max-width: 80ch;
		grid-column: 1/-1;
		display: grid;
		gap: 2rem;
		flex-grow: 1;
		align-content: start;
		overflow: auto;
	}
</style>
