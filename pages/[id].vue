<template>
  <div class="min-h-screen flex flex-col gap-4 items-center justify-center bg-muted p-10">
    <div class="flex justify-between w-full">
      <h1 class="text-lg font-medium">
        <Icon name="line-md:map-marker-filled" />
        {{ city.name }}, {{ city.country }}
      </h1>
      <p class="text-muted-foreground">
        {{ currentTime(weatherData.timeZone, true) }}
      </p>
      <Button
        size="sm"
        @click="addCity"
      >
        Add city <Shortcut><span>⌘⏎</span></Shortcut>
      </Button>
      <CitySearch>
        <Button
          size="sm"
        >
          Search for a City
          <Shortcut>
            <span>⌘</span>K
          </Shortcut>
        </Button>
      </CitySearch>
    </div>
    <WeatherMain
      :weather-data="weatherData"
      :city="city"
    />
  </div>
</template>

<script setup lang="ts">
const id = useRoute().params.id as string
const city = await useGeo().lookup(id)
const weatherData = await useWeatherStore().getWeatherData(city.latitude, city.longitude)

const keys = useMagicKeys()

watch(keys['Cmd+Enter'], (v) => {
  if (v) {
    addCity()
  }
})

function addCity() {
  useCitiesStore().add(city)
  useToast().success('City added', { description: `${city.name}, ${city.country}` })
}
</script>

<style scoped>

</style>
