<script setup lang="ts">
import AppBanner from '@/components/AppBanner.vue';
import CategoryNav from '@/components/CategoryNav.vue';
</script>

<template>
  <main>
    <header class="bg-black-ligh mb-[9.2rem] md:mb-[14.8rem] lg:mb-80 bg-[url('@/assets/home/mobile/image-header.jpg')] md:bg-[url('@/assets/home/tablet/image-header.jpg')] lg:bg-[url('@/assets/home/desktop/image-hero.jpg')] bg-cover lg:bg-auto bg-bottom">
      <div class="lg:w-ct mx-auto h-[51rem] md:h-[63.9rem] lg:h-[63.3rem]">
        <div class="bg-white/20 h-[1px]"></div>
        <div class="flex flex-col gap-2.4 mb-11 md:mb-16 mx-auto lg:mx-0 w-[32.8rem] md:w-[39.8rem] pt-[10.8rem] md:pt-[12.8rem] text-center lg:text-left">
          <span class="font-normal text-xsm leading-xs tracking-pp uppercase text-white opacity-50">new product</span>
          <h1 class="font-bold uppercase text-[3.6rem] md:text-3xl leading-[4rem] md:leading-3xl tracking-sp md:tracking-px text-white">XX99 Mark II Headphones</h1>
          <h2 class="text-white font-medium text-sm leading-sm opacity-75 md:pr-[4.9rem]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</h2>
        </div>
        <router-link :to="{name: 'product', params: { slug: 'xx99-mark-two-headphones'}}" class="btn btn-default btn-primary mx-auto lg:mx-0">see product</router-link>
      </div>
    </header>
    <div class="px-2.4 md:px-0 md:w-cm lg:w-ct mx-auto">
      <CategoryNav class="mb-48 md:mb-[9.6rem] lg:mb-[16.8rem]"/>
      <div class="grid gap-y-4.8">
        <div class="bg-brown h-[60rem] md:h-[72rem] lg:h-[56rem] rounded-0.8 lg:pr-9.5 pb-[5.5rem] md:pb-6.4 lg:pb-0 flex flex-col lg:flex-row justify-end relative overflow-clip">
          <div class="w-[55.8rem] md:w-[94.4rem] h-full top-0 left-0 absolute">
            <img class="absolute -left-[11.6rem] md:-left-[12.7rem] lg:-left-[14.9rem] bottom-[16.3rem] md:bottom-6.4 lg:bottom-0 lg:-top-3.6" src="@/assets/home/desktop/pattern-circles.svg" alt="circles">
          </div>
          <img src="@/assets/home/mobile/image-speaker-zx9.png" alt="zx9" class="md:hidden w-[17.2rem] absolute left-[7.75rem] top-[5.5rem]">
          <img src="@/assets/home/tablet/image-speaker-zx9.png" alt="zx9" class="hidden md:inline-block lg:hidden w-[19.7rem] absolute left-[24.7rem] top-[5.2rem]">
          <img src="@/assets/home/desktop/image-speaker-zx9.png" alt="zx9" class="hidden lg:inline-block absolute w-[38rem] -bottom-6 left-[13.7rem]">
          <div class="w-[28rem] md:w-[34.9rem] lg:pt-[13.3rem] relative self-center lg:self-start text-center lg:text-left">
            <h4 class="px-6 md:px-0 uppercase text-white tracking-sp md:tracking-px leading-[4rem] md:leading-3xl text-[3.6rem] md:text-3xl font-bold mb-2.4">zx9 speaker</h4>
            <p class="text-white opacity-75 font-medium text-sm leading-sm mb-2.4 md:mb-16">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <router-link :to="{name: 'product', params: { slug: 'zx9-speaker'}}"  class="btn btn-default btn-tetiary mx-auto lg:mx-0">see product</router-link>
          </div>
        </div>
        <div class="h-[32rem] rounded-0.8 bg-cover bg-[url('@/assets/home/mobile/image-speaker-zx7.jpg')] md:bg-[url('@/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('@/assets/home/desktop/image-speaker-zx7.jpg')] flex flex-col gap-3.2 justify-center pl-2.4 md:pl-[6.2rem] lg:pl-9.5">
          <h4 class="font-bold text-black text-lgm leading-xl tracking-px uppercase">zx7 speaker</h4>
          <router-link :to="{name: 'product', params: { slug: 'zx7-speaker'}}"  class="btn btn-default btn-secondary">see product</router-link>
        </div>
        <div class="h-[42.4rem] md:h-[32rem] grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-y-2.4 md:gap-y-0 md:gap-x-[1.1rem] lg:gap-x-12">
          <div class="bg-[url('@/assets/home/mobile/image-earphones-yx1.jpg')] md:bg-[url('@/assets/home/tablet/image-earphones-yx1.jpg')] bg-cover lg:bg-auto lg:bg-[url('@/assets/home/desktop/image-earphones-yx1.jpg')] rounded-0.8"></div>
          <div class="bg-grey rounded-0.8 flex flex-col gap-3.2 justify-center pl-2.4 md:pl-[4.1rem] lg:pl-9.5">
            <h4 class="font-bold text-black text-lgm leading-xl tracking-px uppercase">yx1 earphones</h4>
            <router-link :to="{name: 'product', params: { slug: 'yx1-earphones'}}" class="btn btn-default btn-secondary">see product</router-link>
          </div>
        </div>
      </div>
      <AppBanner class="my-48 md:my-[9.6rem] lg:my-80" />
    </div>
  </main>
</template>
