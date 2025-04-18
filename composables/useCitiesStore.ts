export const useCitiesStore = defineStore('cities', () => {
  const templateCities: City[] = [
    {
      osmId: 65606,
      osmType: 'relation',
      name: 'London',
      country: 'United Kingdom',
      countryCode: 'gb',
      state: 'England',
      latitude: 51.4893335,
      longitude: -0.1440551,
    },
    {
      osmId: 175905,
      osmType: 'relation',
      name: 'New York',
      country: 'United States',
      countryCode: 'us',
      state: 'New York',
      latitude: 40.7127281,
      longitude: -74.0060152,
    },
    {
      osmId: 62400,
      osmType: 'relation',
      name: 'Frankfurt',
      country: 'Germany',
      countryCode: 'de',
      state: 'Hesse',
      latitude: 50.1106444,
      longitude: 8.6820917,
    },
    {
      osmId: 71525,
      osmType: 'relation',
      name: 'Paris',
      country: 'France',
      countryCode: 'fr',
      state: 'Ile-de-France',
      latitude: 48.8534951,
      longitude: 2.3483915,
    },
  ]
  const savedCities: Ref<City[]> = useLocalStorage('saved-cities', templateCities)

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
