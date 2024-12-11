export default defineNuxtRouteMiddleware(async () => {
  if (!useCityWeatherStore().isLoaded) {
    await useCityWeatherStore().getSavedCitiesWeather()
  }
})
