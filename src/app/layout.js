import localFont from "next/font/local";
import "./globals.css";
import GlobalState from "@/context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tripe",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalState>
          <Navbar />
          <main className="flex min-h-screen bg-gray-100 flex-col mt-16 ">
            {children}
          </main>
          <Footer />
        </GlobalState>
      </body>
    </html>
  );
}
