<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { cats } = data;
</script>

<h1>Cats</h1>
<section>
	{#each cats as cat}
		<img src={cat.url} alt="cat" class="max-w-sm" />
	{/each}
</section>

<style>
	section {
		columns: 18rem;
		counter-reset: grid;
	}
	img {
		margin-block: 1rem;
		width: 100%;
	}
</style>
