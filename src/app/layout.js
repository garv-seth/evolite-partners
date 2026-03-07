import { Cinzel, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Evolite Partners — Evolution to Elite™",
  description: "Tax strategy, IRS resolution, import/export consulting, and business formation for founders. Built from 11 businesses and 9 years of Fortune 500 finance.",
  keywords: "tax strategy, IRS resolution, business formation, import export consulting, PRIDE Framework, Washington State",
  openGraph: {
    title: "Evolite Partners — Evolution to Elite™",
    description: "Tax strategy. IRS resolution. Import/Export. Business formation. We build the financial architecture that protects and grows your business.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${cinzel.variable} ${cormorant.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
