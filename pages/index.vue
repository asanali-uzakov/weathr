<template>
  <div class="grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-2 gap-8 bg-background rounded-xl p-8">
    <div class="flex flex-col gap-6">
      <h1 class="text-6xl font-bold">
        Today
      </h1>
      <p
        v-if="showedCity"
        class="text-muted-foreground"
      >
        The current temperature
        <strong>
          {{ showedCity.city.osmId === locationWeather?.city.osmId ? 'outside': 'in ' + showedCity.city.name }}
        </strong>
        is {{ showedCity.weather.current.temperature }}°C. Today's high will be {{ showedCity.weather.current.temperatureMax }}°C, and the low will be {{ showedCity.weather.current.temperatureMin }}°C.
        The weather is currently described as {{ lowerFirst(useWeatherCode(showedCity.weather.current.weatherCode).description) }}.
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
          v-if="cities.length"
          variant="secondary"
          @click="editingMode = !editingMode"
        >
          Edit
        </Button>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h2 class="text-xl font-medium">
        Saved cities
      </h2>

      <WeatherCity
        v-if="locationWeather"
        :city-weather="locationWeather"
        :editing-mode="false"
        current-location
      />
      <div v-else-if="!cities.length">
        <p class="text-muted-foreground">
          You haven't saved any cities yet.
        </p>
      </div>
      <WeatherCity
        v-for="cityWeather in cities"
        :key="cityWeather.city.osmId"
        :city-weather="cityWeather"
        :editing-mode="editingMode"
        @mouseover="hoveredCity = cityWeather"
        @mouseleave="hoveredCity = null"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Today | weathr.',
})

const { cities } = storeToRefs(useCityWeatherStore())
const { locationWeather } = storeToRefs(useLocationWeatherStore())

const editingMode = ref(false)
const hoveredCity: Ref<CityWeather | null> = ref(null)

const showedCity = computed(() => {
  if (hoveredCity.value) {
    return hoveredCity.value
  }
  else {
    if (locationWeather.value) {
      return locationWeather.value
    }
    else if (cities.value.length) {
      return cities.value[0]
    }
    else {
      return null
    }
  }
})
</script>

<style scoped>

</style>
