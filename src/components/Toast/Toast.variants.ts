import { tv, type VariantProps } from 'tailwind-variants';

export const toastVariants = tv({
  slots: {
    viewport: 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]',
    root: [
      'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-[16px] p-4 pr-8 transition-all',
      'bg-[var(--glass-base-thick)] backdrop-blur-[40px] backdrop-saturate-[180%] backdrop-brightness-110',
      'shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-lg)]',
      'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full'
    ],
    title: 'text-sm font-semibold text-[var(--glass-text-primary)]',
    description: 'text-sm text-[var(--glass-text-secondary)]',
    close: 'absolute right-2 top-2 rounded-md p-1 text-[var(--glass-text-secondary)] opacity-0 transition-opacity hover:text-[var(--glass-text-primary)] focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100'
  }
});

export type ToastVariants = VariantProps<typeof toastVariants>;
