import Head from "next/head";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavigationBarComponent from "./components/navigationBar/navigationBarComponent";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crown Clothing Store",
  description: "Clothing Store Nextjs",
};

<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/assets/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon-16x16.png"
      />
      <body className={poppins.className}>
        <NavigationBarComponent />
        {children}
      </body>
    </html>
  );
}
