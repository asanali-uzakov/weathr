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

const keys = useMagicKeys()

watch(keys['Cmd+Enter'], (v) => {
  if (v) {
    addCity()
  }
})

function addCity() {
  useCitiesStore().add(city)
}
</script>

<style scoped>

</style>
