'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { TranslationsProvider } from '@/components/translations-context'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TranslationsProvider>{children}</TranslationsProvider>
    </ThemeProvider>
  )
} 