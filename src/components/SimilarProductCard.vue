<template>
    <div>
        <figure class="md:h-[31.8rem] mb-3.2 md:mb-16">
            <img class="rounded-0.8 hidden lg:inline" :src="product.image.desktop" :alt="product.name">
            <img class="rounded-0.8 hidden md:inline lg:hidden" :src="product.image.tablet" :alt="product.name">
            <img class="rounded-0.8 md:hidden" :src="product.image.mobile" :alt="product.name">
        </figure>
        <h6 class="mb-3.2 font-bold text-center text-black text-lg leading-md tracking-lp">{{ product.name }}</h6>
        <router-link :to="{name: 'product', params: { slug: product.slug }}" class="btn btn-default btn-primary mx-auto">see product</router-link>
    </div>
</template>

<script setup lang="ts">
import type { SimilarProduct } from '@/models'



const props = defineProps<{ product: SimilarProduct}>()
</script>
