---
name: Tailwind v4 @theme spacing scale corruption
description: Defining --spacing-{name} or --radius-{name} in @theme corrupts ALL Tailwind sizing utilities that share that suffix, causing max-w-2xl=64px instead of 42rem.
---

# Tailwind v4 @theme: --spacing-* and --radius-* corrupt the sizing scale

## The rule

Never put `--spacing-{name}` or `--radius-{name}` inside the Tailwind `@theme` block if those names collide with Tailwind's built-in utility suffixes (`sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `base`, `micro`, `xs`, etc.).

## Why

In Tailwind v4, every `--spacing-{suffix}` defined in `@theme` overrides the sizing scale for ALL utilities that use that suffix:

- `@theme { --spacing-sm: 12px }` → `max-w-sm`, `w-sm`, `gap-sm`, `p-sm`, `m-sm`, `min-h-sm` all become **12px**
- `@theme { --spacing-2xl: 64px }` → `max-w-2xl`, `w-2xl`, `gap-2xl` … all become **64px** instead of the default **42rem**

Similarly, `--radius-{suffix}` in `@theme` overrides the `rounded-{suffix}` utilities.

This causes text to wrap one word per line (max-w-2xl = 64px), cards to collapse into extremely narrow columns, and all grid/flex spacing to be wrong. The nav bar (which uses `flex gap-*` with numeric tokens like `gap-4`) still works, masking the root cause.

## How to apply

When migrating a Next.js app that used custom `--spacing-*` design tokens in `@theme`:

1. Remove `--spacing-*` and `--radius-*` from `@theme` entirely.
2. Redeclare them as plain CSS custom properties in a `:root` block (NOT inside `@theme`).
3. Components that reference them via `var(--spacing-xl)` or `rounded-[var(--radius-md)]` still work — only the Tailwind utility generation is affected.

```css
/* ✅ Correct */
:root {
  --spacing-xl: 48px;  /* available as var(--spacing-xl) */
  --radius-md: 12px;   /* available as var(--radius-md) */
}

/* ❌ Wrong — corrupts max-w-xl, gap-xl, etc. */
@theme {
  --spacing-xl: 48px;
  --radius-md: 12px;
}
```

Keep in `@theme` only: color tokens (`--color-*`), font stacks (`--font-*`), and shadow references (`--shadow-*`).
