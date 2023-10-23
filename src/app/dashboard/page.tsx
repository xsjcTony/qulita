import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import db from '@/database'
import Dashboard from '@app/dashboard/views/Dashboard'
import type { JSX } from 'react'


const DashboardPage = async (): Promise<JSX.Element> => {

  const { getUser, isAuthenticated } = getKindeServerSession()
  const user = getUser()

  if (!isAuthenticated() || !user.id)
    redirect('/')


  const dbUser = await db.user.findFirst({
    where: { id: user.id }
  })

  if (!dbUser)
    redirect('/auth-callback?origin=dashboard')


  return <Dashboard />
}


export default DashboardPage
