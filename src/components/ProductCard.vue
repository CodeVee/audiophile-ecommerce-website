<template>
    <div class="flex flex-col lg:flex-row gap-3.2 md:gap-[5.2rem] lg:gap-[12.5rem]">
        <div :style="{'background-image': bgImage}"
        :class="productClass"
        class="h-[35.2rem] lg:h-[56rem] lg:w-[54rem] rounded-0.8 bg-cover lg:bg-contain bg-center bg-no-repeat"></div>
        <div class="self-center md:w-[57.2rem] lg:w-[44.5rem] text-center lg:text-left">
            <h3 v-show="product.new" class="uppercase text-brown font-normal text-xsm leading-xs tracking-pp mb-2.4 md:mb-1.6">new product</h3>
            <h4 class="uppercase text-black font-bold text-lgm md:text-2xl leading-xl md:leading-2xl tracking-xp md:tracking-mp mb-2.4 md:mb-3.2 md:px-2 lg:px-0">{{ product.name }}</h4>
            <p class="text-black/50 font-medium text-sm leading-sm mb-2.4 md:mb-16">{{ product.description }}</p>
            <router-link :to="{name: 'product', params: { slug: product.slug }}" class="btn btn-primary btn-default mx-auto lg:mx-0">see product</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/models/product.model';
import { computed } from 'vue';
import { useAppStore } from '@/stores';


const props = defineProps<{ product: Product, index: number }>()
const appStore = useAppStore()

const generateBgImage = (imageUrl: string) => `url('${imageUrl}')`
const bgImage = computed(() => {
    const { mobile, tablet, desktop } = props.product.categoryImage

    if (appStore.isMobileScreen) return generateBgImage(mobile)
    if (appStore.isTabletScreen) return generateBgImage(tablet)
    return generateBgImage(desktop)
})
const productClass = computed(() => {
    const evenItem = props.index % 2 === 1
    return { 'lg:order-last': evenItem}
})

</script>
