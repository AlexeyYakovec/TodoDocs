import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ClerkProvider } from "@clerk/nextjs";

import { dark } from "@clerk/themes";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
   title: "todo docs",
   description: "todo live docs",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ClerkProvider
         appearance={{
            baseTheme: dark,
            variables: { colorPrimary: "#3371FF", fontSize: "16px" },
         }}
      >
         <html lang="en" suppressHydrationWarning>
            <body className={cn(fontSans.className, "min-h-screen")}>
               {children}
            </body>
         </html>
      </ClerkProvider>
   );
}
