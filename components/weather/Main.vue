<template>
  <div class="flex flex-col gap-4 bg-background p-10 max-w-lg">
    <WeatherCurrent :current="weatherData.current" />
    <span class="h-px w-full bg-border" />
    <WeatherHourly :hourly="weatherData.hourly" />
    <span class="h-px w-full bg-border" />
    <WeatherDaily :daily="weatherData.daily" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  weatherData: WeatherData
  city: City
}>()
</script>

<style scoped>

</style>
