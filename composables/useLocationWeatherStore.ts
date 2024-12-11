export const useLocationWeatherStore = defineStore('location-weather', () => {
  const locationWeather: Ref<CityWeather | null> = ref(null)

  const { coords } = useGeolocation()

  watch(coords, (newCoords, oldCoords) => {
    if (newCoords && (newCoords.latitude !== oldCoords?.latitude || newCoords.longitude !== oldCoords?.longitude)) {
      getWeather(newCoords.latitude, newCoords.longitude)
    }
  })

  async function getWeather(lat: number, lon: number): Promise<CityWeather> {
    const city: City = await useGeo().reverse(lat, lon)
    const cityWeather: CityWeather = await useWeather().getCityWeather(city)
    locationWeather.value = cityWeather
    return cityWeather
  }
  return { locationWeather }
})
