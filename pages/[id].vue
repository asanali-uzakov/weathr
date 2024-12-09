<template>
  <div class="w-full min-h-screen flex items-center justify-center bg-muted p-10">
    <WeatherMain
      :weather-data="weatherData"
      :city="city"
    />
  </div>
</template>

<script setup lang="ts">
const id = useRoute().params.id as string
const city = await useGeo().lookup(id)
const weatherData = await useWeatherStore().getWeatherData(city.latitude, city.longitude)
</script>

<style scoped>

</style>
