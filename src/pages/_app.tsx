import { type Session } from "next-auth"
import { type AppType } from "next/app"
import { SessionProvider } from "next-auth/react"
import { api } from "@/lib/api"
import Head from "next/head"

// components
import NavbarMain from "@/components/navbar/navbar-main"
import ThemeProvider from "@/components/theme/theme-provider"

// tailwindcss
import "@/styles/globals.css"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <Head>
        <title>Pendataan Sensus Online</title>
      </Head>
      <SessionProvider session={session}>
        <div className="flex flex-col">
          <NavbarMain />
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default api.withTRPC(MyApp)
