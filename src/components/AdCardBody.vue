<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Ad } from '@/api'
import AdFavouriteButton from '@/components/AdFavouriteButton.vue'

defineProps<{
  ad: Ad
  link?: boolean
}>()
</script>

<template>
  <div class="card-body flex-fill d-flex flex-column position-relative">
    <RouterLink
      v-if="link"
      :to="`/details/${ad.adId}`"
      class="card-title fw-bold fs-4"
      >{{ ad.address }}</RouterLink
    >
    <h5 v-else class="card-title fw-bold fs-4">{{ ad.address }}</h5>
    <p class="card-text flex-sm-fill">{{ ad.price }} {{ ad.currency }}</p>
    <AdFavouriteButton :adId="ad.adId" :favourite="ad.favourite" />
    <slot></slot>
  </div>
</template>

<style scoped>
a.card-title {
  text-decoration: none;
}
a.card-title:hover {
  text-decoration: underline;
}
</style>
