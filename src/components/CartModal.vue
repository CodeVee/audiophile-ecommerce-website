<template>
    <modal-mask v-show="show" @click="closeModal" :styles="['pt-2.4', 'px-2.4', 'md:pr-16', 'lg:pt-3.2', 'lg:pr-[16.5rem]']">
        <Transition name="move">
            <div v-show="show" @click.stop="" class="bg-white md:w-[37.7rem] rounded-0.8 px-[2.8rem] md:px-3.2 py-3.2 ml-auto">
                <div class="flex flex-col gap-3.2 mb-2.4">
                    <div class="flex justify-between">
                        <h5 class="font-bold text-md leading-sm tracking-sp text-black uppercase">cart ({{ cart.length }})</h5>
                        <button @click="removeAllItems" class="self-center text-black/50 hover:text-brown font-medium text-sm leading-sm underline capitalize">remove all</button>
                    </div>
                    <div class="flex flex-col gap-2.4 max-h-[24rem] overflow-auto bar">
                        <CartItem v-for="item in cart" :item="item" 
                        @increase="increaseItem(item.productId)" @reduce="reduceItem(item.productId)"/>
                    </div>
                    <div class="flex justify-between items-center">
                        <h5 class="font-bold text-md leading-sm tracking-sp text-black uppercase">$ {{ cartTotalFormatted }}</h5>
                        <h5 class="self-center text-black/50 font-medium text-sm leading-sm uppercase order-first">total</h5>
                    </div>
                </div>
                <button @click="checkout" class="btn btn-primary btn-full">checkout</button>
            </div>
        </Transition>
    </modal-mask>
</template>

<script setup lang="ts">
import CartItem from './CartItem.vue';
import ModalMask from './AppModalMask.vue';
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores';
import { computed } from 'vue';
import { formatCurrency } from '@/helpers';
import { storeToRefs } from 'pinia'

defineProps<{ show: boolean}>()
const productStore = useProductStore()
const { cart, cartTotal } = storeToRefs(productStore)
const { clearCart, increaseCartItemQuantity, reduceCartItemQuantity } = productStore
const router = useRouter()
const emits = defineEmits<{(e: 'close'): void }>()

const cartTotalFormatted = computed(() => formatCurrency(cartTotal.value))

const closeModal = () => emits('close')
const checkout = () => {
    if (cart.value.length === 0) return
    router.push({name: 'checkout'})
    closeModal()
}

const removeAllItems = () => clearCart()
const increaseItem = (productId: number) => increaseCartItemQuantity(productId)
const reduceItem = (productId: number) => reduceCartItemQuantity(productId)
</script>

<style scoped>
.move-enter-active,
.move-leave-active {
  transition: .5s ease all;
}

.move-enter-from,
.move-leave-to {
  transform: translateX(20rem);
}
</style>