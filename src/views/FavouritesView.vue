<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { CalendarDays } from 'lucide-vue-next'
import AdCard from '@/components/AdCard.vue'
import AdListHeader from '@/components/AdListHeader.vue'
import { getFavouriteAds } from '@/api'
import { useQuery } from '@tanstack/vue-query'

const router = useRouter()
const route = useRoute()
const sort = computed({
  get() {
    return (route.query.sort as string) ?? 'address'
  },
  set(sort) {
    router.replace({ query: { sort } })
  },
})

const { isPending, isError, data, error } = useQuery({
  queryKey: ['ads', 'list', { isFavourites: true, sort: sort }] as const,
  queryFn: ({ queryKey }) => getFavouriteAds(queryKey[2].sort),
})
</script>

<template>
  <div v-if="isPending" class="loading">Loading...</div>
  <div v-else-if="isError" class="error">{{ error?.message }}</div>
  <div v-else-if="data" class="d-grid gap-4">
    <AdListHeader title="Kedvencek" :length="data.length">
      <select v-model="sort" class="form-select w-auto" aria-label="Rendezés">
        <option value="address">ABC</option>
        <option value="date">Dátum</option>
      </select>
    </AdListHeader>
    <div class="d-grid gap-3">
      <AdCard v-for="ad in data" :key="ad.adId" :ad="ad">
        <p
          v-if="ad.favourite"
          class="card-text d-flex align-items-center gap-1"
        >
          <CalendarDays :size="18" />
          {{ new Date(ad.favourite.createdAt).toLocaleDateString('hu-HU') }}
        </p>
      </AdCard>
    </div>
  </div>
</template>
