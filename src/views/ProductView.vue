<template>
    <div v-if="product">
        <div class="px-2.4 md:px-0 pt-[6.4rem] pb-12f md:py-12f lg:py-16f flex flex-col gap-12f lg:gap-16f md:w-cm lg:w-ct mx-0 md:mx-auto">
            <div class="flex flex-col md:flex-row gap-3.2 md:gap-[6.9rem] lg:gap-[12.5rem]">
                <div :style="{'background-image': bgImage}"
                class="h-[32.7rem] md:h-[48rem] lg:h-[56rem] md:w-[28rem] lg:w-[54rem] rounded-0.8 bg-cover lg:bg-contain bg-center bg-no-repeat"></div>
                <div class="md:self-center md:w-[34rem] lg:w-[44.5rem]">
                    <h3 v-show="product.new" class="uppercase text-brown font-normal text-xsm leading-xs tracking-pp mb-2.4 md:mb-1.6">new product</h3>
                    <h4 class="uppercase text-black font-bold md:text-lgm md:leading-md md:tracking-xp mb-2.4 md:mb-3.2 md:px-2 lg:px-0">{{ product.name }}</h4>
                    <p class="text-black/50 font-medium text-sm leading-sm mb-2.4 md:mb-3.2">{{ product.description }}</p>
                    <span class="text-black font-bold text-md leading-sm tracking-sp inline-block mb-12 lg:mb-[4.7rem]">{{ product.price }}</span>
                    <div class="flex">
                        <div class="w-48 h-4.8 flex gap-1.6 items-center">
                            <button class="text-black/25 hover:text-brown font-bold text-xs leading-xs">-</button>
                            <span class="text-black font-bold text-xs leading-xs">{{ quantity }}</span>
                            <button class="text-black/25 hover:text-brown font-bold text-xs leading-xs">+</button>
                        </div>
                        <button class="btn btn-primary btn-default mx-auto lg:mx-0">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/models/product.model';
import { computed, ref } from 'vue';
import { useScreen } from 'vue-screen'

let product: Product | undefined 
const screen = useScreen()


const isMobile = computed(() => screen.width < 500)
const isTablet = computed(() => screen.width < 1020)

const quantity = ref(1)

const generateBgImage = (imageUrl: string) => `url('${imageUrl}')`
const bgImage = computed(() => {
    if (!product) return ''

    const { mobile, tablet, desktop } = product.image

    if (isMobile.value) return generateBgImage(mobile)
    if (isTablet.value) return generateBgImage(tablet)
    return generateBgImage(desktop)
})



</script>

<style scoped>

</style>