export default defineNuxtRouteMiddleware(async () => {
  if (!useCityWeatherStore().isLoaded) {
    await useCityWeatherStore().getSavedCitiesWeather()
  }
  // const store = storeToRefs(useCitiesStore())
  // if (to.path === '/') {
  //   if (store.currentCity.value) {
  //     return navigateTo(`/${useCitiesStore().getFullId(store.currentCity.value)}`)
  //   }

  //   if (store.savedCities.value.length > 0) {
  //     return navigateTo(`/${useCitiesStore().getFullId(store.savedCities.value[0])}`)
  //   }
  // }
})
