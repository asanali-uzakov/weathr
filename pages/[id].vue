<template>
  <WeatherMain
    :weather-data="weatherData"
    :city="city"
  />
</template>

<script setup lang="ts">
const id = useRoute().params.id as string
const city = await useGeo().lookup(id)
const weatherData = await useWeatherStore().getWeatherData(city.latitude, city.longitude)
</script>

<style scoped>

</style>
