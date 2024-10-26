<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageNav from '../components/PageNav.vue'
</script>

<template>
  <div class="p-3 d-flex align-items-start gap-5 container-xl">
    <aside class="d-none d-md-block bg-white p-3 rounded-4 shadow-primary">
      <PageNav />
    </aside>

    <main class="flex-fill">
      <RouterView />
    </main>
  </div>
</template>
