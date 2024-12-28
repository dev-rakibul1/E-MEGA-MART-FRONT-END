import Footer from "@/components/shared/footer/Footer";
import MainMenu from "@/components/shared/navbar/MainMenu";
import TopMenu from "@/components/shared/navbar/TopMenu";
import TriggerMenu from "@/components/shared/navbar/TriggerMenu";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEGA MART ",
  description:
    "Mega Mart is a dynamic eCommerce website designed to meet all your shopping needs. From the latest fashion trends to essential groceries, electronics, and more, Mega Mart provides a seamless and convenient online shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <nav>
            <TopMenu />
            <TriggerMenu />
            <MainMenu />
          </nav>

          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </Providers>
  );
}
