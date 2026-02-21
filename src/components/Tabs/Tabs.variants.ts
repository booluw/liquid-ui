import { tv, type VariantProps } from'tailwind-variants';

export const tabsVariants = tv({
 slots: {
 list: [
'inline-flex h-11 items-center justify-center rounded-[12px] p-1 text-[#8E8E93]',
'bg-white/40 backdrop-blur-[50px] backdrop-saturate-[190%] backdrop-brightness-125',
'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_2px_10px_rgba(0,0,0,0.05)] border border-white/20'
 ],
 trigger: [
'inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-1.5 text-sm font-medium transition-all duration-300',
'disabled:pointer-events-none disabled:opacity-50 hover:bg-white/20',
'data-[state=active]:bg-white/70 :bg-black/70 data-[state=active]:text-black :text-white',
'data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-white/40 :border-white/20'
 ],
 content: [
'mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2'
 ]
 }
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
