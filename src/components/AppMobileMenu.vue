<template>
    <modal-mask v-show="show" @click="closeModal" :styles="['lg:hidden']">
        <Transition name="fall">
            <div v-show="show" class="bg-white md:h-[34rem] pt-28 pb-3.6 md:pt-44 px-2.4 md:px-16">
                <CategoryNav />
            </div>        
        </Transition>
    </modal-mask>
</template>

<script setup lang="ts">
import CategoryNav from './CategoryNav.vue';
import ModalMask from './AppModalMask.vue';

defineProps<{show: boolean}>()
const emits = defineEmits<{(e: 'close'): void }>()

const closeModal = () => emits('close')
</script>

<style scoped>
.fall-enter-active,
.fall-leave-active {
  transition: .8s ease all;
}

.fall-enter-from,
.fall-leave-to {
  transform: translateY(-20rem);
}
</style>
