import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import type { JSX } from 'react'


const Dashboard = (): JSX.Element => {

  const { getUser, isAuthenticated } = getKindeServerSession()


  if (!isAuthenticated())
    redirect('/auth-callback?origin=dashboard')


  const user = getUser()


  return (
    <pre>
      {JSON.stringify(user, null, 2)}
    </pre>
  )
}


export default Dashboard
