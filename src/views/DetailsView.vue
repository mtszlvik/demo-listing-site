<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { getAdById } from '@/api'
import AdListHeader from '@/components/AdListHeader.vue'
import AdDetailsCard from '@/components/AdDetailsCard.vue'
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
  <div v-else class="py-sm-3 container-xl">
    <header class="row mb-3 d-none d-sm-flex">
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
      <AdDetailsCard :ad="ad" />
    </div>
    <div v-else class="error">Nem található</div>
  </div>
</template>
