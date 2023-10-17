import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '@/trpc/server/router'


const trpc = createTRPCReact<AppRouter>()


export default trpc
