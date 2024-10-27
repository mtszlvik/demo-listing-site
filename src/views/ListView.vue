<script setup lang="ts">
import AdCard from '@/components/AdCard.vue'
import AdListHeader from '@/components/AdListHeader.vue'
import { getAds } from '@/api'
import { useQuery } from '@tanstack/vue-query'

const { isPending, isError, data, error } = useQuery({
  queryKey: ['ads', 'list'],
  queryFn: getAds,
})
</script>

<template>
  <div v-if="isPending" class="loading">Loading...</div>
  <div v-else-if="isError" class="error">{{ error?.message }}</div>
  <div v-else-if="data" class="d-grid gap-4">
    <AdListHeader title="Lista" :length="data.length" />
    <div class="d-grid gap-3">
      <AdCard v-for="ad in data" :key="ad.adId" :ad="ad" link />
    </div>
  </div>
</template>
