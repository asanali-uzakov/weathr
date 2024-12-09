interface CurrentWeather {
  time: Date
  temperature: number
  weatherCode: number
  windSpeed: number
  windDirection: number
  temperatureMax: number
  temperatureMin: number
}

interface HourlyWeather {
  time: Date
  temperature: number
  precipitation: number
  weatherCode: number
}
interface DailyWeather {
  time: Date
  weatherCode: number
  temperatureMax: number
  temperatureMin: number
}
interface WeatherData {
  current: CurrentWeather
  hourly: HourlyWeather[]
  daily: DailyWeather[]
}

interface City {
  name: string
  country: string
  countryCode: string
  state?: string
  latitude: number
  longitude: number
  osmId: number
  osmType: 'relation' | 'node' | 'way'
}
