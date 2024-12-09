<template>
  <div>
    <p class="text-sm text-muted-foreground">
      Press
      <kbd
        class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
      >
        <span class="text-xs">⌘</span>K
      </kbd>
    </p>
    <Dialog
      :open="isOpen"
      @update:open="toggle"
    >
      <DialogContent class="overflow-hidden p-0 shadow-lg">
        <VisuallyHidden>
          <DialogTitle>Search for a city</DialogTitle>
          <DialogDescription />
        </VisuallyHidden>
        <Command
          @update:model-value="openCity($event as City)"
          @update:search-term="search($event)"
        >
          <CommandInput placeholder="Type a city name..." />
          <CommandList>
            <!-- <CommandEmpty>No results found.</CommandEmpty> -->
            <CommandItem
              v-for="city in cities"
              :key="city.placeId"
              :value="city"
            >
              <div class="flex gap-3 items-center">
                <Icon
                  class="size-5"
                  :name="`circle-flags:${city.countryCode}`"
                />
                <div>
                  <p>{{ city.name }}</p>
                  <p class="text-muted-foreground">
                    <span>{{ city.country }}</span>
                    <span v-if="city.state">, {{ city.state }}</span>
                  </p>
                </div>
              </div>
            </CommandItem>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { VisuallyHidden } from 'radix-vue'

const isOpen = ref(false)

const cities: Ref<City[]> = ref([])

async function search(q: string) {
  cities.value = await useGeo().search(q)
}

function openCity(city: City) {
  useCitiesStore().open(city)
  close()
  return navigateTo('/')
}

const keys = useMagicKeys()
const CmdK = keys['Cmd+K']

function toggle() {
  if (isOpen.value) {
    close()
  }
  else {
    open()
  }
}

function open() {
  isOpen.value = true
}
function close() {
  isOpen.value = false
  setTimeout(() => {
    cities.value = []
  }, 200)
}

watch(CmdK, (v) => {
  if (v)
    toggle()
})
</script>

  <style scoped>

  </style>
