import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/trpc/server/router'
import type { NextRequest } from 'next/server'


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const handler = async (req: NextRequest) => fetchRequestHandler({
  endpoint: '/api/trpc',
  req,
  router: appRouter,
  createContext: () => ({})
})


export {
  handler as GET,
  handler as POST
}
