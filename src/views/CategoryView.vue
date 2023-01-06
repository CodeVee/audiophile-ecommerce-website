<template>
    <div>
        {{ categoryProducts.length }}
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