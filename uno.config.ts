import { defineConfig, presetIcons, presetUno } from 'unocss'
import type { Theme } from '@unocss/preset-uno'
import type { UserShortcuts, ConfigBase } from 'unocss'


const extendTheme: ConfigBase<Theme>['extendTheme'] = theme => ({
  ...theme,
  container: {
    center: true,
    padding: {
      DEFAULT: '0.625rem',
      sm: '0.625rem',
      md: '5rem',
      lg: '5rem',
      xl: '5rem',
      '2xl': '5rem'
    },
    maxWidth: {
      sm: '1280px'
    }
  },
  colors: {
    ...theme.colors,
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))'
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))'
    },
    destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))'
    },
    muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))'
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))'
    },
    popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))'
    },
    card: {
      DEFAULT: 'hsl(var(--card))',
      foreground: 'hsl(var(--card-foreground))'
    }
  },
  borderRadius: {
    ...theme.borderRadius,
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)'
  },
  animation: {
    ...theme.animation,
    keyframes: {
      ...theme.animation?.keyframes,
      'accordion-down': 'from{height:0}to{height:var(--radix-accordion-content-height);',
      'accordion-up': 'from{height:var(--radix-accordion-content-height)}to{height: 0}'
    },
    durations: {
      ...theme.animation?.durations,
      'accordion-down': '0.2s',
      'accordion-up': '0.2s'
    },
    timingFns: {
      ...theme.animation?.timingFns,
      'accordion-down': 'ease-out',
      'accordion-up': 'ease-out'
    }
  }
} satisfies Theme)


const shortcuts = [
  // UTILITIES
  ['absolute-center', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', { layer: 'utilities' }],
  ['flex-center', 'flex justify-center items-center', { layer: 'utilities' }],
  ['inline-flex-center', 'inline-flex justify-center items-center', { layer: 'utilities' }]
] satisfies UserShortcuts<Theme>


export default defineConfig<Theme>({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  shortcuts,
  extendTheme
})
