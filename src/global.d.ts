type Theme = 'system' | 'light' | 'dark';

export interface ThemeStore {
	/** List of all available theme names */
	themes: string[];
	/** Forced theme name for the current page */
	forcedTheme?: string;
	/** Update the theme */
	/** Active theme name */
	theme?: string;
	/** If `enableSystem` is true and the active theme is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `theme` */
	resolvedTheme?: string;
	/** If enableSystem is true, returns the System theme preference ("dark" or "light"), regardless what the active theme is */
	systemTheme?: 'dark' | 'light';
}
