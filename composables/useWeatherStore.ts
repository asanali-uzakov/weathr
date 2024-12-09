import { fetchWeatherApi } from 'openmeteo'

export const useWeatherStore = defineStore('weather', () => {
  const weatherData: Ref<WeatherData | undefined> = ref(undefined)
  const url = 'https://api.open-meteo.com/v1/forecast'

  async function getWeatherData(latitude: number, longitude: number) {
    const params = {
      latitude,
      longitude,
      current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
      hourly: 'temperature_2m,precipitation,weather_code',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min',
      timezone: 'auto',
    }
    const responses = await fetchWeatherApi(url, params)

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0]

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds()

    const current = response.current()!
    const hourly = response.hourly()!
    const daily = response.daily()!

    const now = Date.now() / 1000 // current time in seconds
    const oneDayInSeconds = 24 * 60 * 60

    weatherData.value = {
      timeZone: response.timezone() ?? '',
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature: Math.round(current.variables(0)!.value()), // Current is only 1 value, therefore `.value()`
        weatherCode: current.variables(1)!.value(),
        windSpeed: Math.round(current.variables(2)!.value()),
        windDirection: current.variables(3)!.value(),
        temperatureMax: Math.round(daily.variables(1)!.valuesArray()![0]),
        temperatureMin: Math.round(daily.variables(2)!.valuesArray()![0]),
      },

      hourly: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval())
        .filter(t => t >= now - (now % hourly.interval()) && t <= now + oneDayInSeconds)
        .map((t, index) => ({
          time: new Date((t + utcOffsetSeconds) * 1000),
          temperature: Math.round(hourly.variables(0)!.valuesArray()![index]),
          precipitation: toPercents(hourly.variables(1)!.valuesArray()![index]),
          weatherCode: hourly.variables(2)!.valuesArray()![index],
        })),

      daily: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map((t, index) => ({
        time: new Date((t + utcOffsetSeconds) * 1000),
        weatherCode: daily.variables(0)!.valuesArray()![index],
        temperatureMax: Math.round(daily.variables(1)!.valuesArray()![index]),
        temperatureMin: Math.round(daily.variables(2)!.valuesArray()![index]),
      })),
    }
    return weatherData.value
  }

  async function getCitiesWeather(cities: City[]): Promise<{ city: City, weather: CompactWeather }[]> {
    const params = {
      latitude: cities.map(c => c.latitude),
      longitude: cities.map(c => c.longitude),
      current: ['temperature_2m', 'weather_code'],
      timezone: 'auto',
    }

    const responses = await fetchWeatherApi(url, params)

    return responses.map((response, index) => {
      const current = response.current()!

      return {
        city: cities[index],
        weather: {
          timeZone: response.timezone() ?? '',
          temperature: Math.round(current.variables(0)!.value()),
          weatherCode: current.variables(1)!.value(),
        },
      }
    })
  }
  return { weatherData, getWeatherData, getCitiesWeather }
})
