import type { Metadata } from "next";
import { Inter, Montserrat, Cairo } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import LoadingScreen from "@/components/LoadingScreen";
import LanguageLoadingScreen from "@/components/LanguageLoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import LayoutWrapper from "@/components/LayoutWrapper";
import { SidebarProvider } from "@/context/SidebarContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sourceCodePro = Montserrat({
  subsets: ["latin"],
  variable: "--font-english",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Abdullah Space",
  description: "",
  authors: [{ name: "Abdullah" }],
  openGraph: {
    title: "Abdullah Space",
    description: "",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sourceCodePro.variable} ${cairo.variable} font-sans antialiased`} style={{ backgroundColor: 'var(--background)' }}>
        <ClientThemeProvider>
          <LoadingScreen />
          <LanguageLoadingScreen />
          <SidebarProvider>
            <LayoutWrapper>
              <div className="flex min-h-screen w-full overflow-x-hidden">
                <Sidebar />
                <main className="flex-1 transition-all duration-300 lg:ml-80 xl:ml-84 2xl:ml-96 relative w-full min-w-0" style={{
                  backgroundColor: 'var(--background)'
                }}>
                  {/* Animated Bubble Background */}
                  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="bubble-animation">
                      <div className="bubble bubble-1"></div>
                      <div className="bubble bubble-2"></div>
                      <div className="bubble bubble-3"></div>
                      <div className="bubble bubble-4"></div>
                      <div className="bubble bubble-5"></div>
                      <div className="bubble bubble-6"></div>
                      <div className="bubble bubble-7"></div>
                      <div className="bubble bubble-8"></div>
                    </div>
                  </div>
                  
                  <div className="w-full relative z-10 min-w-0">
                    <div className="w-full max-w-none px-0 pt-16 lg:pt-6 lg:max-w-7xl lg:mx-auto lg:px-8">
                      <ErrorBoundary>
                        {children}
                      </ErrorBoundary>
                    </div>
                  </div>
                </main>
              </div>
            </LayoutWrapper>
          </SidebarProvider>
          <ScrollToTop />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
