import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { SessionProvider } from '@/components/providers/SessionProvider';
import Navbar1 from '@/components/navbar';
import Footer2 from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import config from '@/lib/config';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${config.baseUrl}`),
  title: 'Founders Club',
  description: 'A community of founders building the future',
  openGraph: {
    title: 'Founders Club',
    description: 'A community of founders building the future',
    url: config.baseUrl,
    siteName: 'Founders Club',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} antialiased w-full bg-background font-plusJK [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20 [&::-webkit-scrollbar-track]:bg-transparent`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={['light', 'dark', 'system']}
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <Navbar1 />
            {children}
            <Footer2 />
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
