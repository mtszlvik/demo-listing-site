<script setup lang="ts">
import type { Ad } from '@/api'
import AdFavouriteButton from '@/components/AdFavouriteButton.vue'

defineProps<{
  ad: Ad
  link?: boolean
}>()
</script>

<template>
  <div
    class="card flex-column flex-sm-row overflow-hidden"
    :class="$attrs.class"
  >
    <slot name="image">
      <img
        :src="ad.image"
        alt="..."
        class="img-fluid object-fit-cover card-image"
        width="240"
      />
    </slot>
    <div class="card-body flex-fill d-flex flex-column position-relative">
      <RouterLink
        v-if="link"
        :to="`/details/${ad.adId}`"
        class="card-title fw-bold fs-4"
        >{{ ad.address }}</RouterLink
      >
      <h5 v-else class="card-title fw-bold">
        {{ ad.address }}
      </h5>
      <p class="card-text flex-sm-fill">{{ ad.price }} {{ ad.currency }}</p>
      <AdFavouriteButton :adId="ad.adId" :favourite="ad.favourite" />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card-image {
  width: 100%;
  aspect-ratio: 8 / 3;
}

a.card-title {
  text-decoration: none;
}
a.card-title:hover {
  text-decoration: underline;
}

@media (min-width: 576px) {
  .card-image {
    width: 240px;
    aspect-ratio: 4 / 3;
  }
}
</style>
