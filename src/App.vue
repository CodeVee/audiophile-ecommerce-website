<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <div class="bg-grey-light">
    <AppNavbar />
    <RouterView />
    <AppFooter />
  </div>
</template>

<style scoped>
</style>
