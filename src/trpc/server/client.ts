import { httpBatchLink } from '@trpc/client'
import { appRouter } from '@/trpc/server/router'


const trpcServerClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/trpc`
    })
  ]
})


export default trpcServerClient
