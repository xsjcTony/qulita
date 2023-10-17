import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { TRPCError } from '@trpc/server'
import { publicProcedure, router } from '@/trpc/server/trpc'


export const appRouter = router({
  authCallback: publicProcedure.query(() => {
    const { getUser, isAuthenticated } = getKindeServerSession()

    if (!isAuthenticated())
      throw new TRPCError({ code: 'UNAUTHORIZED' })

    return { success: true }
  })
})


export type AppRouter = typeof appRouter
