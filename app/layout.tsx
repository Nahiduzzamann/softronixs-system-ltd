import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UserLayout from "./pages/Home/UserLayout";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softronixs System Ltd. - Development Lab of Information Technology",
  description:
    "Softronixs System Ltd is a software development company based in Bangladesh that provides a range of IT services to clients in 29+ countries, with a majority of their clients located in Europe and North America. The company is known for its ERP solutions, mobile application development, web development, website design and development, brand design and development, and digital marketing and SEO services. The company's main goal is to develop a sustainable environment for developing countries by building a skilled workforce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="md:mt-32 mt-[110px]">
          <UserLayout>{children}</UserLayout>
        </div>
      </body>
    </html>
  );
}
