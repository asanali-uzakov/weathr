<template>
  <div class="flex flex-col gap-10 p-10">
    <WeatherCity
      v-for="cityWeather in citiesWeather"
      :key="cityWeather.city.osmId"
      :city="cityWeather.city"
      :weather="cityWeather.weather"
    />
  </div>
</template>

<script setup lang="ts">
const { savedCities } = storeToRefs(useCitiesStore())
const citiesWeather = await useWeatherStore().getCitiesWeather(savedCities.value)
</script>

<style scoped>

</style>
