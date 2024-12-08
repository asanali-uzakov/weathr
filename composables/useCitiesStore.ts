export const useCitiesStore = defineStore('cities', () => {
  const savedCities: Ref<City[]> = useLocalStorage('saved-cities', [])
  const currentCity = ref<City | undefined>(undefined)

  function add(city: City) {
    if (savedCities.value.some(c => c.placeId === city.placeId)) return
    savedCities.value.push(city)
  }

  function remove(city: City) {
    savedCities.value = savedCities.value.filter(c => c.placeId !== city.placeId)
  }

  function open(city: City) {
    currentCity.value = city
  }

  async function get(q: string): Promise<City[]> {
    const cities: Record<string, unknown>[] = await $fetch(`https://nominatim.openstreetmap.org/search?q=${q}&format=jsonv2&addressdetails=1`)

    return cities.map(city => ({
      placeId: city.place_id as number,
      name: city.name as string,
      country: (city.address as Record<string, unknown>).country as string,
      countryCode: (city.address as Record<string, unknown>).country_code as string,
      state: (city.address as Record<string, unknown>).state as string | undefined,
      latitude: city.lat as number,
      longitude: city.lon as number,
    }))
  }
  return { savedCities, currentCity, add, remove, open, get }
})
