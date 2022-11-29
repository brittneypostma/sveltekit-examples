<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { time, locationLabel } = data;
</script>

<h1>{locationLabel}</h1>
<time class="font-sans  text-2xl text-center">{time}</time>
