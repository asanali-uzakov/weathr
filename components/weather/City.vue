<template>
  <div
    class="bg-muted p-6 rounded-lg"
    @click="openCity"
  >
    <div class="flex justify-between">
      <div class="flex flex-col">
        <p class="text-sm text-muted-foreground">
          {{ city.country }}
        </p>
        <p class="text-xl font-medium">
          {{ city.name }}
        </p>
      </div>
      <div class="flex flex-col">
        <p class="text-sm text-muted-foreground">
          {{ currentTime(weather.timeZone) }}
        </p>
        <div class="flex items-center gap-1">
          <p class="text-xl font-medium">
            {{ weather.temperature }}&deg;
          </p>
          <Icon
            class="text-muted-foreground size-6"
            :name="useWeatherCode(weather.weatherCode).icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  city: City
  weather: CompactWeather
}>()

function openCity() {
  navigateTo(`/${useCitiesStore().getFullId(props.city)}`)
}
</script>

<style scoped>

</style>
