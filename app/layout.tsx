import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import RegisterModal from "@/components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/store/ModalContext";
import ToasterProvider from "@/providers/ToasterPovider";

export const metadata: Metadata = {
  title: "Airbnb clone",
  description: "The best airbnb clone on the internet",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <ModalProvider>
          <RegisterModal />
          <Navbar />
          {children}
          <Toaster position="top-center" />
        </ModalProvider>
      </body>
    </html>
  )
};
