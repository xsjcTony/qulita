/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars */

import { z } from 'zod'


declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}


const envSchema = z.object({
  KINDE_CLIENT_ID: z.string(),
  KINDE_CLIENT_SECRET: z.string(),
  KINDE_ISSUER_URL: z.string().url(),
  KINDE_SITE_URL: z.string().url(),
  KINDE_POST_LOGOUT_REDIRECT_URL: z.string().url(),
  KINDE_POST_LOGIN_REDIRECT_URL: z.string().url(),
  NEXT_PUBLIC_DOMAIN: z.string().url()
})


envSchema.parse(process.env)
