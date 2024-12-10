export const useCityWeatherStore = defineStore('city-weather', () => {
  const isLoaded = ref(false)
  const { savedCities } = storeToRefs(useCitiesStore())

  const citiesWeatherData: Ref<CityWeather[]> = ref([])

  const cities: Ref<CityWeather[]> = computed(() => {
    return savedCities.value.map((city: City, index: number) => {
      return {
        city,
        weather: citiesWeatherData.value[index]?.weather,
        timeZone: citiesWeatherData.value[index]?.timeZone,
      }
    })
  })

  watch(
    () => savedCities,
    async () => {
      await getSavedCitiesWeather()
    },
    { deep: true },
  )

  async function getSavedCitiesWeather(): Promise<CityWeather[]> {
    citiesWeatherData.value = await useWeather().getCitiesWeather(savedCities.value)
    isLoaded.value = true
    return citiesWeatherData.value
  }

  async function getCityWeather(id: string): Promise<CityWeather> {
    const city = useCitiesStore().getCityById(id)

    const foundCity = cities.value.find(c => c.city.osmId === city?.osmId)

    if (foundCity) {
      return foundCity
    }

    const geo = await useGeo().lookup(id)
    return await useWeather().getCityWeather(geo)
  }

  return { cities, getSavedCitiesWeather, getCityWeather, isLoaded }
})
