<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <ul class="nav nav-pills flex-column">
    <li class="nav-item">
      <RouterLink exactActiveClass="active" class="nav-link" to="/"
        >Lista</RouterLink
      >
    </li>
    <li class="nav-item">
      <RouterLink activeClass="active" class="nav-link" to="/favourites"
        >Kedvencek</RouterLink
      >
    </li>
  </ul>
</template>

<style scoped>
.nav-link {
  --bs-nav-link-color: var(--bs-primary);
  --bs-nav-pills-link-active-color: var(--bs-primary);
  --bs-nav-pills-link-active-bg: #ebecfa;

  &.active {
    font-weight: bold;
  }
}

@media (min-width: 576px) {
  .nav {
    width: 20ch;
  }
}
</style>
