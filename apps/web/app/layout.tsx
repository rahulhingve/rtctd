import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SessionWraper from "./components/SessionWraper";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Syncrocode",
  description: "Real-time collaboration tool for developers ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <SessionWraper>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>

          {children}

        </body>
      </html>

    </SessionWraper>
  );
}
