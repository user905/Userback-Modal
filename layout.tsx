import { auth } from "@/auth"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { MyUserbackProvider } from "@/components/Userback"
import { tours } from "@/components/tours"
import { TourCard } from "@/components/ui/TourCard"
import { Contact } from "@prisma/client"
import GlassProvider from "glass-js"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { NextStep, NextStepProvider } from "nextstepjs"
import { PermitService } from "./_utils/permissions/actions/permit"
import { getContactByEmail } from "./_utils/prismaPayloads/contactPayloads"
import "./globals.css"

const figtree = Figtree({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "OPUS",
  description: "Built by the DOE PARS Team",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let canViewAdmin = false
  let currUser: Contact | null = null
  let session
  try {
    session = await auth()
    console.log(`Session user: ${session?.user?.email}`)

    currUser = session?.user
      ? await getContactByEmail(session.user.email!)
      : null

    if (!currUser) throw new Error("User not found")

    //Admins and Project/Group Owners can view the Admin page
    const permitService = new PermitService()
    await permitService.init()
    canViewAdmin = (await permitService.getUserRoles(currUser.email)).some(
      (role) => role.role === "Admin" || role.role === "Owner"
    )
  } catch (error) {
    console.log(error)
  }

  const ubOptions = {
    autohide: true,
    name: `${currUser?.firstName} ${currUser?.lastName}`,
    email: currUser?.email,
  }

  return (
    <html lang="en" className={figtree.className} suppressHydrationWarning>
      <body>
        {/* <GlassProvider> */}
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <NextStepProvider>
          <NextStep steps={tours} cardComponent={TourCard}>
            <MyUserbackProvider
              token={process.env.USERBACK_TOKEN ?? ""}
              options={ubOptions}
            >
              <Header
                isLoggedIn={!!session?.user}
                userName={
                  currUser
                    ? `${currUser?.firstName} ${currUser?.lastName}`
                    : null
                }
                canViewAdmin={canViewAdmin}
              />
              <main className="pb-20">{children}</main>
              <Footer />
            </MyUserbackProvider>
          </NextStep>
        </NextStepProvider>

        {/* </ThemeProvkider> */}
        {/* </GlassProvider> */}
      </body>
    </html>
  )
}
