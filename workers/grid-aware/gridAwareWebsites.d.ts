declare module "@greenweb/grid-aware-websites" {
  export interface PowerBreakdownOptions {
    mode: "low-carbon" | "renewable";
    minimumPercentage: number;
  }

  export interface PowerBreakdownData {
    mode: "low-carbon" | "renewable";
    minimumPercentage: number;
    renewablePercentage?: number;
    lowCarbonPercentage?: number;
  }

  export interface PowerBreakdownError {
    status: "error";
    message: string;
  }

  export interface PowerBreakdownSuccess {
    status: "success";
    region: string;
    gridAware: boolean;
    data: PowerBreakdownData;
  }

  export type PowerBreakdownResponse =
    | PowerBreakdownSuccess
    | PowerBreakdownError;

  export function gridAwarePower(
    zone: string,
    apiKey: string,
    options: PowerBreakdownOptions
  ): Promise<PowerBreakdownResponse>;

  export interface GridIntensityOptions {
    mode: "average" | "limit";
    minimumIntensity: number;
  }

  export interface GridIntensityData {
    mode: "average" | "limit";
    carbonIntensity: number;
    averageIntensity?: number;
    minimumIntensity?: number;
  }

  export interface GridIntensityError {
    status: "error";
    message: string;
  }

  export interface GridIntensitySuccess {
    status: "success";
    region: string;
    gridAware: boolean;
    data: GridIntensityData;
  }

  export type GridIntensityResponse = GridIntensitySuccess | GridIntensityError;

  export function gridAwareCO2e(
    zone: string,
    apiKey: string,
    options: GridIntensityOptions
  ): Promise<GridIntensityResponse>;
}
