<script lang="ts">
	import type { LayoutData } from './$types';
	import BlogNav from './BlogNav.svelte';
	export let data: LayoutData;
</script>

<section class="grid items-stretch w-full gap-4  max-w-[80ch] mx-auto">
	<main
		class="grid gap-6 flex-grow-1 content-start overflow-auto w-full bg-slate-300 mx-auto text-black dark:text-white dark:bg-slate-900 rounded-lg p-8 h-full xl:ml-[10rem] 2xl:ml-auto"
	>
		<slot />
	</main>
	<BlogNav nav={data.posts} />
</section>

<style>
</style>
