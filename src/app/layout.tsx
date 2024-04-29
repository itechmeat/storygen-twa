import { AntdRegistry } from '@ant-design/nextjs-registry'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { LocaleProvider } from '@/i18n/locale-provider'
import { getLocale } from '@/i18n/server'
import '../styles/main.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = getLocale()
  console.log('siteUrl:', process.env.NEXT_PUBLIC_BASE_URL)

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <LocaleProvider value={locale}>
          <AntdRegistry>
            <div className="layout">
              <Header />
              <main className="main">{children}</main>
              <Footer />
            </div>
          </AntdRegistry>
        </LocaleProvider>
      </body>
    </html>
  )
}
