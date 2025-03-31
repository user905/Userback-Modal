/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { UserbackProvider } from "@userback/react"

export function MyUserbackProvider({
  token,
  options,
  children,
}: {
  readonly token: string
  readonly options: Record<string, any>
  readonly children: React.ReactNode
}) {
  if (!token) {
    console.warn("Missing Userback token")
    return null
  }
  return (
    <div className="z-50">
      <UserbackProvider token={token} options={options}>
        {children}
      </UserbackProvider>
    </div>
  )
}
