<template>
    <nav class="px-2.4 md:px-0 fixed w-full z-10" :class="bgCol">
        <div class="md:w-cm lg:w-ct mx-auto flex items-center h-36 lg:h-9.7">
            <button @click="toggleMenu" class="lg:hidden">
                <hamburger-icon></hamburger-icon>
            </button>
            <router-link :to="{name: 'home'}" class="ml-[7.6rem] mr-[6.9rem] md:ml-[4.2rem] md:mr-auto lg:ml-0 lg:mr-0">
                <logo-icon></logo-icon>
            </router-link>
            <div class="hidden lg:flex gap-3.4 ml-[19.7rem] mr-auto">
                <router-link :to="{name: 'home'}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Home</router-link>
                <router-link :to="{name: 'category', params: {category: 'headphones'}}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Headphones</router-link>
                <router-link :to="{name: 'category', params: {category: 'speakers'}}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Speakers</router-link>
                <router-link :to="{name: 'category', params: {category: 'earphones'}}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Earphones</router-link>
            </div> 
            <button @click="displayCart">
                <cart-icon></cart-icon>
            </button>
        </div>
    </nav>
    <Teleport to="body">
      <mobile-menu :show="activeMenu" @close="hideMenu"></mobile-menu>
    </Teleport>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import HamburgerIcon from '@/components/icons/IconHamburger.vue';
import CartIcon from '@/components/icons/IconCart.vue';
import LogoIcon from '@/components/icons/IconLogo.vue';
import MobileMenu from '@/components/AppMobileMenu.vue';

const activeMenu = ref(false)
const emits = defineEmits<{ (e: 'show'): void}>()
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

const displayCart = () => emits('show')

const toggleMenu = () => activeMenu.value = !activeMenu.value
const hideMenu = () => activeMenu.value = false
</script>
