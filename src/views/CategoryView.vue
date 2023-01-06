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
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router'
import jsonProducts from '@/data/products.json'
import type { Product } from '@/models/product.model';

const props = defineProps<{category: string }>()
const router = useRouter()
let categoryProducts: Product[] = []


const loadProducts = (category: string) => {
    const validCategories = ['earphones', 'headphones', 'speakers']
    const validCategory = validCategories.includes(category.toLowerCase())

    if (!validCategory) {
        router.push({name: 'home'})
        return
    }

    const products = jsonProducts as Product[];
    categoryProducts = products.filter(product => product.category === category)
}

loadProducts(props.category)

watch(() => props.category, currentCategory => loadProducts(currentCategory))
</script>

<style scoped>

</style>