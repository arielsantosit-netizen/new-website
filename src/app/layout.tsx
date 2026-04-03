import type { Metadata } from "next";
import { Inter, Montserrat, Pinyon_Script, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  variable: "--font-pinyon",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arielsantos.space'),
  title: "Ariel Santos — Tech Educator & Mentor",
  description: "IT Educator and Tech Mentor. Providing comprehensive IT solutions, education, and strategy.",
  keywords: ["Ariel Santos", "Tech Educator", "Mentor", "IT Consultant", "Technology Strategist"],
  authors: [{ name: "Ariel Santos" }],
  icons: {
    icon: [
      { url: '/logo-new.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-new.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Ariel Santos — Tech Educator & Mentor",
    description: "Professional IT education and mentoring from Ariel Santos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth snap-y overscroll-y-contain" style={{ scrollPaddingTop: '65px' }}>
      <body
        className={`${inter.variable} ${montserrat.variable} ${pinyonScript.variable} ${cormorant.variable} antialiased bg-theme-light text-theme-dark`}
        suppressHydrationWarning
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S5VCYRETYC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S5VCYRETYC');
          `}
        </Script>
        <NavigationWrapper />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
