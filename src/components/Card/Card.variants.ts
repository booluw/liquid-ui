import { tv, type VariantProps } from'tailwind-variants';

export const cardVariants = tv({
 slots: {
 root: [
'rounded-[24px] border border-white/20 bg-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-[20px] backdrop-saturate-[180%]',
'overflow-hidden'
 ],
 header:'flex flex-col space-y-1.5 p-6',
 title:'font-semibold tracking-tight text-xl text-black',
 description:'text-sm text-[#8E8E93]',
 content:'p-6 pt-0 text-black',
 footer:'flex items-center p-6 pt-0'
 }
});

export type CardVariants = VariantProps<typeof cardVariants>;
