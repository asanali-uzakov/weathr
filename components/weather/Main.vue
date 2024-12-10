<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 bg-background h-full p-8 rounded-xl">
    <div>
      <div class="flex justify-between">
        <h1 class="text-lg font-medium">
          <Icon name="line-md:map-marker-filled" />
          {{ cityWeather.city.name }}, {{ cityWeather.city.country }}
        </h1>
        <p class="text-muted-foreground">
          {{ currentTime(cityWeather.timeZone, true) }}
        </p>
      </div>
      <WeatherCurrent :current="cityWeather.weather.current" />
    </div>
    <div class="flex flex-col gap-8">
      <WeatherHourly :hourly="cityWeather.weather.hourly" />
      <WeatherDaily :daily="cityWeather.weather.daily" />
    </div>
    <ActionBar :city="cityWeather.city" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cityWeather: CityWeather
}>()
</script>

<style scoped>

</style>
