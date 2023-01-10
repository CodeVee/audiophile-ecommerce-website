<template>
    <div class="flex items-center">
        <figure class="h-6.4 w-6.4">
            <img class="rounded-0.8" src="/cart/image-xx99-mark-two-headphones.jpg" alt="xx99">
        </figure>
        <div class="flex flex-col justify-center ml-1.6 mr-auto">
            <span class="uppercase font-bold text-sm leading-sm text-black">xx99 mk ii</span>
            <span class="font-bold text-sm leading-sm text-black/50">$ 2,999</span>
        </div>
        <div v-show="!checkout" class="h-3.2 w-[9.6rem] flex justify-around items-center bg-grey">
            <button class="text-black/25 w-1.6 h-[1.8rem] hover:text-brown font-bold text-xs leading-xs">-</button>
            <span class="text-black font-bold text-xs leading-xs">{{ 1 }}</span>
            <button class="text-black/25 w-1.6 h-[1.8rem] hover:text-brown font-bold text-xs leading-xs">+</button>
        </div>
        <span v-show="checkout" class="font-bold text-sm leading-sm text-black/50">x{{ 1 }}</span>
    </div>
</template>

<script setup lang="ts">

defineProps<{checkout?: boolean}>()
</script>
