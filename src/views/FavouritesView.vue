<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AdCard from '@/components/AdCard.vue'
import AdFavouriteDate from '@/components/AdFavouriteDate.vue'
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
      <label for="sort" class="d-none d-sm-inline-block">Rendezés:</label>
      <select
        v-model="sort"
        class="form-select w-auto shadow-primary"
        aria-label="Rendezés"
        id="sort"
      >
        <option value="address">ABC</option>
        <option value="date">Dátum</option>
      </select>
    </AdListHeader>
    <div class="d-grid gap-3">
      <AdCard v-for="ad in data" :key="ad.adId" :ad="ad" link>
        <AdFavouriteDate :favourite="ad.favourite" />
      </AdCard>
    </div>
  </div>
</template>
