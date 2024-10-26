<script setup lang="ts">
defineProps<{ title: string; length?: number }>()
</script>

<template>
  <div class="card">
    <div class="card-body d-flex flex-row align-items-center gap-2">
      <h5 class="card-title flex-fill fw-bold">{{ title }}</h5>
      <slot></slot>
      <h6 v-if="length" class="card-subtitle text-body-secondary">
        {{ length }} db
      </h6>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  --bs-card-spacer-x: 2rem;
}
</style>
