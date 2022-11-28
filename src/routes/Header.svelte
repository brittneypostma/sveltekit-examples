<script>
	import logo from '$lib/images/svelte-logo.svg';
	import ThemeToggle from './ThemeToggle.svelte';
	import Nav from './Nav.svelte';
	import GitHub from '$lib/images/GitHub.svelte';
</script>

<header class="z-50 sticky inset-0">
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" class="w-7" />
		</a>
	</div>

	<div class="absolute inset-0 mx-auto z-40">
		<Nav />
	</div>

	<div class="corner">
		<a href="https://github.com/brittneypostma/sveltekit-examples" class="text-current">
			<GitHub className="w-7 fill-current" />
		</a>
		<ThemeToggle />
	</div>
</header>

<style lang="postcss">
	header {
		padding-inline: 1rem;
		display: flex;
		justify-content: space-between;
	}

	.corner {
		@apply flex items-center z-50 gap-4 pt-2;
	}
</style>
