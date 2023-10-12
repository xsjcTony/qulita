import { useRouter, useSearchParams } from 'next/navigation'
import type { JSX } from 'react'


const AuthCallback = (): JSX.Element => {

  const router = useRouter()

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')


}


export default AuthCallback
