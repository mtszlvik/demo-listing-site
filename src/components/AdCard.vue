<script setup lang="ts">
import type { Ad } from '@/api'
import AdCardBody from '@/components/AdCardBody.vue'

defineProps<{
  ad: Ad
}>()
</script>

<template>
  <div class="card d-flex flex-column flex-sm-row overflow-hidden">
    <img
      :src="ad.image"
      alt="..."
      class="img-fluid object-fit-cover card-image"
      width="240"
    />
    <AdCardBody :ad="ad" link>
      <slot></slot>
    </AdCardBody>
  </div>
</template>

<style scoped>
.card-image {
  width: 100%;
  aspect-ratio: 8 / 3;
}

@media (min-width: 576px) {
  .card-image {
    width: 240px;
    aspect-ratio: 4 / 3;
  }
}
</style>
