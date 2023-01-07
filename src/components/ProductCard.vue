<template>
    <div class="flex flex-col lg:flex-row gap-3.2 md:gap-[5.2rem] lg:gap-[12.5rem]">
        <div :class="{'lg:order-last': switchOrder }" class="h-[35.2rem] lg:h-[56rem] lg:w-[54rem] rounded-0.8 bg-cover lg:bg-contain bg-center bg-no-repeat bg-[url('@/assets/shared/mobile/image-xx99-mark-two-headphones.jpg')] md:bg-[url('@/assets/shared/tablet/image-xx99-mark-two-headphones.jpg')] lg:bg-[url('@/assets/shared/desktop/image-xx99-mark-two-headphones.jpg')]"></div>
        <div class="self-center md:w-[57.2rem] lg:w-[44.5rem] text-center lg:text-left">
            <h3 v-show="!switchOrder" class="uppercase text-brown font-normal text-xsm leading-xs tracking-pp mb-2.4 md:mb-1.6">new product</h3>
            <h4 class="uppercase text-black font-bold text-lgm md:text-2xl leading-xl md:leading-2xl tracking-xp md:tracking-mp mb-2.4 md:mb-3.2 md:px-2 lg:px-0">XX99 Mark II Headphones</h4>
            <p class="text-black/50 font-medium text-sm leading-sm mb-2.4 md:mb-16">
                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
            <button class="btn btn-primary btn-default mx-auto lg:mx-0">see product</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/models/product.model';


const props = defineProps<{ product?: Product, switchOrder: boolean }>()
</script>
