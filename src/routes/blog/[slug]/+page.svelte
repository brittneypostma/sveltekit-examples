<script lang="ts">
	export let data;
	const { component, metadata } = data;
	console.log(data);
</script>

<h1>{metadata.title}</h1>
<svelte:component this={component} />
