"use client";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { QueryProvider } from "./providers";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from "react-hot-toast";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <QueryProvider>
            <Providers
              themeProps={{ attribute: "class", defaultTheme: "dark" }}
            >
              <div className="relative flex flex-col h-screen">
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                  <Toaster position="bottom-left" />
                  {children}
                </main>
              </div>
            </Providers>
          </QueryProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
