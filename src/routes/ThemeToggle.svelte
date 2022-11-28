<script lang="ts">
	import Sun from '$lib/images/sun.svelte';
	import Moon from '$lib/images/moon.svelte';
	import { browser } from '$app/environment';
	let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true;
	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDarkMode = true;
		}
	}
	function toggleTheme() {
		if (isDarkMode) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDarkMode = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDarkMode = true;
		}
	}
</script>

<!-- <div>
	<input type="checkbox" id="theme-toggle" on:click={toggleTheme} />
	<label for="theme-toggle" />
</div> -->

<button
	aria-label="Toggle Theme"
	class="p-2 ml-1 flex items-center justify-center rounded-lg"
	on:click={toggleTheme}
>
	{#if isDarkMode}
		<Moon className="w-7 h-7 fill-yellow-500" />
	{:else}
		<Sun className="w-7 h-7 fill-yellow-500" />
	{/if}
</button>

<!-- <style lang="postcss">
	div {
		@apply grid items-center;
	}
	#theme-toggle {
		@apply invisible absolute;
	}

	#theme-toggle + label {
		@apply inline-block cursor-pointer h-7 w-7 border mr-1
     border-yellow-600 rounded-full duration-300 content-[''];
	}

	#theme-toggle:not(:checked) + label {
		@apply bg-amber-400;
	}

	#theme-toggle:checked + label {
		@apply bg-transparent border-none mr-1;
		box-shadow: inset -8px 0px 0px 0px rgb(251 191 36), 1px 0 0 0, inset -9px 0 0 0;
	}
</style> -->
<style lang="postcss">
	svg {
		@apply h-6 w-6 fill-current;
	}
</style>
