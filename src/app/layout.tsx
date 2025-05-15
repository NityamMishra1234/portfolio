import type { Metadata } from "next";
import { Poppins, Inter } from 'next/font/google';
import "./globals.css";
import { Providers } from './providers'; // Import the wrapper

const poppins = Poppins({ subsets: ['latin'], weight: ['600'], variable: '--font-poppins' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Nityam Mishra",
  description: "This is the portfolio of Nityam Mishra @developed by Nityam Mishra",
  icons: {
    icon: "/favicon-for-app/favicon.icon.png", // or /favicon.png, etc.
  },
  manifest: "/favicon-for-app/manifest.json",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
