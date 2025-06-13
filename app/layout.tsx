import "./globals.css"
import Providers from "@/components/providers"

export const metadata = {
  title: "Realtime Chat Demo",
  description: "OpenAI Realtime API voice & text demo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground flex items-center justify-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
