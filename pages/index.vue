<template>
  <div class="h-dvh w-full flex flex-col gap-2 p-32 justify-center items-center">
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
      class="mt-auto"
      size="lg"
      @click="navigateTo('/location')"
    >
      Find me
    </Button>
    <p>or</p>

    <CitySearch>
      <Button
        variant="secondary"
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
