import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import type { AuthEndpoints } from '@kinde-oss/kinde-auth-nextjs/server'
import type { NextRequest } from 'next/server'


export const GET = async (
  request: NextRequest,
  { params }: { params: { kindeAuth: AuthEndpoints } }
): Promise<ReturnType<typeof handleAuth>> =>
  handleAuth(request, params.kindeAuth)
