import { dev } from '$app/environment';

export const csr = dev;

export const load = async (event) => {
	const context = event.platform?.context;
	let locationLabel;
	try {
		// break out individual pieces
		const city = context?.geo?.city || 'Holland';
		const country = context?.geo?.country?.name || 'MI';
		locationLabel = `${city}, ${country}`;
		const options = Intl.DateTimeFormat().resolvedOptions();
		const locale = options.locale;
		const timezone = context?.geo?.timezone || 'America/New_York'; //  'America/New_York'

		// Generate a formatted time string
		const time = new Date().toLocaleString(locale, {
			timeZone: timezone,
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		});
		return {
			locationLabel,
			time
		};
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		locationLabel = undefined;
		throw error(404, `Error: ${err.message}`);
	}
};
