<template>
  <div>
    city = {{ d }}
    <Button @click="addCity">
      Push
    </Button>
    <Button @click="removeCity">
      Pop
    </Button>
  </div>
</template>

<script setup lang="ts">
const d = await useCitiesStore().get('freiburg')
console.log(d)

function addCity() {
  if (d) {
    useCitiesStore().add(d[0])
  }
}

function removeCity() {
  if (d) useCitiesStore().remove(d[0])
}
</script>

<style scoped>

</style>
