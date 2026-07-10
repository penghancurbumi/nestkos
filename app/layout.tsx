import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400","500","700",],
})

export const metadata: Metadata = {
  title: "NestKos",
  description: "NextKos plaform cari kosan terdekat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${opensans.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
