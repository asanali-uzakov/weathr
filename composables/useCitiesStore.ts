export const useCitiesStore = defineStore('cities', () => {
  const savedCities: Ref<City[]> = useLocalStorage('saved-cities', [])
  const currentCity = ref<City | undefined>(undefined)

  function add(city: City) {
    if (savedCities.value.some(c => c.osmId === city.osmId)) return
    savedCities.value.push(city)
  }

  function remove(city: City) {
    savedCities.value = savedCities.value.filter(c => c.osmId !== city.osmId)
  }

  function open(city: City) {
    currentCity.value = city
  }

  return { savedCities, currentCity, add, remove, open }
})
