// noinspection ES6ConvertVarToLetConst

import { PrismaClient } from '@prisma/client'


declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}


let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient()
  }
  prisma = globalThis.prisma
}


const db = prisma

export default db
