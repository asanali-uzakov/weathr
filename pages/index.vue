<template>
  <div>
    <div class="bg-slate-400">
      {{ weatherStore.weatherData }}
    </div>
    <CitySearch />
  </div>
</template>

<script setup lang="ts">
const citiesStore = useCitiesStore()
const weatherStore = useWeatherStore()
if (citiesStore.currentCity) {
  const response = await weatherStore.getWeatherData(citiesStore.currentCity?.latitude, citiesStore.currentCity?.longitude)
  console.log(response)
}
</script>

<style scoped>

</style>
