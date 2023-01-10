<template>
    <div class="mt-6.4 mb-9.5 md:mt-9.5 md:mb-[11.4rem] lg:my-56 flex flex-col lg:flex-row gap-3.2 lg:gap-12 px-2.4 md:px-0 md:w-cm lg:w-ct mx-0 md:mx-auto">
        <div class="flex-1 bg-white p-2.4 md:px-11 md:py-12 lg:px-4.8 lg:pb-4.8 lg:pt-[5.4rem] rounded-0.8">
            <h2 class="font-bold text-black text-lgm md:text-xl leading-xl md:leading-lg tracking-xp md:tracking-xpm uppercase mb-3.2 md:mb-16">checkout</h2>
            <section class="mb-3.2 md:mb-[5.3rem] flex flex-col gap-1.6">
                <h3 class="text-brown font-bold text-xs leading-sm tracking-xp uppercase">billing details</h3>
                <div class="grid md:grid-cols-2 gap-y-2.4 md:gap-x-1.6"></div>
            </section>
            <section class="mb-3.2 md:mb-24 flex flex-col gap-1.6">
                <h3 class="text-brown font-bold text-xs leading-sm tracking-xp uppercase">shipping info</h3>
                <div class="grid md:grid-cols-2 gap-y-2.4 md:gap-x-1.6"></div>
            </section>
            <section class="flex flex-col gap-1.6">
                <h3 class="text-brown font-bold text-xs leading-sm tracking-xp uppercase">payment details</h3>
                <div class="grid md:grid-cols-2 gap-y-2.4 md:gap-x-1.6"></div>
            </section>
        </div>
        <div class="w-[35rem] py-3.2 px-2.4 md:px-3.2 flex flex-col gap-3.2 bg-white rounded-0.8 self-start">
            <h4 class="uppercase text-black text-md leading-sm tracking-sp font-bold">summary</h4>
            <button class="btn btn-primary btn-full">continue & pay</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
