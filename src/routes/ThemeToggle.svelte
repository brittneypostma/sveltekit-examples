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

<button
	aria-label="Toggle Theme"
	class="py-1 ml-1 flex items-center justify-center rounded-lg"
	on:click={toggleTheme}
>
	{#if isDarkMode}
		<Moon className="w-7 h-7 fill-yellow-500" />
	{:else}
		<Sun className="w-7 h-7 fill-yellow-500" />
	{/if}
</button>
