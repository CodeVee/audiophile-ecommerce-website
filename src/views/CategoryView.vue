<template>
    <div>
        <header class="bg-black">
            <div class="md:w-cm lg:w-ct mx-auto">
                <div class="bg-white/20 h-[1px]"></div>
                <div class="h-[10.2rem] md:h-[24.6rem] lg:h-[23.9rem] flex justify-center items-center">
                    <h2 class="uppercase text-white font-bold text-lgm md:text-2xl leading-xl md:leading-2xl tracking-px md:tracking-mp">{{ category }}</h2>
                </div>
            </div>    
        </header>
        <div class="px-2.4 md:px-0 pt-[6.4rem] pb-12f md:py-12f lg:py-16f flex flex-col gap-12f lg:gap-16f md:w-cm lg:w-ct mx-0 md:mx-auto">
            <ProductCard v-for="(product, index) in categoryProducts" :product="product" :index="index" />
            <CategoryNav />
            <AppBanner />
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router'
import type { Product } from '@/models'
import ProductCard from '@/components/ProductCard.vue';
import CategoryNav from '@/components/CategoryNav.vue';
import AppBanner from '@/components/AppBanner.vue';
import { useProductStore } from '@/stores';

const props = defineProps<{category: string }>()
const router = useRouter()
const productStore = useProductStore()
let categoryProducts: Product[] = []


const loadProducts = (category: string) => {
    const validCategories = ['earphones', 'headphones', 'speakers']
    const validCategory = validCategories.includes(category.toLowerCase())

    if (!validCategory) {
        router.push({name: 'home'})
        return
    }

    categoryProducts = productStore.getProductsByCategory(category)
}

loadProducts(props.category)

watch(() => props.category, currentCategory => loadProducts(currentCategory))
</script>

<style scoped>

</style>