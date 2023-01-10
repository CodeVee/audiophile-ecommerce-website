<template>
    <label :for="labelText" class="border border-grey-deep bg-white
     hover:border-brown hover:cursor-pointer rounded-0.8 px-1.6 h-5.6
     text-black text-xsm leading-xs -tracking-[.25px] font-bold
     flex gap-1.6 items-center">
        <div class=" w-8 h-8 border border-grey-deep rounded-full flex justify-center items-center">
            <span v-show="inputRef?.checked" class="bg-brown w-4 h-4 rounded-full"></span>
        </div>
        <input ref="inputRef" type="radio" 
        :checked="modelValue === labelText"
        :value="labelText"
        @change="$emit('update:modelValue', labelText)"  :name="name" :id="labelText"
        class="hidden">
        <span>{{ labelText }}</span>
    </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    modelValue?: string | number;
    labelText: string;
    name: string;
}>()
defineEmits<{
    (e: 'update:modelValue', val: string | number): void
}>()


const inputRef = ref<HTMLInputElement | null>(null)
</script>
