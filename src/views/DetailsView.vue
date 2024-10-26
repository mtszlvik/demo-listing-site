<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { ChevronLeft, ArrowLeft, CalendarDays } from 'lucide-vue-next'
import { getAdById } from '@/api'
import AdListHeader from '@/components/AdListHeader.vue'
import AdCardBody from '@/components/AdCardBody.vue'
import AdContactButton from '@/components/AdContactButton.vue'
import AdImageGallery from '@/components/AdImageGallery.vue'
import { useQuery } from '@tanstack/vue-query'

const route = useRoute()
const {
  isPending,
  isError,
  data: ad,
  error,
} = useQuery({
  queryKey: ['ads', 'details', Number(route.params.id)] as const,
  queryFn: ({ queryKey }) => getAdById(queryKey[2]),
})
</script>

<template>
  <div v-if="isPending" class="loading">Loading...</div>
  <div v-else-if="isError" class="error">{{ error?.message }}</div>
  <div v-else class="p-3 container-xl">
    <header class="row mb-3">
      <div class="col-4 d-flex">
        <RouterLink
          to="/"
          class="btn btn-secondary d-inline-flex align-items-center px-3"
        >
          <ArrowLeft :size="24" />Vissza</RouterLink
        >
      </div>
      <div class="col-8">
        <AdListHeader title="Részletek" />
      </div>
    </header>
    <div v-if="ad" class="d-grid gap-3">
      <AdImageGallery :image="ad.image" />
      <div class="card ad-details overflow-y-auto">
        <img
          :src="ad.image"
          alt="..."
          class="img-fluid object-fit-cover card-image w-100 d-sm-none"
          width="240"
        />
        <RouterLink
          to="/"
          class="d-sm-none position-absolute btn btn-secondary mobile-back-button"
        >
          <ChevronLeft :size="32" />
        </RouterLink>
        <AdCardBody :ad="ad">
          <p
            v-if="ad.favourite"
            class="card-text d-flex align-items-center gap-1"
          >
            <CalendarDays :size="18" />
            {{ new Date(ad.favourite.createdAt).toLocaleDateString('hu-HU') }}
          </p>
          <p
            placeholder="Description"
            class="shadow-primary rounded-3 border-none p-3 ad-description flex-fill"
          >
            {{ ad.description }}
          </p>
          <AdContactButton :contact="ad.contact" />
        </AdCardBody>
      </div>
    </div>
    <div v-else class="error">Nem található</div>
  </div>
</template>

<style scoped>
.ad-description {
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05) inset;
}

.ad-details {
  position: fixed;
  inset: 0;
  z-index: 9999;
  border-radius: 0;
}

.mobile-back-button {
  top: 3rem;
  left: 1rem;
  --bs-btn-padding-x: 0.375rem;
  --bs-btn-padding-y: 0.375rem;
}

@media (min-width: 576px) {
  .ad-details {
    position: static;
    z-index: 0;
    border-radius: var(--bs-border-radius-xl);
  }
}
</style>
