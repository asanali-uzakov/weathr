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
  timeZone: string
  current: CurrentWeather
  hourly: HourlyWeather[]
  daily: DailyWeather[]
}

interface CompactWeather {
  timeZone: string
  temperature: number
  weatherCode: number
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
