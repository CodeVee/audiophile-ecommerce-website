<template>
    <div class="bg-black">
        <div class="px-2.4 md:px-0 md:w-cm lg:w-ct h-[65.4rem] md:h-[40rem] lg:h-[36.5rem] mx-auto">
            <div class="bg-brown h-[.4rem] w-[10.1rem] mx-auto md:mx-0"></div>
            <div class="mt-4.8 md:mt-5.6 lg:mt-[7.1rem] flex flex-col items-center md:items-start gap-4.8 md:gap-3.2 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
                <img class="w-[14.3rem]" src="@/assets/shared/desktop/logo.svg" alt="logo">
                <div class="flex flex-col items-center md:items-start md:flex-row gap-1.6 md:gap-3.4">
                    <router-link :to="{name: 'home'}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Home</router-link>
                    <router-link :to="{name: 'category', params: {category: 'headphones'}}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Headphones</router-link>
                    <router-link :to="{name: 'category', params: {category: 'speakers'}}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Speakers</router-link>
                    <router-link :to="{name: 'category', params: {category: 'earphones'}}" class="text-white hover:text-brown uppercase text-xs font-bold leading-sm tracking-px">Earphones</router-link>
                </div> 
            </div>
            <div class="mt-4.8 md:mt-3.2 lg:mt-3.6 flex justify-between text-center md:text-left">
                <p class="font-medium text-white/50 text-sm leading-sm lg:w-[54rem]">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <div class="hidden lg:flex items-center gap-1.6 self-end">

                    <a href="https://facebook.com" target="_blank">
                        <facebook-icon class="fill-white hover:fill-brown"></facebook-icon>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <twitter-icon class="fill-white hover:fill-brown"></twitter-icon>
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <instagram-icon class="fill-white hover:fill-brown"></instagram-icon>
                    </a>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-4.8 md:gap-0 items-center md:justify-between mt-4.8 md:mt-32 lg:mt-5.6">
                <h6 class="font-medium text-white/50 text-sm leading-sm">Copyright 2021. All Rights Reserved</h6>
                <div class="lg:hidden flex items-center gap-1.6 md:self-end">
                    <a href="https://facebook.com" target="_blank">
                        <facebook-icon class="fill-white hover:fill-brown"></facebook-icon>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <twitter-icon class="fill-white hover:fill-brown"></twitter-icon>
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <instagram-icon class="fill-white hover:fill-brown"></instagram-icon>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import FacebookIcon from '@/components/icons/IconFacebook.vue';
import InstagramIcon from '@/components/icons/IconInstagram.vue';
import TwitterIcon from '@/components/icons/IconTwitter.vue';

</script>
