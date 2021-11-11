export type IWeatherStatus = 'Rain' | 'Clouds' | 'Snow' | 'Sun';

export interface IWeather {
  id: number;
  city: string;
  country: string;
  temperature: number;
  description: string;
  windSpeed: string;
  cloud: string;
  main: IWeatherStatus;
  humidity: string;
  error: boolean;
  saved?: boolean;
}
