import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { i18n, Locale, validateLocale } from "@/i18n";
import { Providers } from "@/app/[locale]/providers";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export default function HomeLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  validateLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} relative min-h-screen pb-48 md:pb-32`}
      >
        <Providers>
          <Navbar></Navbar>
          <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            {children}
          </main>
          <Footer locale={locale}></Footer>
          <div className="container">
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_MEASUREMENT_ID}');
              `}
            </Script>
          </div>
        </Providers>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}
