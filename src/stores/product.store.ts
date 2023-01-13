import type { Product, CartProduct } from '@/models';
import { defineStore } from 'pinia';
import jsonProducts from '@/data/products.json';
import { formatCurrency } from '@/helpers';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    selectedProduct: null as Product | null,
    cart: [] as CartProduct[],
  }),
  actions: {
    loadProducts() {
      const initialProducts = jsonProducts as Product[];
      this.products = initialProducts.map((product) => {
        product.cartImage = `/cart/image-${product.slug}.jpg`

        product.formattedDescription = product.features.split('\n\n')
        product.formattedPrice = formatCurrency(product.price)
        return product;
      });
    },

    findProductBySlug(slug: string) {
      return this.products.find((product) => product.slug === slug)
    },

    getProductsByCategory(category: string) {
      return this.products
        .filter((product) => product.category === category)
        .reverse()
    },

    addProductToCart(productId: number, quantity: number) {
      const cartItem = this.cart.find((item) => item.productId === productId)
      
      if (!cartItem) {
        const product = this.products.find(product => product.id === productId)!
        const formattedName = product.name.toLowerCase()
        .replace('headphones', '').replace('earphones', '').replace('speakers', '')
        .replace('mark', 'mk').replace('wireless', '')
        const item: CartProduct = {
          productId: product.id,
          productName: formattedName,
          imageUrl: product.cartImage,
          price: product.price,
          formattedPrice: product.formattedPrice,
          quantity
        }
        this.cart.push(item)
        return
      }

      cartItem.quantity += quantity
      
    },
    removeProductFromCart(productId: number) {
      this.cart = this.cart.filter(item => item.productId !== productId)
    },

    increaseCartItemQuantity(productId: number) {
      const item = this.cart.find((item) => item.productId === productId)
      
      if (!item) return
      item.quantity++
    },

    reduceCartItemQuantity(productId: number) {
      const item = this.cart.find((item) => item.productId === productId)
      if (!item) return

      item.quantity--
      if (item.quantity === 0) this.removeProductFromCart(productId)
    },

    clearCart() {
      this.cart = []
    }
  },
});
