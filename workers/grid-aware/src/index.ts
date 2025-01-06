import { gridAwareCO2e, gridAwarePower } from "@greenweb/grid-aware-websites";
import {
  cloudflareRequest,
  getLocation,
} from "@greenweb/gaw-plugin-cloudflare-workers";

const getGridPower = gridAwarePower;

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const acceptsHTML = request.headers.get("Accept")?.includes("text/html");

    if (!acceptsHTML) {
      return new Response("Hello World!");
      // TODO Switch to middleware behavior.
      // return fetch(request);
    }

    const response = await fetch(request);
    const returnsHTML = response.headers
      .get("Content-Type")
      ?.includes("text/html");

    if (!returnsHTML) {
      return new Response("Hello World!");
      // TODO Switch to middleware behavior.
      // return response;
    }

    // const { country, continent, city, region, latitude, longitude } = request.cf as IncomingRequestCfPropertiesGeographicInformation;
    const { country } = await getLocation(request as cloudflareRequest);

    if (!country) {
      return new Response("Hello World!");
      // TODO Switch to middleware behavior.
      // return response;
    }

    // Sample underlying data from Electricity Maps API:
    // https://docs.electricitymaps.com/#introduction
    // https://api.electricitymap.org/v3/power-breakdown/latest?zone=GB
    // https://api.electricitymap.org/v3/power-breakdown/latest?lat=56.9086593773506&long=-4.059239882203034
    // https://api.electricitymap.org/v3/carbon-intensity/latest?zone=GB
    // const grid = (await gridAwarePower(country, env.ELECTRICITY_MAPS_API_KEY, {
    // 	mode: 'low-carbon',
    // 	minimumPercentage: 70,
    // })) as PowerBreakdownResponse;
    const grid = await gridAwareCO2e(country, env.ELECTRICITY_MAPS_API_KEY, {
      mode: "limit",
      minimumIntensity: 70,
    });

    if (grid.status === "error") {
      // TODO Switch to middleware behavior.
      // return new Response(response.body, {
      return new Response("Hello World!", {
        headers: {
          ...response.headers,
          "grid-aware-status": grid.status,
          "grid-aware-message": grid.message,
        },
      });
    }

    // TODO Switch to middleware behavior.
    // return new Response(response.body, {
    return new Response("Hello World!", {
      headers: {
        ...response.headers,
        "grid-aware": `${grid.gridAware}`,
        "grid-aware-zone": grid.region,
        "grid-aware-mode": grid.data.mode,
        // "grid-aware-power-minimum": `${grid.data.minimumPercentage}`,
        // "low-carbon-percentage": `${grid.data.lowCarbonPercentage}`,
        "grid-aware-average-intensity": `${grid.data.averageIntensity}`,
        "grid-aware-minimum-intensity": `${grid.data.minimumIntensity}`,
      },
    });
  },
} satisfies ExportedHandler<Env>;
