<section class="bg-slate-300 text-black dark:text-white dark:bg-slate-900 rounded-lg p-8 h-full">
	<slot />
</section>

<style>
	section {
		max-width: 80ch;
		margin-inline: auto;
		display: grid;
		gap: 2rem;
		flex-grow: 1;
		align-content: start;
		overflow: auto;
	}
</style>
