import type { Metadata } from "next"
import { Lora } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

import { siteConfig } from "@/lib/config"
import { ActiveThemeProvider } from "@/registry/default/components/active-theme"
import { ThemeProvider } from "@/registry/default/components/theme-provider"
import { LayoutProvider } from "@/registry/default/hooks/use-layout"
import { META_THEME_COLORS } from "@/registry/default/hooks/use-meta-color"
import { Toaster } from "@/registry/default/ui/sonner"

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin"],
})

const writer = localFont({
  src: "../public/fonts/iAWriterQuattroV.ttf",
  variable: "--font-sans",
})

const writerMono = localFont({
  src: "../public/fonts/iAWriterMonoV.ttf",
  variable: "--font-mono",
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
    creator: "@nathan_brodin",
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
        className={`${lora.variable} ${writer.variable} ${writerMono.variable} overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]`}
      >
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
      </body>
    </html>
  )
}
