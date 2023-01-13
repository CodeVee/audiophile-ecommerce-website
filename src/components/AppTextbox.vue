<template>
    <Field :name="id" v-slot="{ field, meta, errorMessage }">
        <div class="flex flex-col gap-4">
            <div class="flex justify-between">
                <label :for="id" :class="{'text-brown-deep': meta.validated && !meta.valid}" class="font-bold text-black text-[1.2rem] leading-[1.6rem] -tracking-[.21px]">{{labelText}}</label>
                <span v-show="meta.validated && !meta.valid" class="text-brown-deep text-[1.2rem] leading-[1.6rem] -tracking-[.21px] font-semibold">{{ errorMessage }}</span>
            </div>
            <input
                v-bind="field"
                :id="id"
                :class="{'border-2 border-brown-deep focus:border-brown-deep': meta.validated && !meta.valid , 'border border-grey-deep focus:border-brown': !(meta.dirty && !meta.valid)}"
                class="bg-white caret-brown hover:border-brown hover:cursor-pointer focus:ring-0
                text-black text-xsm leading-xs -tracking-[.25px] font-bold
                rounded-0.8 px-2.4 h-5.6 focus-visible:outline-none placeholder:text-black/40 " 
                :type="type || 'text'"
                :placeholder="placeholder"
            />
        </div>
    </Field>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';
defineProps<{
    labelText: string;
    id: string;
    type?: 'text' | 'email';
    placeholder?: string
}>()

</script>

<style scoped>

</style>