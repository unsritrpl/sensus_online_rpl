import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { type GetServerSidePropsContext } from "next"
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth"
import CredentialProviders from "next-auth/providers/credentials"
import { env } from "@/env.mjs"
import { db } from "@/server/db"

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string
      role: string
    }
  }

  interface User {
    role: string
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt"
  },
  callbacks: {
    session: async ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        role: user.role
      },
    }),
    jwt: async ({ token, user }) => ({
      ...token,
      id: user.id,
      role: user.role
    })
  },
  providers: [
    CredentialProviders({
      id: "login_sensus_online",
      credentials: {
        username: { type: "text" },
        password: { type: "password" }
      },
      async authorize() {
        return null
      },
    }),
  ],
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"]
  res: GetServerSidePropsContext["res"]
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}
