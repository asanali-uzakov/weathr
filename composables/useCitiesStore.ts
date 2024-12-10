export const useCitiesStore = defineStore('cities', () => {
  const savedCities: Ref<City[]> = useLocalStorage('saved-cities', [])
  const currentCity = ref<City | undefined>(undefined)

  function add(city: City) {
    if (isSaved(city)) {
      useToast().error('City already added')
      return
    }
    savedCities.value.push(city)
    useToast().success('City added', { description: `${city.name}, ${city.country}` })
  }

  function remove(city: City) {
    if (!isSaved(city)) {
      useToast().error('City not found')
      return
    }
    savedCities.value = savedCities.value.filter(c => c.osmId !== city.osmId)
    useToast().success('City removed', { description: `${city.name}, ${city.country}` })
  }

  function open(city: City) {
    currentCity.value = city
  }

  function getFullId(city: City): string {
    return (city.osmType === 'relation' ? 'R' : city.osmType === 'node' ? 'N' : 'W') + city.osmId
  }

  function isSaved(city: City) {
    return savedCities.value.some(c => c.osmId === city.osmId)
  }

  return { savedCities, currentCity, add, remove, open, getFullId, isSaved }
})
