<template>
    <div v-if="product" class="px-2.4 md:px-0 pt-[6.4rem] pb-12f md:py-12f lg:py-16f flex flex-col gap-12f lg:gap-16f md:w-cm lg:w-ct mx-0 md:mx-auto">
        <div class="flex flex-col md:flex-row gap-3.2 md:gap-[6.9rem] lg:gap-[12.5rem]">
            <div :style="{'background-image': bgImage}" class="h-[32.7rem] md:h-[48rem] lg:h-[56rem] md:w-[28rem] lg:w-[54rem] rounded-0.8 bg-contain"></div>
            <div class="md:self-center md:w-[34rem] lg:w-[44.5rem]">
                <h3 v-show="product.new" class="uppercase text-brown font-normal text-xsm leading-xs tracking-pp mb-2.4 md:mb-1.6">new product</h3>
                <h4 class="uppercase text-black font-bold text-lgm lg:text-2xl leading-xl md:leading-md lg:leading-2xl tracking-xp lg:tracking-mp mb-2.4 md:mb-3.2 md:px-2 lg:px-0">{{ product.name }}</h4>
                <p class="text-black/50 font-medium text-sm leading-sm mb-2.4 md:mb-3.2">{{ product.description }}</p>
                <span class="text-black font-bold text-md leading-sm tracking-sp inline-block mb-12 lg:mb-[4.7rem]">&#36; {{ product.formattedPrice }}</span>
                <div class="flex gap-1.6">
                    <div class="w-48 h-4.8 flex justify-around items-center bg-grey">
                        <button @click="reduceQuantity" class="text-black/25 w-1.6 h-[1.8rem] hover:text-brown font-bold text-xs leading-xs">-</button>
                        <span class="text-black font-bold text-xs leading-xs">{{ quantity }}</span>
                        <button @click="increaseQuantity" class="text-black/25 w-1.6 h-[1.8rem] hover:text-brown font-bold text-xs leading-xs">+</button>
                    </div>
                    <button @click="addToCart" class="btn btn-primary btn-default mx-auto lg:mx-0">add to cart</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-8.8 md:gap-12f lg:gap-[12.5rem]">
            <div class="lg:w-[63.5rem]">
                <h5 class="font-bold text-black text-lg md:text-xl leading-lg tracking-xp md:tracking-xpm uppercase mb-2.4 md:mb-3.2">features</h5>
                <p class="font-medium text-black/50 text-sm leading-sm flex flex-col">
                    {{ product.formattedDescription[0] }} <br><br> {{ product.formattedDescription[1] }}
                </p>
            </div>
            <div class="lg:flex-1 flex flex-col md:flex-row lg:flex-col gap-2.4 md:gap-4 lg:gap-3.2">
                <h5 class="font-bold text-black text-lg md:text-xl leading-lg tracking-xp md:tracking-xpm uppercase md:w-[34rem] lg:w-auto">in the box</h5>
                <div class="flex flex-col gap-[.8rem]">
                    <div v-for="accessory in product.includes" class="flex gap-2.4">
                        <span class="font-bold text-brown text-sm leading-sm">{{ accessory.quantity }}x</span>
                        <span class="font-medium text-black/50 text-sm leading-sm capitalize">{{ accessory.item }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:h-[36.8rem] lg:h-[59.2rem] grid md:grid-cols-[27.7rem_1fr] lg:grid-cols-[44.5rem_1fr] md:grid-rows-2 gap-y-8 lg:gap-y-3.2 gap-x-[1.8rem] lg:gap-x-12">
            <figure>
                <img class="rounded-0.8 hidden lg:inline" :src="product.gallery.first.desktop" alt="image 1">
                <img class="rounded-0.8 hidden md:inline lg:hidden" :src="product.gallery.first.tablet" alt="image 1">
                <img class="rounded-0.8 md:hidden" :src="product.gallery.first.mobile" alt="image 1">
            </figure>
            <figure class=" row-start-2">
                <img class="rounded-0.8 hidden lg:inline" :src="product.gallery.second.desktop" alt="image 2">
                <img class="rounded-0.8 hidden md:inline lg:hidden" :src="product.gallery.second.tablet" alt="image 2">
                <img class="rounded-0.8 md:hidden" :src="product.gallery.second.mobile" alt="image 2">
            </figure>
            <figure>
                <img class="rounded-0.8 hidden lg:inline" :src="product.gallery.third.desktop" alt="image 3">
                <img class="rounded-0.8 hidden md:inline lg:hidden" :src="product.gallery.third.tablet" alt="image 3">
                <img class="rounded-0.8 md:hidden" :src="product.gallery.third.mobile" alt="image 3">
            </figure>
        </div>
        <div>
            <h5 class="mb-16 md:mb-5.6 lg:mb-6.4 uppercase text-black font-bold text-lg md:text-xl leading-lg tracking-sl md:tracking-xpm text-center">you may also like</h5>
            <div class="grid md:grid-cols-3 gap-y-5.6 md:gap-y-0 gap-x-4 lg:gap-x-12">
                <SimilarProductCard v-for="similarProduct in product.others" :product="similarProduct"/>
            </div>
        </div>
        <CategoryNav />
        <AppBanner />
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/models'
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import SimilarProductCard from '@/components/SimilarProductCard.vue';
import CategoryNav from '@/components/CategoryNav.vue';
import AppBanner from '@/components/AppBanner.vue';
import { generateScreenBgImage } from '@/helpers';
import { useProductStore, useAppStore } from '@/stores';
import { storeToRefs } from 'pinia';


const props = defineProps<{slug: string }>()
const router = useRouter()
const productStore = useProductStore()
const appStore = useAppStore()

const { isMobileScreen } = storeToRefs(appStore)
const { addProductToCart, findProductBySlug } = productStore

const product = ref<Product | undefined>()
const quantity = ref(0)
const bgImage = ref('')

const loadProduct = (slug: string) => {
    product.value = findProductBySlug(slug)

    if (!product.value) {
        router.push({name: 'home'})
        return
    }
    bgImage.value = generateScreenBgImage(product.value.image)
    quantity.value = 0
}

const reduceQuantity = () => {
    if (quantity.value === 0) return
    quantity.value--
}
const increaseQuantity = () => {
    if (quantity.value === 10) return
    quantity.value++
}

const addToCart = () => {
    if (quantity.value === 0 || !product.value) return
    addProductToCart(product.value.id, quantity.value)
    quantity.value = 0
}
loadProduct(props.slug)

watch(() => props.slug, currentSlug => loadProduct(currentSlug))
watch(isMobileScreen, () => {
    if (!product.value) return
    bgImage.value = generateScreenBgImage(product.value.image)
})
</script>
