import { buttonVariants } from '@components/shadcn-ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'
import type { ReactNode } from 'react'


const NavBar = (): ReactNode => (
  <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
    <div className="h-full flex items-center justify-between container">
      <Link className="z-40 flex font-semibold" href="/">Qulita</Link>

      {/* TODO: mobile navbar */}

      <div className="hidden items-center gap-x-4 sm:flex">
        <Link className={buttonVariants({ variant: 'ghost', size: 'sm' })} href="/pricing">
          Pricing
        </Link>
        <LoginLink className={buttonVariants({ variant: 'ghost', size: 'sm' })}>Sign in</LoginLink>
        <RegisterLink className={buttonVariants({ size: 'sm' })}>
          Get started <i className="i-lucide-arrow-right ml-1.5 text-5" />
        </RegisterLink>
      </div>
    </div>
  </nav>
)


export default NavBar
