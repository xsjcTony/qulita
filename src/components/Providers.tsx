/* eslint-disable react/hook-use-state */

'use client'

// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { trpc } from '@app/_trpc/client'
import type { ReactNode } from 'react'


const Providers = ({ children }: { children: ReactNode }): ReactNode => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/trpc`
      })
    ]
  }))


  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}


export default Providers
