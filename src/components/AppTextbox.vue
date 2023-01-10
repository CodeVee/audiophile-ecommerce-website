<template>
    <div class="flex flex-col gap-4">
        <div  v-if="labelText" class="flex justify-between">
            <label :for="id || labelText" :class="{'text-brown-deep': hasError}" class="font-bold text-black text-[1.2rem] leading-[1.6rem] -tracking-[.21px]">{{labelText}}</label>
            <span v-if="hasError" class="text-brown-deep text-[1.2rem] leading-[1.6rem] -tracking-[.21px] font-semibold">{{ errorMessage || `can't be empty`}}</span>
        </div>
        
        <input 
            :id="id || labelText"
            :class="{'border-2 border-brown-deep focus:border-brown-deep': hasError , 'border border-grey-deep focus:border-brown': !hasError}"
            class="bg-white caret-brown hover:border-brown hover:cursor-pointer focus:ring-0
            text-black text-xsm leading-xs -tracking-[.25px] font-bold
            rounded-0.8 px-2.4 h-5.6 focus-visible:outline-none placeholder:text-black/40 "
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target ? ($event.target as HTMLInputElement).value : '')" 
            type="text"
            :placeholder="placeholder"
        >
    </div>
</template>

<script setup lang="ts">
interface Props {
    modelValue?: string | number;
    labelText?: string;
    id?: string;
    placeholder?: string
    hasError?: boolean;
    errorMessage?: string; 
}
interface Emits {
    (e: 'update:modelValue', val: string | number): any
}
defineProps<Props>()
defineEmits<Emits>()
</script>

<style scoped>

</style>