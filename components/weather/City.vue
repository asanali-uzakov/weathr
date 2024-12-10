<template>
  <div class="flex group">
    <div
      class="grow cursor-pointer bg-muted hover:bg-border p-6 rounded-lg clickable"
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
        <div class="flex flex-col items-end">
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
    <button
      :class="editingMode ? 'basis-24' : 'basis-0'"
      class="clickable rounded-lg bg-destructive hover:bg-destructive/80"
      @click="useCitiesStore().remove(city)"
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
  city: City
  weather: CompactWeather
  editingMode: boolean
}>()

function openCity() {
  navigateTo(`/${useCitiesStore().getFullId(props.city)}`)
}
</script>

<style scoped>

</style>
