<script lang="ts">
	export let data;
	const { component, metadata } = data;
</script>

<h1>{metadata.title}</h1>
<article class="post">
	<svelte:component this={component} />
</article>

<style lang="postcss" global>
	.post h2 {
		@apply font-display text-2xl lg:text-4xl;
	}
</style>
