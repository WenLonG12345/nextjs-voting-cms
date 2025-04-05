import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "sonner";
import { NuqsAdapter } from "node_modules/nuqs/dist/_tsup-dts-rollup";

export const metadata: Metadata = {
  title: "Voting CMS",
  description: "Voting CMS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          <NuqsAdapter>
            {children}
            <Toaster richColors />
          </NuqsAdapter>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
