// app/layout.tsx
import { ReactNode } from "react";
import HeaderTop from "./components/HeaderTop";
import Footer from "./components/Footer";
import MantineProviderWrapper from "./components/MantineProviderWrapper";
import { Metadata } from "next";
import "../globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Welcome to Elias's blog",
  description: "Personal blog",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProviderWrapper>
          <div className="app-container">
            <HeaderTop />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
        </MantineProviderWrapper>
      </body>
    </html>
  );
}
