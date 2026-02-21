import { tv, type VariantProps } from 'tailwind-variants';

export const menuVariants = tv({
  slots: {
    content: [
      'z-50 min-w-32 overflow-hidden rounded-[12px] p-1 text-[var(--glass-text-primary)] transition-all duration-200 ease-out active:scale-[0.98]',
      'bg-[var(--glass-base-thick)] backdrop-blur-[40px] backdrop-saturate-[190%] backdrop-brightness-110',
      'shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-lg)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95'
    ],
    item: [
      'relative flex cursor-default select-none items-center rounded-[6px] px-2 py-1.5 text-sm outline-none transition-all duration-200 ease-out active:scale-[0.98]',
      'data-[highlighted]:bg-[#007AFF] data-[highlighted]:text-white data-[highlighted]:shadow-[0_2px_8px_rgba(0,122,255,0.3)]',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
    ],
    separator: '-mx-1 my-1 h-px bg-[var(--glass-border)]'
  }
});

export type MenuVariants = VariantProps<typeof menuVariants>;
