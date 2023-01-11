<template>
    <div :class="styles" class="h-[calc(100vh_-_9rem)] lg:h-[calc(100vh_-_9.7rem)] w-full bg-black/40 fixed top-36 lg:top-9.7">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{ styles: string[]}>()
</script>
