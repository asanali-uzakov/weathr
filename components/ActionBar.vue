<template>
  <Teleport to="body">
    <div class="text-muted-foreground flex items-center gap-2 fixed bg-background border shadow-lg py-2 px-4 rounded-lg left-1/2 bottom-14 -translate-x-1/2">
      <ActionBarButton
        icon="mi-menu"
        @click="openCitiesList"
      >
        Open cities list
      </ActionBarButton>
      <CitySearch>
        <ActionBarButton icon="mi-search">
          Search <Shortcut><span>⌘K</span></Shortcut>
        </ActionBarButton>
      </CitySearch>
      <span class="h-5 w-px bg-border" />
      <ActionBarButton
        icon="mi-share"
        @click="share"
      >
        Share
      </ActionBarButton>

      <span class="h-5 w-px bg-border" />

      <Button
        size="sm"
        @click="addCity"
      >
        Add City
        <Shortcut><span>⌘↵</span></Shortcut>
      </Button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  city: City
}>()

const keys = useMagicKeys()

watch(keys['Cmd+Enter'], (v) => {
  if (v) {
    addCity()
  }
})

function addCity() {
  useCitiesStore().add(props.city)
}

function share() {
// copy link to clipboard
  navigator.clipboard.writeText(window.location.href)
  useToast().success('Link copied to clipboard')
}
function openCitiesList() {
  return navigateTo('/cities')
}
</script>

<style scoped>

</style>
