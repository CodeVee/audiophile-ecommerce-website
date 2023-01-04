<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue';
</script>

<template>
  <div class="bg-grey-light">
    <AppNavbar />
    <RouterView />
  </div>
</template>

<style scoped>
</style>
