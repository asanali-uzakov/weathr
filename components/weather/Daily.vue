<template>
  <section class="bg-muted rounded-lg p-6">
    <p class="text-muted-foreground text-sm">
      {{ useDateFormat(daily[0].time, 'DD.MM') }} - {{ useDateFormat(daily[daily.length -1].time, 'DD.MM') }}
    </p>
    <h2 class="text-xl font-medium mb-4">
      7-Day Forecast
    </h2>
    <div class="flex flex-col gap-6">
      <div
        v-for="(day, index) in daily"
        :key="index"
        class="grid grid-cols-4 items-center"
      >
        <div>
          <p class="text-sm text-muted-foreground">
            {{ useDateFormat(day.time, 'DD.MM') }}
          </p>
          <p class="font-medium">
            {{ index === 0 ? 'Today' : useDateFormat(day.time, 'dddd') }}
          </p>
        </div>

        <Icon
          class="justify-self-end size-8"
          :name="useWeatherCode(day.weatherCode).icon"
        />

        <p class="justify-self-end">
          <Icon name="line-md:arrow-up" />
          {{ day.temperatureMax }}&deg;
        </p>
        <p class="justify-self-end">
          <Icon name="line-md:arrow-down" />
          {{ day.temperatureMin }}&deg;
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  daily: DailyWeather[]
}>()
</script>

<style scoped>

</style>
