import { tv, type VariantProps } from 'tailwind-variants';

export const tableVariants = tv({
  slots: {
    container: 'relative w-full overflow-hidden rounded-[24px] bg-[var(--glass-base-regular)] shadow-[inset_0_1px_0_0_var(--glass-highlight),inset_0_0_0_1px_var(--glass-border),var(--glass-shadow-md)] backdrop-blur-[20px] backdrop-saturate-[180%]',
    table: 'w-full caption-bottom text-sm',
    header: '[&_tr]:border-b [&_tr]:border-[var(--glass-border)]',
    body: '[&_tr:last-child]:border-0',
    footer: 'border-t border-[var(--glass-border)] bg-[var(--glass-base-ultra-thin)] font-medium [&>tr]:last:border-b-0',
    row: [
      'border-b border-white/10 transition-colors',
      'hover:bg-white/5',
      'data-[state=selected]:bg-white/10'
    ],
    head: 'h-12 px-4 text-left align-middle font-medium text-[var(--glass-text-secondary)] [&:has([role=checkbox])]:pr-0',
    cell: 'p-4 align-middle text-[var(--glass-text-primary)] [&:has([role=checkbox])]:pr-0',
    caption: 'mt-4 text-sm text-[var(--glass-text-secondary)]'
  }
});

export type TableVariants = VariantProps<typeof tableVariants>;
