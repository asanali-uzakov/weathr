export default function () {
  let abortController: AbortController | null = null

  async function search(q: string): Promise<City[]> {
    if (abortController) {
      abortController.abort()
    }

    if (!q.trim()) {
      return []
    }

    abortController = new AbortController()

    try {
      const cities: Record<string, unknown>[] = await $fetch(
        `https://nominatim.openstreetmap.org/search?q=${q}&format=jsonv2&addressdetails=1`,
        { signal: abortController.signal },
      )
      return mapCities(cities)
    }
    catch (error) {
      if ((error as Error).name === 'AbortError') {
        return []
      }
      throw error
    }
  }

  const debouncedSearch = useDebounceFn(search, 200)

  function cancelSearch() {
    if (abortController) {
      abortController.abort()
      abortController = null
    }
  }

  async function reverse(lat: number, lon: number): Promise<City> {
    const city: Record<string, unknown> = await $fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2&addressdetails=1`)
    return {
      osmId: city.osm_id as number,
      osmType: city.osm_type as 'relation' | 'node' | 'way',
      name: (city.address as Record<string, unknown>).city as string,
      country: (city.address as Record<string, unknown>).country as string,
      countryCode: (city.address as Record<string, unknown>).country_code as string,
      state: (city.address as Record<string, unknown>).state as string | undefined,
      latitude: city.lat as number,
      longitude: city.lon as number,
    }
  }

  async function lookup(q: string): Promise<City> {
    const cities: Record<string, unknown>[] = await $fetch(`https://nominatim.openstreetmap.org/lookup?osm_ids=${q}&format=jsonv2&addressdetails=1`)
    return mapCities(cities)[0]
  }

  function mapCities(cities: Record<string, unknown>[]): City[] {
    return cities.map(city => ({
      osmId: city.osm_id as number,
      osmType: city.osm_type as 'relation' | 'node' | 'way',
      name: city.name ? city.name as string : (city.address as Record<string, unknown>).city as string,
      country: (city.address as Record<string, unknown>).country as string,
      countryCode: (city.address as Record<string, unknown>).country_code as string,
      state: (city.address as Record<string, unknown>).state as string | undefined,
      latitude: city.lat as number,
      longitude: city.lon as number,
    }))
  }

  return {
    search,
    debouncedSearch,
    reverse,
    lookup,
    cancelSearch,
  }
}
