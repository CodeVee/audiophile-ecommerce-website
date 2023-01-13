<template>
    <div class="flex items-center">
        <figure class="h-6.4 w-6.4">
            <img class="rounded-0.8" :src="item.imageUrl" :alt="item.productName">
        </figure>
        <div class="flex flex-col justify-center ml-1.6 mr-auto">
            <span class="uppercase font-bold text-sm leading-sm text-black">{{ item.productName }}</span>
            <span class="font-bold text-sm leading-sm text-black/50">$ {{ item.formattedPrice }}</span>
        </div>
        <div v-show="!checkout" class="h-3.2 w-[9.6rem] flex justify-around items-center bg-grey">
            <button @click="onReduce" class="text-black/25 w-1.6 h-[1.8rem] hover:text-brown font-bold text-xs leading-xs">-</button>
            <span class="text-black font-bold text-xs leading-xs">{{ item.quantity }}</span>
            <button @click="onIncrease" class="text-black/25 w-1.6 h-[1.8rem] hover:text-brown font-bold text-xs leading-xs">+</button>
        </div>
        <span v-show="checkout" class="font-bold text-sm leading-sm text-black/50">x{{ item.quantity }}</span>
    </div>
</template>

<script setup lang="ts">
import type { CartProduct } from '@/models'

defineProps<{item: CartProduct, checkout?: boolean}>()
const emits = defineEmits<{
    (e: 'increase'): void
    (e: 'reduce'): void
}>()

const onIncrease = () => emits('increase')
const onReduce = () => emits('reduce')
</script>
