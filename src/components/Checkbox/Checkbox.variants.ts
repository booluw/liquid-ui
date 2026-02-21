import { tv, type VariantProps } from 'tailwind-variants';

export const checkboxVariants = tv({
 slots: {
 root: [
 'transition-all duration-200 ease-out active:scale-[0.98]',
 'transition-all duration-200 ease-out active:scale-[0.98] peer h-5 w-5 shrink-0 rounded-[4px] border border-black/20 bg-black/5 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200',
 'data-[state=checked]:bg-[#007AFF] data-[state=checked]:border-[#007AFF] data-[state=checked]:text-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]'
 ],
 indicator: 'flex items-center justify-center text-current'
 }
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
