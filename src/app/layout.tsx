import '@app/global.scss'
import '@/env'
import { Inter } from 'next/font/google'
import NavBar from '@components/NavBar'
import Providers from '@components/Providers'
import cn from '@utils/cn'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qulita',
  description: 'Chat with your documents in seconds'
}


const RootLayout = ({ children }: { children: ReactNode }): ReactNode => (
  <html lang="en">
    <body className={cn('min-h-screen antialiased bg-grainy', inter.className)}>
      <NavBar />
      <Providers>{children}</Providers>
    </body>
  </html>
)


export default RootLayout
