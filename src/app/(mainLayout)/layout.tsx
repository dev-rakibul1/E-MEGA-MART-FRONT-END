import Footer from "@/components/shared/footer/Footer";
import StickyMenuWrapper from "@/components/shared/navbar/StickyMenuWrapper";
import TopMenu from "@/components/shared/navbar/TopMenu";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEGA MART",
  description:
    "Mega Mart is a dynamic eCommerce website designed to meet all your shopping needs...",
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
            <StickyMenuWrapper />
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
