import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Display: Bricolage Grotesque — a quiet, contemporary grotesque for headlines.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

// Body + labels: Instrument Sans — clean, understated, humanist.
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SunguraLabs — AI-Integrated Software Development",
    template: "%s · SunguraLabs",
  },
  description:
    "SunguraLabs builds AI-integrated software for East African businesses — chatbots, automation, document processing and knowledge assistants grounded in your real data, at fixed, affordable prices.",
  metadataBase: new URL("https://sunguralabs.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="grain relative min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
