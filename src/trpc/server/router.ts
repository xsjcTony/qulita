import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { TRPCError } from '@trpc/server'
import { publicProcedure, router } from '@/trpc/server/trpc'


export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser, isAuthenticated } = getKindeServerSession()

    if (!isAuthenticated())
      throw new TRPCError({ code: 'UNAUTHORIZED' })


    // const dbUser = await db


    return { success: true }
  })
})


export type AppRouter = typeof appRouter
