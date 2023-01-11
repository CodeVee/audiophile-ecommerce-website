<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import CartModal from '@/components/CartModal.vue';
import { ref } from 'vue';

const cartActive = ref(false)

const showCart = () => cartActive.value = true
const hideCart = () => cartActive.value = false
</script>

<template>
  <div class="bg-grey-light">
    <AppNavbar @show="showCart"/>
    <div class="pt-36 lg:pt-9.7">
      <RouterView />
    </div>
    <AppFooter />
    <Teleport to="body">
      <CartModal :show="cartActive" @close="hideCart" />
    </Teleport>
  </div>
</template>

<style lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.bar {
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 3px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: gray;
    }
}
</style>
