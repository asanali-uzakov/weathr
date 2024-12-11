<template>
  <div class="flex group">
    <div
      class="grow cursor-pointer bg-muted hover:bg-border p-6 rounded-lg clickable"
      @click="openCity"
    >
      <div class="flex items-center gap-4">
        <Icon
          v-if="currentLocation"
          name="line-md:map-marker-loop"
          class="size-8 text-muted-foreground"
        />
        <div class="flex flex-col mr-auto">
          <p class="text-sm text-muted-foreground">
            {{ cityWeather.city.country }}
          </p>
          <p class="text-xl font-medium">
            {{ cityWeather.city.name }}
          </p>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-sm text-muted-foreground">
            {{ currentTime(cityWeather.timeZone) }}
          </p>
          <div class="flex items-center gap-1">
            <p class="text-xl font-medium">
              {{ cityWeather.weather.current.temperature }}&deg;
            </p>
            <Icon
              class="text-muted-foreground size-6"
              :name="useWeatherCode(cityWeather.weather.current.weatherCode).icon"
            />
          </div>
        </div>
      </div>
    </div>
    <button
      :class="editingMode ? 'basis-24' : 'basis-0'"
      class="clickable rounded-lg bg-destructive hover:bg-destructive/80"
      @click="useCitiesStore().remove(cityWeather.city)"
    >
      <Icon
        :class="editingMode ? 'size-6' : 'size-0'"
        class="text-white transition-all"
        name="mi:delete"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  cityWeather: CityWeather
  editingMode: boolean
  currentLocation?: boolean
}>()

function openCity() {
  navigateTo(`/${useCitiesStore().getFullId(props.cityWeather.city)}`)
}
</script>

<style scoped>

</style>
