<template>
  <section>
    <div class="flex justify-between">
      <p class="text-9xl font-bold">
        {{ current.temperature }}&deg;
      </p>
      <div class="flex flex-col justify-between py-3">
        <p><Icon name="line-md:arrow-up" /> {{ current.temperatureMax }}&deg;</p>
        <p><Icon name="line-md:arrow-down" /> {{ current.temperatureMin }}&deg;</p>
      </div>
    </div>
    <div class="mt-4 flex flex-col gap-4">
      <p class="text-lg font-medium">
        {{ useWeatherCode(current.weatherCode).description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  current: CurrentWeather
}>()
</script>

<style scoped>

</style>
