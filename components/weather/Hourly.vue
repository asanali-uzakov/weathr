<template>
  <section class="bg-muted rounded-lg p-6">
    <h2 class="text-xl font-medium mb-4">
      Hourly Forecast
    </h2>
    <div class="gap-8 flex overflow-x-scroll py-4">
      <div
        v-for="(hour, index) in hourly"
        :key="index"
      >
        <div class="flex flex-col gap-2 items-center">
          <p class="text-sm text-muted-foreground">
            {{ index == 0 ? 'Now' : useDateFormat(hour.time, 'HH') }}
          </p>
          <Icon
            class="size-6 text-muted-foreground"
            :name="useWeatherCode(hour.weatherCode).icon"
          />
          <p class="font-medium text-lg">
            {{ hour.temperature }}&deg;
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  hourly: HourlyWeather[]
}>()
</script>

<style scoped>

</style>
