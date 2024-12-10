<template>
  <div class="grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-2 gap-8 bg-background rounded-xl p-8">
    <div class="flex flex-col gap-6">
      <h1 class="text-6xl font-bold">
        Today
      </h1>
      <p class="text-muted-foreground">
        The current weather forecasts for the cities you saved.
      </p>
      <div class="flex gap-2">
        <CitySearch>
          <Button
            variant="secondary"
          >
            Search for a City
            <Shortcut>
              <span>⌘</span>K
            </Shortcut>
          </Button>
        </CitySearch>
        <Button
          variant="secondary"
        >
          Use current location
        </Button>
        <Button
          variant="secondary"
          @click="editingMode = !editingMode"
        >
          Edit
        </Button>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <WeatherCity
        v-for="cityWeather in cities"
        :key="cityWeather.city.osmId"
        :city-weather="cityWeather"
        :editing-mode="editingMode"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { cities } = storeToRefs(useCityWeatherStore())

const editingMode = ref(false)
</script>

<style scoped>

</style>
