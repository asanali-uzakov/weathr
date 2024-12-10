export const useCitiesStore = defineStore('cities', () => {
  const savedCities: Ref<City[]> = useLocalStorage('saved-cities', [])

  function add(city: City): void {
    if (isSaved(city)) {
      useToast().error('City already added')
      return
    }
    savedCities.value.push(city)
    useToast().success('City added', { description: `${city.name}, ${city.country}` })
  }

  function remove(city: City): void {
    if (!isSaved(city)) {
      useToast().error('City not found')
      return
    }
    savedCities.value = savedCities.value.filter(c => c.osmId !== city.osmId)
    useToast().success('City removed', { description: `${city.name}, ${city.country}` })
  }

  function getFullId(city: City): string {
    return (city.osmType === 'relation' ? 'R' : city.osmType === 'node' ? 'N' : 'W') + city.osmId
  }

  function isSaved(city: City): boolean {
    return savedCities.value.some(c => c.osmId === city.osmId)
  }

  function getCityById(id: string): City | undefined {
    const osmType = id[0] === 'R' ? 'relation' : id[0] === 'N' ? 'node' : 'way'
    const osmId = Number(id.slice(1))
    return savedCities.value.find(c => c.osmType === osmType && c.osmId === osmId)
  }

  return { savedCities, add, remove, getFullId, isSaved, getCityById }
})
