<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-background rounded-xl p-8">
    <div>
      <h1 class="text-6xl font-bold">
        Today
      </h1>
    </div>
    <div class="flex flex-col gap-6">
      <WeatherCity
        v-for="cityWeather in citiesWeather"
        :key="cityWeather.city.osmId"
        :city="cityWeather.city"
        :weather="cityWeather.weather"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { savedCities } = storeToRefs(useCitiesStore())
const citiesWeather = await useWeatherStore().getCitiesWeather(savedCities.value)
</script>

<style scoped>

</style>
