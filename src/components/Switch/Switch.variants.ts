import { tv, type VariantProps } from'tailwind-variants';

export const switchVariants = tv({
 slots: {
 root: [
'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200',
'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-background',
'disabled:cursor-not-allowed disabled:opacity-50',
'bg-white/30 backdrop-blur-[30px] backdrop-saturate-[180%] shadow-[inset_0_1px_3px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]',
'data-[state=checked]:bg-[#34C759]/80 :bg-[#34C759]/70 data-[state=checked]:shadow-[inset_0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]'
 ],
 thumb: [
'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.2),0_0_1px_rgba(0,0,0,0.2)] ring-0 transition-transform duration-200',
'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
 ]
 }
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
