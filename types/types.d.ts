interface WeatherData {
  current: {
    time: Date
    temperature: number
    weatherCode: number
    windSpeed: number
    windDirection: number
  }
  hourly: {
    time: Date
    temperature: number
    precipitation: number
  }[]
  daily: {
    time: Date
    weatherCode: number
    temperatureMax: number
    temperatureMin: number
  }[]
}

interface City {
  name: string
  country: string
  countryCode: string
  state?: string
  latitude: number
  longitude: number
  placeId: number
}
