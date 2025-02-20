/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { PowerBreakdown } from '@greenweb/grid-aware-websites';
import { getLocation } from '@greenweb/gaw-plugin-cloudflare-workers';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const powerBreakdown = new PowerBreakdown({
			mode: 'low-carbon',
			apiKey: env.EMAPS_API_KEY,
		});

		// First fetch the request
		// const response = await fetch(request.url);
		// // Then check if the request content type is HTML.
		// const contentType = response.headers.get('content-type');

		// // If the content is not HTML, then return the response without any changes.
		// const isHTML = contentType && contentType.includes('text/html');
		// // TODO This is needed because the wrangler dev command returns plain text by default.
		// const isText = contentType && contentType.includes('text/plain');
		// if (!isHTML && !isText) {
		// 	return new Response(response.body, {
		// 		...response,
		// 	});
		// }

		// If the content type is HTML, we get the country the request came from
		// TODO Type mismatch: whether latitude and longitude are a number or a string
		// @ts-expect-error
		const location = await getLocation(request);
		const { country } = location;

		// If the country data does not exist, then return the response without any changes.
		if (!country) {
			const response = await fetch(request.url);
			return new Response(response.body, {
				...response,
			});
		}

		const gridData = await powerBreakdown.check(country);

		// If there's an error getting data, return the web page without any modifications
		// TODO Property status does not exist on type object
		// @ts-expect-error
		// if (gridData.status === 'error') {
		// 	return new Response(response.body, {
		// 		...response,
		// 		headers: {
		// 			...response.headers,
		// 		},
		// 	});
		// }

		// return `grid` as JSON
		return new Response(JSON.stringify(gridData), {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		// If the grid aware flag is triggered (gridAware === true), then we'll return a modified HTML page to the user.
		// TODO Property gridAware does not exist on type object
		// @ts-expect-error
		if (gridData.gridAware) {
			// if (true) {
			const modifyHTML = new HTMLRewriter().on('iframe', {
				element(element) {
					element.remove();
				},
			});

			console.log(response.headers.get('content-type'));
			// Transform the response using the HTMLRewriter API, and set appropriate headers.
			let modifiedResponse = new Response(modifyHTML.transform(response).body, {
				...response,
				headers: {
					...response.headers,
					'Content-Type': 'text/html;charset=UTF-8',
				},
			});

			return modifiedResponse;
		}

		return new Response(response.body, {
			...response,
			headers: {
				...response.headers,
			},
		});
	},
} satisfies ExportedHandler<Env>;
