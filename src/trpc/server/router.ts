import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { TRPCError } from '@trpc/server'
import db from '@/database'
import { publicProcedure, router } from '@/trpc/server/trpc'


export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser, isAuthenticated } = getKindeServerSession()
    const user = getUser()

    if (!isAuthenticated() || !user.id || !user.email)
      throw new TRPCError({ code: 'UNAUTHORIZED' })

    const dbUser = await db.user.findFirst({
      where: { id: user.id }
    })

    if (!dbUser) {
      await db.user.create({
        data: {
          id: user.id,
          email: user.email
        }
      })
    }


    return { success: true }
  })
})


export type AppRouter = typeof appRouter
