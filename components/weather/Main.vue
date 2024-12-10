<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-background h-full p-8 rounded-xl">
    <div>
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
    </div>
    <div class="flex flex-col gap-8">
      <WeatherHourly :hourly="weatherData.hourly" />
      <WeatherDaily :daily="weatherData.daily" />
    </div>
    <ActionBar :city="city" />
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
