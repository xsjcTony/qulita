import clsx from 'clsx'
import { extendTailwindMerge, validators } from 'tailwind-merge'
import type { ClassValue } from 'clsx'
import type { ClassValidator } from 'tailwind-merge/dist/lib/types'


const isUnoFontSize: ClassValidator = (className: string) => /^[0-9]+$/.test(className)


const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{
      text: [
        'base',
        validators.isTshirtSize,
        validators.isArbitraryLength,
        isUnoFontSize
      ]
    }]
  }
})


const cn = (...inputs: ClassValue[]): string => twMerge(clsx(...inputs))


export default cn
