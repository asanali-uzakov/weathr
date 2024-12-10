<template>
  <ColorScheme>
    <ActionBarButton
      :key="$colorMode.value"
      :icon="icon"
      @click="toggleTheme"
    >
      <p>{{ capitalizeFirst(useColorMode().preference) }}</p>
    </ActionBarButton>
  </ColorScheme>
</template>

<script setup lang="ts">
const icon = computed(() => {
  if (useColorMode().preference === 'light') {
    return 'line-md:moon-filled-to-sunny-filled-loop-transition'
  }
  else if (useColorMode().preference === 'dark') {
    return 'line-md:sunny-filled-loop-to-moon-filled-loop-transition'
  }
  else {
    return 'line-md:computer'
  }
})

function toggleTheme() {
  const modes = ['light', 'dark', 'system']
  const current = useColorMode().preference
  const next = modes[(modes.indexOf(current) + 1) % modes.length]

  useColorMode().preference = next
}

function capitalizeFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

  <style scoped>

  </style>
