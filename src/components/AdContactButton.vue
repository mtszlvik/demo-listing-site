<script setup lang="ts">
import type { Contact } from '@/api'

defineProps<{
  contact: Contact
}>()
</script>

<template>
  <button
    type="button"
    class="btn btn-primary align-self-sm-end px-5 py-2"
    data-bs-toggle="modal"
    data-bs-target="#contactModal"
  >
    Kapcsolatfelvétel
  </button>

  <Teleport to="body">
    <div
      class="modal fade"
      id="contactModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Kapcsolat</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              E-mail:
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </p>
            <p>
              Telefon:
              <a
                v-for="phone in contact.parsedPhoneNumbers"
                :key="phone"
                :href="`tel:${phone}`"
                class="me-2"
                >{{ phone }}</a
              >
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Bezárás
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
