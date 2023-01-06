<template>
    <nav class="px-2.4 md:px-0" :class="bgCol">
        <div class="md:w-cm lg:w-ct mx-auto flex items-center h-36 lg:h-[9.7rem]">
            <button class="lg:hidden">
                <img src="@/assets/shared/tablet/icon-hamburger.svg" alt="hamburger">
            </button>
            <img class="ml-[7.6rem] mr-[6.9rem] md:ml-[4.2rem] md:mr-auto lg:ml-0 lg:mr-0" src="@/assets/shared/desktop/logo.svg" alt="logo">
            <div class="hidden lg:flex gap-3.4 ml-[19.7rem] mr-auto">
                <router-link :to="{name: 'home'}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Home</router-link>
                <router-link :to="{name: 'category', params: {category: 'headphones'}}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Headphones</router-link>
                <router-link :to="{name: 'category', params: {category: 'speakers'}}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Speakers</router-link>
                <router-link :to="{name: 'category', params: {category: 'earphones'}}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Earphones</router-link>
            </div> 
            <button><img src="@/assets/shared/desktop/icon-cart.svg" alt="cart"></button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
    const bgCol = ref('bg-black-light')
    
    watch(
      () => route.name,
       routeName => {
        if (routeName === 'home') {
            bgCol.value = 'bg-black-light'
        } else {
            bgCol.value = 'bg-black'
        }
      }
    )
</script>
