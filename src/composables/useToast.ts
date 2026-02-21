import { ref } from 'vue';

type ToastDefinition = {
  id: string;
  title?: string;
  description?: string;
  duration?: number;
};

const toasts = ref<ToastDefinition[]>([]);

export function useToast() {
  const addToast = (toast: Omit<ToastDefinition, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    toasts.value.push({ ...toast, id });
    return id;
  };

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  };

  return {
    toasts,
    addToast,
    removeToast
  };
}
