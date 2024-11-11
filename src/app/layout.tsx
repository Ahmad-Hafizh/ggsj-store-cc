import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Roboto_Flex } from "next/font/google";
import FooterComponent from "@/components/footer";
import StoreProvider from "./StoreProvider";

const behindTheNineties = localFont({
  preload: true,
  src: "./fonts/Behind-The-Nineties-Smbd.woff",
  variable: "--font-behind-the-nineties",
  weight: "600",
});
const robotoFlex = Roboto_Flex({
  preload: true,
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Gistara Geya Samasta Jaya",
  description:
    "Gistara Geya Samasta Jaya is an indonesian trade company for agriculture and marine product ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body
          className={`${behindTheNineties.variable} ${robotoFlex.variable} antialiased`}
        >
          <Navbar />
          {children}
          <FooterComponent />
        </body>
      </StoreProvider>
    </html>
  );
}
