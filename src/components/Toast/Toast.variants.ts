import { tv, type VariantProps } from 'tailwind-variants';

export const toastVariants = tv({
  slots: {
    viewport: 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]',
    root: [
      'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-[16px] border border-black/5 p-4 pr-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all',
      'bg-white/70 backdrop-blur-[50px] backdrop-saturate-[180%]', /* Apple 'Thick' Material */
      'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full'
    ],
    title: 'text-sm font-semibold text-black',
    description: 'text-sm opacity-90 text-[#8E8E93]',
    close: 'absolute right-2 top-2 rounded-md p-1 text-black/50 opacity-0 transition-opacity hover:text-black focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100'
  }
});

export type ToastVariants = VariantProps<typeof toastVariants>;
