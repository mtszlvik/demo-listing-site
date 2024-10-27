<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
import type { Favourite } from '@/api'

defineProps<{
  favourite: Favourite | null
}>()
</script>

<template>
  <p v-if="favourite" class="card-text d-flex align-items-center gap-1">
    <CalendarDays :size="18" />
    {{ new Date(favourite.createdAt).toLocaleDateString('hu-HU') }}
  </p>
</template>
