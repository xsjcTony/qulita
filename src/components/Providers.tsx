/* eslint-disable react/hook-use-state */

'use client'


// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import trpc from '@/trpc/client'
import { default as _trpcClient } from '@/trpc/client/client'
import type { ReactNode } from 'react'


const Providers = ({ children }: { children: ReactNode }): ReactNode => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => _trpcClient)


  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}


export default Providers
