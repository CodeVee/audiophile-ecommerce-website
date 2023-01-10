<template>
    <div class="mt-6.4 mb-9.5 md:mt-9.5 md:mb-[11.4rem] lg:my-56 flex flex-col lg:flex-row gap-3.2 lg:gap-12 px-2.4 md:px-0 md:w-cm lg:w-ct mx-0 md:mx-auto">
        <div class="flex-1 bg-white p-2.4 md:px-11 md:py-12 lg:px-4.8 lg:pb-4.8 lg:pt-[5.4rem] rounded-0.8">
            <h2 class="font-bold text-black text-lgm md:text-xl leading-xl md:leading-lg tracking-xp md:tracking-xpm uppercase mb-3.2 md:mb-16">checkout</h2>
            <section class="mb-3.2 md:mb-[5.3rem] flex flex-col gap-1.6">
                <h3 class="text-brown font-bold text-xs leading-sm tracking-xp uppercase">billing details</h3>
                <div class="grid md:grid-cols-2 gap-y-2.4 md:gap-x-1.6">
                    <Textbox label-text="Name" placeholder="Alexei Ward"/>
                    <Textbox label-text="Email" placeholder="alexei@mail.com"/>
                    <Textbox label-text="Phone Number" placeholder="+1 202-555-0136"/>
                </div>
            </section>
            <section class="mb-3.2 md:mb-24 flex flex-col gap-1.6">
                <h3 class="text-brown font-bold text-xs leading-sm tracking-xp uppercase">shipping info</h3>
                <div class="grid md:grid-cols-2 gap-y-2.4 md:gap-x-1.6">
                    <Textbox label-text="Address" placeholder="1137 Williams Avenue" class="lg:col-span-2"/>
                    <Textbox label-text="Zip Code" placeholder="10001"/>
                    <Textbox label-text="City" placeholder="New York"/>
                    <Textbox label-text="Country" placeholder="United States"/>
                </div>
            </section>
            <section>
                <h3 class="text-brown font-bold text-xs leading-sm tracking-xp uppercase mb-1.6">payment details</h3>
                <div class="grid md:grid-cols-2 gap-y-2.4 md:gap-x-1.6">
                    <h5 class="font-bold text-black text-[1.2rem] leading-[1.6rem] -tracking-[.21px] capitalize">payment method</h5>
                    <RadioButton label-text="e-Money" v-model="selectedPayment" name="payment method"/>
                    <RadioButton label-text="Cash on Delivery" v-model="selectedPayment" name="payment method" class="md:col-start-2"/>
                </div>
                <div v-show="selectedPayment === eMoney" class="grid md:grid-cols-2 gap-y-2.4 md:gap-x-1.6 mt-3.2 md:mt-2.4">
                    <Textbox label-text="e-Money Number" placeholder="238521993"/>
                    <Textbox label-text="e-Money PIN" placeholder="6891"/>  
                </div>
                <div v-show="!(selectedPayment === eMoney)" class="flex flex-col md:flex-row gap-2.4 md:gap-12 2 mt-3.2 md:mt-12">
                    <figure class="w-4.8 h-4.8 self-center">
                        <img src="@/assets/checkout/icon-cash-on-delivery.svg" alt="cash">
                    </figure>
                    <p class="flex-1 font-medium text-sm leading-sm text-black/50 text-center md:text-left">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
            </section>
        </div>
        <div class="w-[35rem] py-3.2 px-2.4 md:px-3.2 flex flex-col gap-3.2 bg-white rounded-0.8 self-start">
            <h4 class="uppercase text-black text-md leading-sm tracking-sp font-bold">summary</h4>
            <button class="btn btn-primary btn-full">continue & pay</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Textbox from '@/components/AppTextbox.vue';
import RadioButton from '@/components/AppRadioButton.vue';
import { ref } from 'vue';

const eMoney = 'e-Money'
const selectedPayment = ref(eMoney)
</script>
