export default function () {
  async function search(q: string): Promise<City[]> {
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

  function reverse() {
    console.log('reverse')
  }
  function lookup() {
    console.log('lookup')
  }
  return { search, reverse, lookup }
}
