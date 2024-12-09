export default function () {
  async function search(q: string): Promise<City[]> {
    const cities: Record<string, unknown>[] = await $fetch(`https://nominatim.openstreetmap.org/search?q=${q}&format=jsonv2&addressdetails=1`)
    return mapCities(cities)
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

  async function lookup(id: number, type: 'relation' | 'node' | 'way'): Promise<City> {
    const query = (type === 'relation' ? 'R' : type === 'node' ? 'N' : 'W') + id
    const cities: Record<string, unknown>[] = await $fetch(`https://nominatim.openstreetmap.org/lookup?osm_ids=${query}&format=jsonv2&addressdetails=1`)
    return mapCities(cities)[0]
  }

  function mapCities(cities: Record<string, unknown>[]): City[] {
    return cities.map(city => ({
      osmId: city.osm_id as number,
      osmType: city.osm_type as 'relation' | 'node' | 'way',
      name: city.name as string,
      country: (city.address as Record<string, unknown>).country as string,
      countryCode: (city.address as Record<string, unknown>).country_code as string,
      state: (city.address as Record<string, unknown>).state as string | undefined,
      latitude: city.lat as number,
      longitude: city.lon as number,
    }))
  }
  return { search, reverse, lookup }
}
