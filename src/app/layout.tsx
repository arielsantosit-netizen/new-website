import type { Metadata } from "next";
import { Inter, Montserrat, Poppins, Nunito } from "next/font/google";
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

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ariel Santos — TechMentor | IT Consultant & Technology Strategist",
  description: "Air Force veteran, Navy Reservist, and IT professional with over a decade of experience. TechMentor provides comprehensive IT solutions including cloud computing, network architecture, web development, and IT support.",
  keywords: ["Ariel Santos", "TechMentor", "IT Consultant", "Technology Strategist", "Cloud Computing", "Network Architecture", "Web Development", "IT Services", "IT Support", "Military Veteran", "Navy Reservist"],
  authors: [{ name: "Ariel Santos" }],
  icons: {
    icon: [
      { url: '/favicon 1.png', type: 'image/png' },
      { url: '/ariel-santos-logo.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/ariel-santos-logo.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  openGraph: {
    title: "Ariel Santos — TechMentor | IT Consultant & Technology Strategist",
    description: "Professional IT solutions from a military veteran with over a decade of experience. TechMentor specializes in cloud computing, network architecture, and technology strategy.",
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
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable} ${nunito.variable} antialiased bg-black text-white`}
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
