<template>
    <modal-mask v-show="show" @click="closeModal" :styles="['pt-3.2', 'px-2.4', 'md:pt-4.8', 'lg:pt-1.6']">
        <Transition name="modal">
            <div v-show="show" @click.stop="" class="bg-white md:w-[54rem] rounded-0.8 p-3.2 md:p-4.8 md:mx-auto">
                <order-confirmation-icon class="mb-2.4 md:mb-3.2"></order-confirmation-icon>
                <h3 class="font-bold uppercase text-lg md:text-xl leading-[2.8rem] md:leading-lg tracking-sl md:tracking-sp text-black mb-1.6 md:mb-2.4">thank you <br> for your order</h3>
                <p class="text-black/50 font-medium text-sm leading-sm mb-2.4 md:mb-3.2">You will receive an email confirmation shortly.</p>
                <div class="mb-2.4 md:mb-4.8 md:w-[44.4rem] md:h-56 bg-grey rounded-0.8 flex flex-col md:flex-row">
                    <div class="p-2.4 flex-1 flex flex-col gap-[1.2rem]">
                        <div class="flex">
                            <figure class="w-20 h-20">
                                <img :src="firstItem.imageUrl" :alt="firstItem.productName">
                            </figure>
                            <div class="flex flex-col justify-center ml-1.6 mr-auto">
                                <span class="uppercase font-bold text-sm leading-sm text-black">{{ firstItem.productName }}</span>
                                <span class="font-bold text-sm leading-sm text-black/50">$ {{ firstItem.formattedPrice }}</span>
                            </div>
                            <span class="font-bold text-sm leading-sm text-black/50">x{{ firstItem.quantity }}</span>
                        </div>
                        <span class="h-[1px] bg-black/10"></span>
                        <p v-show="hasOtherItem" class="text-black/50 text-xss leading-xss -tracking-el font-bold text-center">and {{ otherItemCount }} other item(s)</p>
                    </div>
                    <div class="flex flex-col gap-0.8 md:justify-center pt-1.6 md:pt-0 pl-2.4 md:pl-3.2 md:w-[19.8rem] h-[9.2rem] md:h-auto bg-black rounded-b-0.8 md:rounded-bl-none md:rounded-r-0.8">
                        <span class="text-white/50 font-medium text-sm leading-sm uppercase">grand total</span>
                        <span class="text-white font-bold text-md leading-xsm">$ {{ grandTotal }}</span>
                    </div>
                </div>
                <button @click="closeModal" class="btn btn-primary btn-full">back to home</button>
            </div>
        </Transition>
    </modal-mask>
</template>

<script setup lang="ts">
import ModalMask from './AppModalMask.vue';
import OrderConfirmationIcon from '@/components/icons/IconOrderConfirmation.vue';
import type { CartProduct } from '@/models';
import { computed } from 'vue';

const props = defineProps<{ show: boolean, cart: CartProduct[], grandTotal: string}>()

const firstItem = computed(() => props.cart[0])
const hasOtherItem = computed(() => props.cart.length > 1)
const otherItemCount = computed(() => props.cart.length - 1)
const emits = defineEmits<{(e: 'close'): void }>()
const closeModal = () => emits('close')
</script>
