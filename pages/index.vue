<template>
  <div class="w-full flex flex-col gap-2 justify-center items-center">
    <Icon
      class="size-40 mb-8"
      name="line-md:map-marker-alt-loop"
    />
    <h1 class="text-3xl font-bold">
      Enable Geolocation
    </h1>
    <p class="text-muted-foreground">
      Use my location to show the weather forecasts
    </p>
    <Button
      class="mt-40"
      size="lg"
      @click="navigateTo('/location')"
    >
      Find me
    </Button>
    <p class="text-muted-foreground">
      or
    </p>

    <CitySearch>
      <Button
        variant="outline"
        size="lg"
      >
        Search for a City
        <Shortcut>
          <span>⌘</span>K
        </Shortcut>
      </Button>
    </CitySearch>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
