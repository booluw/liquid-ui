import { tv, type VariantProps } from'tailwind-variants';

export const accordionVariants = tv({
 slots: {
 root:'w-full divide-y divide-white/10 overflow-hidden rounded-[24px] border border-white/20 bg-white/50 backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_30px_rgba(0,0,0,0.1)]',
 item:'overflow-hidden',
 header:'flex',
 trigger: [
'flex flex-1 items-center justify-between px-6 py-4 font-medium transition-all duration-300',
'hover:bg-white/10',
'text-black',
'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:bg-white/10',
'[&[data-state=open]>svg]:rotate-180'
 ],
 icon:'h-4 w-4 shrink-0 transition-transform duration-300 text-[#8E8E93]',
 content: [
'overflow-hidden text-sm text-[#8E8E93] transition-all',
'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
 ],
 contentInner:'px-6 pb-4 pt-0'
 }
});

export type AccordionVariants = VariantProps<typeof accordionVariants>;
