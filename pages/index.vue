<template>
  <div>
    <div class="bg-slate-400">
      {{ citiesStore.savedCities }}
      {{ citiesStore.currentCity }}
    </div>
    <CitySearch />
  </div>
</template>

<script setup lang="ts">
const citiesStore = useCitiesStore()
</script>

<style scoped>

</style>
