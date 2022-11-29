<script lang="ts">
	export let nav: any;
</script>

<aside
	class="rounded-lg w-full overflow-auto inset-0 pl-20 pr-10 py-20 bg-slate-700 text-white xl:w-96 xl:fixed xl:rounded-none"
>
	<nav class="grid gap-1">
		{#each nav as { title, slug }}
			<a data-sveltekit-preload-data="hover" data-sveltekit-reload href={`/blog/${slug}`}>
				{title}
			</a>
		{/each}
	</nav>
</aside>
