<script setup lang="ts">
import { useToast } from '../../composables/useToast';
import ToastProvider from './ToastProvider.vue';
import Toast from './Toast.vue';

const { toasts, removeToast } = useToast();
</script>

<template>
  <ToastProvider>
    <Toast v-for="toast in toasts" :key="toast.id" :title="toast.title" :description="toast.description"
      :duration="toast.duration ?? 5000" @update:open="(val) => !val && removeToast(toast.id)" />
  </ToastProvider>
</template>
