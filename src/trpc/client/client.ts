import { httpBatchLink } from '@trpc/client'
import trpc from '@/trpc/client'


const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/api/trpc`
    })
  ]
})


export default trpcClient
