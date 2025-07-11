import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Layout from "@/templates/Layout";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICM - Iglesia Cristiana Maranata",
  description: "Una comunidad de fe y esperanza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
