<script>
	import { Canvas } from '@threlte/core';
	import { buttonIdle, buttonWalk, buttonRun } from './stores';
</script>

<aside class="flex gap-2 justify-center mx-auto">
	<button on:click={() => ($buttonIdle = !$buttonIdle)}>Idle</button>
	<button on:click={() => ($buttonWalk = !$buttonWalk)}>Walk</button>
	<button on:click={() => ($buttonRun = !$buttonRun)}>Run</button>
</aside>

<Canvas>
	<slot />
</Canvas>

<style lang="postcss">
	button {
		@apply btn;
	}
</style>
