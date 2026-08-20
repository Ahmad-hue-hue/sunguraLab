import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SunguraLabs — AI-Integrated Software Development",
    template: "%s · SunguraLabs",
  },
  description:
    "SunguraLabs builds AI-integrated software for East African businesses — chatbots, automation, document processing and knowledge assistants grounded in your real data.",
  metadataBase: new URL("https://sunguralabs.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col bg-white text-zinc-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
