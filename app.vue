<template>
  <div>
    {{ weatherData?.current }}
  </div>
</template>

<script setup lang="ts">
useWeatherStore().load()
const { weatherData } = storeToRefs(useWeatherStore())
</script>

<style scoped>

</style>
