<script lang="ts">
	const toggleTheme = () => {};
</script>

<div>
	<input type="checkbox" id="theme-toggle" on:click={toggleTheme} />
	<label for="theme-toggle" />
</div>

<style lang="postcss">
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
</style>
