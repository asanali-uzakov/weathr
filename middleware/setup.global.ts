export default defineNuxtRouteMiddleware(async (to) => {
  if (!useCityWeatherStore().isLoaded) {
    await useCityWeatherStore().getSavedCitiesWeather()
  }

  if (to.path === '/cities') {
    if (!useCityWeatherStore().cities.length) {
      return navigateTo('/')
    }
  }

  if (to.path === '/') {
    if (useCityWeatherStore().cities.length) {
      return navigateTo(`/${useCitiesStore().getFullId(useCityWeatherStore().cities[0].city)}`)
    }
  }
})
