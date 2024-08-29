import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import "./layout.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <h1>CIS</h1>
          <Link href="/">Home</Link>{" - "}<Link href="/student">Student</Link>
          {" - "}
          <Link href="/pokemon">Pokemon</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
