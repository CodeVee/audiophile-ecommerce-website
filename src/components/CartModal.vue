<template>
    <modal-mask v-show="show" @click="closeModal" :styles="['pt-2.4', 'px-2.4', 'md:pr-16', 'lg:pt-3.2', 'lg:pr-[16.5rem]']">
        <Transition name="move">
            <div v-show="show" @click.stop="" class="bg-white md:w-[37.7rem] rounded-0.8 px-[2.8rem] md:px-3.2 py-3.2 ml-auto">
                <div class="flex flex-col gap-3.2 mb-2.4">
                    <div class="flex justify-between">
                        <h5 class="font-bold text-md leading-sm tracking-sp text-black uppercase">cart (3)</h5>
                        <button class="self-center text-black/50 hover:text-brown font-medium text-sm leading-sm underline capitalize">remove all</button>
                    </div>
                    <div class="flex flex-col gap-2.4 max-h-[24rem] overflow-auto bar">
                        <CartItem v-for="num in arr"/>
                    </div>
                    <div class="flex justify-between items-center">
                        <h5 class="font-bold text-md leading-sm tracking-sp text-black uppercase">$ 5,396</h5>
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

const arr = [1, 2, 3]
const props = defineProps<{ show: boolean}>()
const router = useRouter()
const emits = defineEmits<{(e: 'close'): void }>()

const closeModal = () => emits('close')
const checkout = () => {
    router.push({name: 'checkout'})
    closeModal()
}
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