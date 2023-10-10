import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetUno } from 'unocss'
import type { Theme } from '@unocss/preset-uno'
import type { UserShortcuts } from 'unocss'


type NFTheme = typeof theme


const theme = {
  container: {
    center: true,
    padding: {
      DEFAULT: '80px',
      sm: '10px'
    },
    maxWidth: {
      sm: '1280px'
    }
  }
} satisfies Theme


const shortcuts = [
  // UTILITIES
  ['absolute-center', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', { layer: 'utilities' }]
] satisfies UserShortcuts<NFTheme>


export default defineConfig({
  presets: [
    presetUno(),
    // this will convert rem to px, e.g. `p-1` now means `padding: 1px` instead of `0.25rem`(=4px)
    presetRemToPx({ baseFontSize: 4 })
  ],
  shortcuts,
  theme
})
