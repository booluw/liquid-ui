import { tv, type VariantProps } from 'tailwind-variants';

export const badgeVariants = tv({
  base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2',
  variants: {
    variant: {
      default: 'border-transparent bg-black/10 text-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-[10px]',
      primary: 'border-transparent bg-[#007AFF]/15 text-[#007AFF] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-[10px]',
      destructive: 'border-transparent bg-[#FF3B30] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_8px_rgba(255,59,48,0.3)]',
      outline: 'text-black border-black/20'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export type BadgeVariants = Required<VariantProps<typeof badgeVariants>>;
