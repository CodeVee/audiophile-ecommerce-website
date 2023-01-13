<template>
    <Form @submit="submit" :validation-schema="schema" class="mt-6.4 mb-9.5 md:mt-9.5 md:mb-[11.4rem] lg:my-56 flex flex-col lg:flex-row gap-3.2 lg:gap-12 px-2.4 md:px-0 md:w-cm lg:w-ct mx-0 md:mx-auto">
        <div class="lg:flex-1 bg-white p-2.4 md:px-11 md:py-12 lg:px-4.8 lg:pb-4.8 lg:pt-[5.4rem] rounded-0.8">
            <h2 class="font-bold text-black text-lgm md:text-xl leading-xl md:leading-lg tracking-xp md:tracking-xpm uppercase mb-3.2 md:mb-16">checkout</h2>
            <section class="mb-3.2 md:mb-[5.3rem] flex flex-col gap-1.6">
                <h3 class="text-brown font-bold text-xs leading-sm tracking-xp uppercase">billing details</h3>
                <div class="grid md:grid-cols-2 gap-y-2.4 md:gap-x-1.6">
                    <Textbox label-text="Name" id="name" placeholder="Alexei Ward"/>
                    <Textbox label-text="Email" id="email" type="email" placeholder="alexei@mail.com"/>
                    <Textbox label-text="Phone Number" id="phone" placeholder="+1 202-555-0136"/>
                </div>
            </section>
            <section class="mb-3.2 md:mb-24 flex flex-col gap-1.6">
                <h3 class="text-brown font-bold text-xs leading-sm tracking-xp uppercase">shipping info</h3>
                <div class="grid md:grid-cols-2 gap-y-2.4 md:gap-x-1.6">
                    <Textbox label-text="Address" id="address" placeholder="1137 Williams Avenue" class="lg:col-span-2"/>
                    <Textbox label-text="Zip Code" id="zipCode" placeholder="10001"/>
                    <Textbox label-text="City" id="city" placeholder="New York"/>
                    <Textbox label-text="Country" id="country" placeholder="United States"/>
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
                    <Textbox label-text="e-Money Number" id="eMoneyNumber" placeholder="238521993"/>
                    <Textbox label-text="e-Money PIN" id="eMoneyPin" placeholder="6891"/>  
                </div>
                <div v-show="!(selectedPayment === eMoney)" class="flex flex-col md:flex-row gap-2.4 md:gap-12 2 mt-3.2 md:mt-12">
                    <cash-on-delivery-icon class="self-center"></cash-on-delivery-icon>
                    <p class="flex-1 font-medium text-sm leading-sm text-black/50 text-center md:text-left">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
            </section>
        </div>
        <div class="lg:w-[35rem] py-3.2 px-2.4 md:px-3.2 flex flex-col gap-3.2 bg-white rounded-0.8 lg:self-start">
            <h4 class="uppercase text-black text-md leading-sm tracking-sp font-bold">summary</h4>
            <div class="flex flex-col gap-2.4 max-h-[24rem] overflow-auto bar">
                <CartItem checkout v-for="item in cart" :item="item"/>
            </div>
            <div>
                <div class="flex justify-between items-center mb-0.8">
                    <h5 class="self-center text-black/50 font-medium text-sm leading-sm uppercase">total</h5>
                    <h5 class="font-bold text-md leading-sm text-black">$ {{ totalCostFormatted }}</h5>
                </div>
                <div class="flex justify-between items-center mb-0.8">
                    <h5 class="self-center text-black/50 font-medium text-sm leading-sm uppercase">shipping</h5>
                    <h5 class="font-bold text-md leading-sm text-black">$ {{ shippingCostFormatted }}</h5>
                </div>
                <div class="flex justify-between items-center mb-2.4">
                    <h5 class="self-center text-black/50 font-medium text-sm leading-sm uppercase">vat (included)</h5>
                    <h5 class="font-bold text-md leading-sm text-black">$ {{ vatFormatted }}</h5>
                </div>
                <div class="flex justify-between items-center">
                    <h5 class="self-center text-black/50 font-medium text-sm leading-sm uppercase">grand total</h5>
                    <h5 class="font-bold text-md leading-sm text-brown">$ {{ grandTotalFormatted }}</h5>
                </div>
            </div>
            
            <button class="btn btn-primary btn-full">continue & pay</button>
        </div>
    </Form>
    <Teleport to="body">
      <OrderConfirmModal :show="orderCompleted" :cart="cart" :grand-total="grandTotalFormatted" @close="returnToHomepage" />
    </Teleport>
</template>

<script setup lang="ts">
import Textbox from '@/components/AppTextbox.vue';
import RadioButton from '@/components/AppRadioButton.vue';
import CashOnDeliveryIcon from '@/components/icons/IconCashOnDelivery.vue';
import CartItem from '@/components/CartItem.vue';
import OrderConfirmModal from '@/components/OrderConfirmModal.vue';
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue';
import { Form } from 'vee-validate';
import * as yup from 'yup';
import { useProductStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { formatCurrency } from '@/helpers';

const emptyLabel = ' '
const baseSchema = yup.object({
    name: yup.string().required().label(emptyLabel),
    email: yup.string().required().email().label(emptyLabel),
});

const eMoney = 'e-Money'
const selectedPayment = ref(eMoney)
const orderCompleted = ref(false)
const router = useRouter()
const productStore = useProductStore()

const { cart } = storeToRefs(productStore)
const { clearCart } = productStore

const cartTotal = computed(() => {
    const sum = cart.value.reduce((agg, item) => {
        const value = item.price * item.quantity
        agg += value
        return agg
    }, 0)
    return sum
})
const totalCostFormatted = computed(() => formatCurrency(cartTotal.value))

const shippingCost = computed(() => cart.value.length * 10)
const shippingCostFormatted = computed(() => formatCurrency(shippingCost.value))

const vatFormatted = computed(() => formatCurrency(cartTotal.value / 5))

const grandTotalFormatted = computed(() => formatCurrency(cartTotal.value + shippingCost.value))

const schema = computed(() => {
    if (selectedPayment.value === eMoney) {
        return yup.object({
            name: yup.string().required().label(emptyLabel),
            email: yup.string().required().email().label(emptyLabel),
            eMoneyNumber: yup.string().required().label(emptyLabel),
            eMoneyPin: yup.string().required().label(emptyLabel),
        });
    }
    
    return baseSchema
})

const showModal = () => orderCompleted.value = true

const returnToHomepage = () => {
    orderCompleted.value = false
    clearCart()
    router.push({name: 'home'})
}

const submit = (values: any) => {
    console.log(values)
    showModal()
}
</script>
