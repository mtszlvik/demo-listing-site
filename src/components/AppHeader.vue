<script setup lang="ts">
import PageNav from '@/components/PageNav.vue'
</script>

<template>
  <header class="bg-white shadow-primary sticky-top">
    <nav class="navbar">
      <div class="container-xl">
        <button
          class="navbar-toggler d-sm-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <span class="navbar-brand fw-bold">Demo listing site</span>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Demo listing site
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <PageNav />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  --bs-navbar-padding-y: 0.75rem;
}
</style>
