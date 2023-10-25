import { h } from '@unocss/preset-mini/utils'
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
      'accordion-up': 'from{height:var(--radix-accordion-content-height)}to{height: 0}',

      'una-in': '{from{opacity:var(--una-enter-opacity,1);transform:translate3d(var(--una-enter-translate-x,0),var(--una-enter-translate-y,0),0) scale3d(var(--una-enter-scale,1),var(--una-enter-scale,1),var(--una-enter-scale,1)) rotate(var(--una-enter-rotate,0))}}',
      'una-out': '{to{opacity:var(--una-exit-opacity,1);transform:translate3d(var(--una-exit-translate-x,0),var(--una-exit-translate-y,0),0) scale3d(var(--una-exit-scale,1),var(--una-exit-scale,1),var(--una-exit-scale,1)) rotate(var(--una-exit-rotate,0))}}'
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
  ['absolute-center', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'],
  ['flex-center', 'flex justify-center items-center'],
  ['inline-flex-center', 'inline-flex justify-center items-center'],
  [
    'bg-grainy',
    'bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09vT8+vzs7uxH16TeAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuFJREFUOI0Vk+3NLiEIRG1B8ClAYAsQ2AIEt4D9ePtv5Xp/mZgYJ2fOFJKEfInkVWY2aglmQFkimRTV7MblYyVqD7HXyhKsSuPX12MeDhRHLtGvRG+P+B/S0Vu4OswR9tmvwNPyhdCDbVayJGads/WiUWcjCvCnruTBNHS9gmX2VzVbk7ZvB1gb1hkWFGl+A/n+/FowcO34U/XvKqZ/fHY+6vgRfU92XrOBUbGeeDfQmjWjdrK+frc6FdGReQhfSF5JvR29O2QrfNw1huTwlgsyXLo0u+5So82sgv7tsFZR2nxB6lXiquHrfD8nfYZ9SeT0LiuvSoVrxGY16pCNRZKqvwWsn5OHypPBELzohMCaRaa0ceTHYqe7X/gfJEEtKFbJpWoNqO+aS1cuTykGPpK5Ga48m6L3NefTr013KqYBQu929iP1oQ/7UwSR+i3zqruUmT84qmhzLpxyj7pr9kg7LKvqaXxZmdpn+6o8sHqSqojy02gU3U8q9PnpidiaLks0mbMYz+q2uVXsoBQ8bfURULYxRgZVYCHMv9F4OA7qxT2NPPpvGQ/sTDH2yznKh7E2AcErfcNsaIoN1izzbJiaY63x4QjUFdBSvDCvugPpu5xDny0jzEeuUQbcP1aGT9V90uixngTRLYNEIIZ6yOF1H8tm7rj2JxiefsVy53zGVy3ag5uuPsdufYOzYxLRxngKe7nhx3VAq54pmz/DK9/Q3aDam2Yt3hNXB4HuU87jKNd/CKZn77Qdn5QkXPfqSkhk7hGOXXB+7v09KbBbqdvxGqa0AqfK/atIrL2WXdAgXAJ43Wtwe/aIoacXezeGPMlhDOHDbSfHnaXsL2QzbT82GRwZuezdwcoWzx5pnOnGMUdHuiY7lhdyWzWiHnucLZQxYStMJbtcydHaQ6vtMbe0AcDbxG+QG14AL94xry4297xpy9Cpf1OoxZ740gHDfrK+gtsy0xabwJmfgtCeii79B6aj0SJeLbd7AAAAAElFTkSuQmCC)]'
  ],

  [
    /^animate-in$/,
    (_, { theme }) => [
      'keyframes-una-in',
      {
        'animation-name': 'una-in',
        'animation-duration': theme.duration?.DEFAULT,
        '--una-enter-opacity': 'initial',
        '--una-enter-scale': 'initial',
        '--una-enter-rotate': 'initial',
        '--una-enter-translate-x': 'initial',
        '--una-enter-translate-y': 'initial'
      }
    ]
  ],
  [
    /^animate-out$/,
    (_, { theme }) => [
      'keyframes-una-out',
      {
        'animation-name': 'una-out',
        'animation-duration': theme.duration?.DEFAULT,
        '--una-exit-opacity': 'initial',
        '--una-exit-scale': 'initial',
        '--una-exit-rotate': 'initial',
        '--una-exit-translate-x': 'initial',
        '--una-exit-translate-y': 'initial'
      }
    ]
  ]
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
  extendTheme,
  layers: {
    components: -1,
    utilities: 2
  },
  rules: [
    [/^fade-in(?:-(.+))?$/, ([, op]) => ({ '--una-enter-opacity': h.bracket.cssvar.percent(op || '0') })],
    [/^fade-out(?:-(.+))?$/, ([, op]) => ({ '--una-exit-opacity': h.bracket.cssvar.percent(op || '0') })],

    [/^zoom-in(?:-(.+))?$/, ([, scale]) => ({ '--una-enter-scale': h.bracket.cssvar.fraction.percent(scale || '0') })],
    [/^zoom-out(?:-(.+))?$/, ([, scale]) => ({ '--una-exit-scale': h.bracket.cssvar.fraction.percent(scale || '0') })],

    [/^spin-in(?:-(.+))?$/, ([, deg]) => ({ '--una-enter-rotate': h.bracket.cssvar.degree(deg || '30') })],
    [/^spin-out(?:-(.+))?$/, ([, deg]) => ({ '--una-exit-rotate': h.bracket.cssvar.degree(deg || '30') })],

    [/^slide-in-from-(top|bottom|left|right)(?:-(.+))?$/, ([, dir, val]) => {
      const value = h.bracket.cssvar.fraction.rem(val || '100%')

      if (!value) return

      switch (dir) {
        case 'top':
          return { '--una-enter-translate-y': `-${value}` }
        case 'bottom':
          return { '--una-enter-translate-y': value }
        case 'left':
          return { '--una-enter-translate-x': `-${value}` }
        case 'right':
          return { '--una-enter-translate-x': value }
        default:
          return
      }
    }],

    [/^slide-out-to-(top|bottom|left|right)(?:-(.+))?$/, ([, dir, val]) => {
      const value = h.bracket.cssvar.fraction.rem(val || '100%')

      if (!value) return

      switch (dir) {
        case 'top':
          return { '--una-exit-translate-y': `-${value}` }
        case 'bottom':
          return { '--una-exit-translate-y': value }
        case 'left':
          return { '--una-exit-translate-x': `-${value}` }
        case 'right':
          return { '--una-exit-translate-x': value }
        default:
          return
      }
    }]
  ]
})
