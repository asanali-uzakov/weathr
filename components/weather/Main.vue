<template>
  <div class="flex flex-col gap-4 bg-background p-10 max-w-4xl rounded-xl">
    <div class="flex justify-between">
      <h1 class="text-lg font-medium">
        <Icon name="line-md:map-marker-filled" />
        {{ city.name }}, {{ city.country }}
      </h1>
      <p class="text-muted-foreground">
        {{ currentTime(weatherData.timeZone, true) }}
      </p>
    </div>
    <WeatherCurrent :current="weatherData.current" />
    <!-- <span class="h-px w-full bg-border" /> -->
    <WeatherHourly :hourly="weatherData.hourly" />
    <!-- <span class="h-px w-full bg-border" /> -->
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
