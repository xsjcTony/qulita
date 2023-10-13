import { useRouter, useSearchParams } from 'next/navigation'
import type { ReactNode } from 'react'


const AuthCallback = (): ReactNode => {

  const router = useRouter()

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')

  return null
}


export default AuthCallback
