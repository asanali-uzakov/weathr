<template>
  <TooltipProvider ignore-non-keyboard-focus>
    <Tooltip :delay-duration="100">
      <TooltipTrigger as-child>
        <button
          class="size-8 rounded-sm flex p-1.5 hover:bg-border transition-colors"
          @click="$emit('click')"
        >
          <Icon
            :name="icon"
            class="size-full"
          />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <slot />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
}>()

defineEmits(['click'])
</script>

<style scoped>

</style>
