<script setup lang="ts">
defineProps<{ image: string }>()
</script>

<template>
  <div class="overflow-hidden rounded-4 d-none d-sm-grid image-gallery gap-3">
    <img
      :src="image"
      alt="..."
      class="img-fluid object-fit-cover w-100"
      width="240"
    />
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.image-gallery {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  div {
    background-color: var(--bs-gray-600);
  }

  :first-child,
  :nth-child(2) {
    grid-row: 1 / span 2;
    aspect-ratio: 1;
  }

  :last-child {
    grid-row: 1;
  }

  :nth-child(-2) {
    grid-row: 2;
  }
}
</style>
