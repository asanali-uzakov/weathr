<template>
  <Dialog
    :open="isOpen"
    @update:open="toggle"
  >
    <DialogTrigger>
      <slot />
    </DialogTrigger>
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
            :key="city.osmId"
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
  return navigateTo(`/${useCitiesStore().getFullId(city)}`)
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
