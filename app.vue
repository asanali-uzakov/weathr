<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster position="top-right" />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'weathr.',
  ogTitle: 'weathr.',
  description: 'Minimalist weather',
  ogDescription: 'Minimalist weather',
  ogImage: '/ogImage.png',
  twitterTitle: 'weathr.',
  twitterDescription: 'Minimalist weather',
  twitterImage: '/ogImage.png',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})
</script>

<style scoped>

</style>
