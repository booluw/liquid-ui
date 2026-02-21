# Tabs (Segmented Control)

A beautifully frosted Segmented Control relying on `radix-vue` for robust accessibility. Designed according to Apple HIG material thickness and drop shadows.

## Live Demo

<script setup>
import { LTabs } from 'liquid-glass-ui';

const items = [
  { value: 'tab1', title: 'Account', content: 'Manage your account settings here.' },
  { value: 'tab2', title: 'Password', content: 'Update your password and security settings.' },
  { value: 'tab3', title: 'Notifications', content: 'Configure your notification preferences.' }
];
</script>

<ClientOnly>
<div class="max-w-md mx-auto p-8 mb-8">
  <LTabs :items="items" default-value="tab1" />
</div>
</ClientOnly>

## Custom Content Usage

Using named slots allows you to render custom interactive elements for each tab content.

```vue
<script setup>
import { LTabs, LCard, LButton } from 'liquid-glass-ui';

const tabs = [
  { value: 'profile', title: 'Profile' },
  { value: 'billing', title: 'Billing' }
];
</script>

<template>
  <LTabs :items="tabs" default-value="profile">
    <template #profile>
      <LCard title="Profile">
        Provide profile details here.
      </LCard>
    </template>
    
    <template #billing>
      <LCard title="Billing">
        Provide billing details here.
        <template #footer>
          <LButton variant="primary">Pay Now</LButton>
        </template>
      </LCard>
    </template>
  </LTabs>
</template>
```

## Props

- `items`: An array of objects defining the segments. `[{ value: string, title: string, content?: string }]`
- `default-value`: The `value` of the tab that should be active by default.
- `class`: Optional utility classes applied to the root element.
