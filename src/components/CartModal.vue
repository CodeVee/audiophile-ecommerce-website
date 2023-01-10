<template>
    <Transition name="modal">
        <div @click="closeModal" v-if="show" class="h-[calc(100vh_-_9rem)] lg:h-[calc(100vh_-_9.7rem)] w-full bg-black/40 fixed top-36 lg:top-9.7 pt-2.4 px-2.4 md:pr-16 lg:pt-3.2 lg:pr-[16.5rem]">
            <div @click.stop="" class="bg-white md:w-[37.7rem] rounded-0.8 px-[2.8rem] md:px-3.2 py-3.2 ml-auto">
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
        </div>
    </Transition>
    
</template>

<script setup lang="ts">
import CartItem from './CartItem.vue';
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

<style scoped lang="scss">

.bar {
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 3px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: gray;
    }
}
</style>