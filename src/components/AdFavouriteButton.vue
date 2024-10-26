<script setup lang="ts">
import { Star } from 'lucide-vue-next'
import { toggleFavourite, type Favourite } from '@/api'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

const props = defineProps<{
  adId: number
  favourite: Favourite | null
}>()

const queryClient = useQueryClient()

const { mutate } = useMutation({
  mutationFn: toggleFavourite,
  onSuccess: newAd => {
    queryClient.setQueryData(['ads', 'details', newAd.adId], newAd)

    queryClient.invalidateQueries({
      queryKey: ['ads', 'list'],
    })
  },
})

function handleToggle() {
  mutate(props.adId)
}
</script>

<template>
  <button
    type="button"
    @click.stop="handleToggle"
    class="btn btn-light text-body-secondary position-absolute btn-favourite"
  >
    <Star :class="{ active: !!favourite }" />
  </button>
</template>

<style scoped>
.btn-favourite {
  top: var(--bs-card-spacer-y);
  right: var(--bs-card-spacer-x);
}

.btn-favourite .active {
  color: var(--bs-yellow);
  fill: var(--bs-yellow);
}
</style>
