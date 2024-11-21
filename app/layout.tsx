import type { Metadata } from "next"
import { NavBar } from "./ui/nav-bar"
import "./globals.css"

export const metadata: Metadata = {
  title: "認証アプリ",
  description: "Next.js 15 と Auth.js v5 を使用した認証アプリ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
