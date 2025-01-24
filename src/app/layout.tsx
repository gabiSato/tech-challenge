import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import "./globals.css";

dayjs.locale("pt-br");

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Challenge",
  description: "Banco virtual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
