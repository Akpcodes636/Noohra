import "./globals.css";
import { Toaster } from 'sonner';
import localFont from 'next/font/local';
import { Roboto_Slab, Nunito } from 'next/font/google';
import type { Metadata } from "next";
import { UserInfoProvider } from "../app/context/UserInfoContext";

// Google Fonts
const robotoSlab = Roboto_Slab({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const nunito = Nunito({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

// Local Font
const hind = localFont({
  src: [
    {
      path: "./fonts/Hind-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Hind-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Hind-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Hind-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Hind-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "Noohra-Ai learning app",
  description: "Your AI-powered learning app to support ADHD and ASD.",
  icons: {
    icon: "/favicon.ico",   // path relative to public/
    shortcut: "/favicon.ico",
    apple: "/favicon-32x32.png",  // optional: for iOS devices
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hind.variable} ${robotoSlab.variable} ${nunito.variable} antialiased`}>
      <Toaster richColors position="top-right" />
        <UserInfoProvider>
          {children}
        </UserInfoProvider>
      </body>
    </html>
  );
}
