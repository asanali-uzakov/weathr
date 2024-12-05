import { fetchWeatherApi } from 'openmeteo'

export const useWeatherStore = defineStore('weather', () => {
  const weatherData: Ref<WeatherData | undefined> = ref(undefined)

  async function load() {
    const params = {
      latitude: [52.54],
      longitude: [13.41],
      current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
      hourly: 'temperature_2m,precipitation',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    }
    const url = 'https://api.open-meteo.com/v1/forecast'
    const responses = await fetchWeatherApi(url, params)

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0]

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds()

    const current = response.current()!
    const hourly = response.hourly()!
    const daily = response.daily()!

    weatherData.value = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature: current.variables(0)!.value(), // Current is only 1 value, therefore `.value()`
        weatherCode: current.variables(1)!.value(),
        windSpeed: current.variables(2)!.value(),
        windDirection: current.variables(3)!.value(),
      },
      hourly: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map((t, index) => ({
        time: new Date((t + utcOffsetSeconds) * 1000),
        temperature: hourly.variables(0)!.valuesArray()![index],
        precipitation: hourly.variables(1)!.valuesArray()![index],
      })),
      daily: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map((t, index) => ({
        time: new Date((t + utcOffsetSeconds) * 1000),
        weatherCode: daily.variables(0)!.valuesArray()![index],
        temperatureMax: daily.variables(1)!.valuesArray()![index],
        temperatureMin: daily.variables(2)!.valuesArray()![index],
      })),
    }
  }
  return { weatherData, load }
})
