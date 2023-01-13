import type { Product } from "@/models";
import { defineStore } from "pinia";
import jsonProducts from '@/data/products.json';

export const useProductStore = defineStore("app", {
  state: () => ({
    products: [] as Product[],
    selectedProduct: null as Product | null
  }),
  actions: {
    loadProducts() {
        const initialProducts = jsonProducts as Product[]
        this.products = initialProducts
    },

    findProductBySlug(slug: string) {
        return this.products.find(product => product.slug === slug)
    },

    getProductsByCategory(category: string) {
        return this.products.filter(product => product.category === category).reverse()
    }
  },
});