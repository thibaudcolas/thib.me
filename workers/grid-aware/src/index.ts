import { averageIntensity } from "@tgwf/co2";
import {
  gridAwareCO2e,
  gridAwarePower,
  GridIntensityResponse,
} from "@greenweb/grid-aware-websites";
import {
  cloudflareRequest,
  getLocation,
} from "@greenweb/gaw-plugin-cloudflare-workers";

/**
 * Helper to race a given promise against a timeout
 */
async function withTimeout<T>(promise: Promise<T>, ms: number) {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("request timed out")), ms);

    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}

async function adaptResponse(response: Response) {
  return new Response("Hello World! Adapted response.");
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const acceptsHTML = request.headers.get("Accept")?.includes("text/html");
    const response = await fetch(request);
    const isErrorOrRedirect = response.status !== 200;
    const isHTML = response.headers.get("Content-Type")?.includes("text/html");

    if (!acceptsHTML || isErrorOrRedirect || !isHTML) {
      return new Response("Hello World!");
      // TODO Switch to middleware behavior.
      // return response;
    }

    if (!request.cf || !request.cf.country) {
      return adaptResponse(response);
    }

    // TODO: TypeScript error (string vs number for latitude and longitude).
    // https://github.com/thegreenwebfoundation/grid-aware-websites/issues/15
    // const { country } = await getLocation(request as cloudflareRequest);
    const { country, region, latitude, longitude } = request.cf;

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
    //  mode: 'low-carbon',
    //  minimumPercentage: 70,
    // })) as PowerBreakdownResponse;
    let grid: GridIntensityResponse;
    try {
      grid = await withTimeout(
        gridAwareCO2e(country, env.ELECTRICITY_MAPS_API_KEY, {
          mode: "limit",
          minimumIntensity: 70,
        }),
        600 // Timeout in ms.
      );
    } catch (err) {
      return adaptResponse(response);
    }

    if (grid.status === "error") {
      return adaptResponse(response);
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
