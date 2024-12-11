<template>
  <WeatherMain
    :city-weather="cityWeather"
  />
</template>

<script setup lang="ts">
const id = useRoute().params.id as string
const cityWeather = await useCityWeatherStore().getCityWeather(id)
useSeoMeta({
  title: 'Weather in ' + cityWeather.city.name,
})
</script>

<style scoped>

</style>
