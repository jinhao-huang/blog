import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { i18n, Locale, validateLocale } from "@/i18n";
import { Providers } from "@/app/[locale]/providers";
import Footer from "@/components/footer";

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
        className={`${inter.className} min-h-screen relative pb-48 lg:pb-32}`}
      >
        <Providers>
          <Navbar></Navbar>
          <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            {children}
          </main>
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}
