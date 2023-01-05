<template>
    <div class="grid md:grid-cols-3 gap-y-[6.8rem] gap-x-4 lg:gap-x-12">
        <div class="bg-grey group hover:cursor-pointer h-[16.5rem] lg:h-[20.4rem] flex flex-col gap-6 pb-12 justify-end rounded-0.8 items-center relative">
            <div class="h-[10.4rem] lg:h-64 absolute -top-[5.2rem] lg:-top-32">
                <img class="h-full" src="@/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="headphones">
            </div>
            <h3 class="text-black font-bold text-sm lg:text-md leading-xs lg:leading-sm tracking-xp lg:tracking-sp uppercase">headphones</h3>
            <router-link to="/" class="flex">
                <span class="uppercase text-black/50 group-hover:text-brown font-bold text-xs leading-xs tracking-xp mr-5">shop</span>
                <img class="self-center" src="@/assets/shared/desktop/icon-arrow-right.svg" alt="right arrow">
            </router-link>
        </div>
        <div class="bg-grey group hover:cursor-pointer h-[16.5rem] lg:h-[20.4rem] flex flex-col gap-6 pb-12 justify-end rounded-0.8 items-center relative">
            <div class="h-[10.1rem] lg:h-[14.6rem] absolute -top-[5.2rem] lg:-top-[7.25rem]">
                <img class="h-full" src="@/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="speakers">
            </div>
            <h3 class="text-black font-bold text-sm lg:text-md leading-xs lg:leading-sm tracking-xp lg:tracking-sp uppercase">speakers</h3>
            <router-link to="/" class="flex">
                <span class="uppercase text-black/50 group-hover:text-brown font-bold text-xs leading-xs tracking-xp mr-5">shop</span>
                <img class="self-center" src="@/assets/shared/desktop/icon-arrow-right.svg" alt="right arrow">
            </router-link>
        </div>
        <div class="bg-grey group hover:cursor-pointer h-[16.5rem] lg:h-[20.4rem] flex flex-col gap-6 pb-12 justify-end rounded-0.8 items-center relative">
            <div class="h-[10.4rem] lg:h-[12.6rem] absolute -top-[5.2rem] lg:-top-24">
                <img class="h-full" src="@/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="earphones">
            </div>
            <h3 class="text-black font-bold text-sm lg:text-md leading-xs lg:leading-sm tracking-xp lg:tracking-sp uppercase">earphones</h3>
            <router-link to="/" class="flex">
                <span class="uppercase text-black/50 group-hover:text-brown font-bold text-xs leading-xs tracking-xp mr-5">shop</span>
                <img class="self-center" src="@/assets/shared/desktop/icon-arrow-right.svg" alt="right arrow">
            </router-link>
        </div>
    </div>
</template>
