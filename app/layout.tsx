import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@/styles/globals.css"

import { RootProvider } from "fumadocs-ui/provider"

import { siteConfig } from "@/lib/config"
import { LayoutProvider } from "@/hooks/use-layout"
import { META_THEME_COLORS } from "@/hooks/use-meta-color"
import { ActiveThemeProvider } from "@/components/active-theme"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/registry/default/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Components", "shadcn"],
  authors: [
    {
      name: "Nathan Brodin",
      url: "https://brodin.dev",
    },
  ],
  creator: "nathan brodin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL!,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]`}
      >
        <RootProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LayoutProvider>
              <ActiveThemeProvider>
                {children}
                <Toaster position="top-center" />
              </ActiveThemeProvider>
            </LayoutProvider>
          </ThemeProvider>
        </RootProvider>
      </body>
    </html>
  )
}
