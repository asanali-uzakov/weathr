<template>
  <ColorScheme>
    <button
      class="p-2 flex rounded-full"
      @click="toggleTheme"
    >
      <Icon
        :key="$colorMode.value"
        class="size-5"
        :name="icon"
        mode="svg"
      />
    </button>
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
</script>

  <style scoped>

  </style>
