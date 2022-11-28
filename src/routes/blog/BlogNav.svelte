<script lang="ts">
	export let nav: any;
</script>

<aside class="overflow-auto fixed inset-0 pl-20 pr-10 py-20 bg-slate-700 text-white w-96">
	<nav class="grid gap-1">
		{#each nav as { title, slug }}
			<a data-sveltekit-prefetch href={`/blog/${slug}`}>
				{title}
			</a>
		{/each}
	</nav>
</aside>
