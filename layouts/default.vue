<template>
  <div class="w-full grid min-h-dvh pt-8 sm:pb-8 sm:px-8">
    <div class="max-w-screen-2xl w-full mx-auto grid grid-rows-[auto_1fr]">
      <div class="flex w-full items-center gap-2 px-8 pb-8">
        <p class="font-bold text-xl mr-auto">
          weathr.
        </p>
        <!-- <CitySearch v-if="useRoute().name !== 'index'">
          <Button
            class="border"
            variant="outline"
          >
            Search for a City
            <Shortcut>
              <span>⌘</span>K
            </Shortcut>
          </Button>
        </CitySearch> -->
        <ActionBarButton icon="line-md:github-loop">
          <p>Github</p>
        </ActionBarButton>
        <ThemeSwitcher />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
