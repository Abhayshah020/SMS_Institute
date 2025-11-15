import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { IntroProvider } from "@/context/IntroContext";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "SMS Skills & Trades Institute",
  description: "We empower Nepal's workforce through hands-on, industry-focused training aligned with CTEVT Nepal and Australian Standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable}`}
      >
        <IntroProvider>
          {children}
        </IntroProvider>
      </body>
    </html>
  );
}
