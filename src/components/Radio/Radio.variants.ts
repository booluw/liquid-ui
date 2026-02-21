import { tv, type VariantProps } from 'tailwind-variants';

export const radioVariants = tv({
 slots: {
 item: [
 'transition-all duration-200 ease-out active:scale-[0.98]',
 'transition-all duration-200 ease-out active:scale-[0.98] peer aspect-square h-5 w-5 rounded-full border border-black/20 bg-black/5 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200',
 'data-[state=checked]:border-[#007AFF] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]'
 ],
 indicator: 'flex items-center justify-center after:block after:h-2.5 after:w-2.5 after:rounded-full after:bg-[#007AFF] after:transition-transform after:animate-in after:zoom-in-50'
 }
});

export type RadioVariants = VariantProps<typeof radioVariants>;
