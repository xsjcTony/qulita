'use client'


import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import trpc from '@/trpc/client'
import type { Route } from 'next'
import type { JSX } from 'react'


const AuthCallbackPage = (): JSX.Element => {

  const router = useRouter()

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')


  const { data, error } = trpc.authCallback.useQuery(void 0, {
    retry: (_, error) => error.data?.code !== 'UNAUTHORIZED',
    retryDelay: 500
  })


  useEffect(() => {
    data?.success && router.replace(`/${origin ?? 'dashboard'}` as Route)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    error?.data?.code === 'UNAUTHORIZED' && router.replace('/api/auth/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])


  return (
    <div className="mt-24 w-full flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <i className="i-lucide-loader2 animate-spin text-8 text-zinc-800" />
        <h3 className="text-xl font-semibold">Setting up your account...</h3>
        <p>You will be redirected automatically</p>
      </div>
    </div>
  )
}


export default AuthCallbackPage
