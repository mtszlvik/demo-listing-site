<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ChevronLeft } from 'lucide-vue-next'
import type { Ad } from '@/api'
import AdCard from '@/components/AdCard.vue'
import AdFavouriteDate from '@/components/AdFavouriteDate.vue'
import AdContactButton from '@/components/AdContactButton.vue'

defineProps<{ ad: Ad }>()
</script>

<template>
  <AdCard :ad="ad" class="ad-details">
    <template v-slot:image>
      <img
        :src="ad.image"
        alt="..."
        class="img-fluid object-fit-cover card-image w-100 d-sm-none"
      />
      <RouterLink
        to="/"
        class="d-sm-none position-absolute btn btn-secondary mobile-back-button"
      >
        <ChevronLeft :size="32" />
      </RouterLink>
    </template>

    <AdFavouriteDate :favourite="ad.favourite" />
    <p
      class="shadow-primary rounded-3 border-none p-3 ad-description flex-fill"
    >
      {{ ad.description }}
    </p>
    <AdContactButton :contact="ad.contact" />
  </AdCard>
</template>

<style scoped>
.card-image {
  height: 50dvh;
  max-height: 50dvh;
}

.ad-description {
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05) inset;
}

.ad-details {
  position: absolute;
  inset: 0 0 auto 0;
  z-index: 1020;
  border-radius: 0;
  min-block-size: 100dvh;
}

.mobile-back-button {
  top: calc(var(--bs-card-spacer-y) * 2);
  left: var(--bs-card-spacer-x);
  --bs-btn-padding-x: 0.375rem;
  --bs-btn-padding-y: 0.375rem;
}

@media (min-width: 576px) {
  .ad-details {
    position: static;
    z-index: 0;
    min-block-size: 0;
    border-radius: var(--bs-border-radius-xl);
  }
}
</style>
