import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const inter = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "SaasApp",
  description: "Ai-powered Image Generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", inter.variable)}>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
    // <ClerkProvider>
    //   <html lang="en">
    //     <body className={cn("font-IBMPlex antialiased", inter.variable)}>
    //       {children}
    //     </body>
    //   </html>
    // </ClerkProvider>
  );
}
