'use client'


import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import trpc from '@/trpc/client'
import type { Route } from 'next'
import type { JSX } from 'react'


const AuthCallback = (): JSX.Element => {

  const router = useRouter()

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')


  const { data } = trpc.authCallback.useQuery()


  useEffect(() => {
    data?.success && router.replace(`/${origin ?? 'dashboard'}` as Route)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])


  return JSON.stringify(data)
}


export default AuthCallback
