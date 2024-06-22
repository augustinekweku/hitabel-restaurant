import type { AppProps } from "next/app";
import "../public/assets/js/loader.js";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../public/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../public/assets/css/style.css";
import "../styles/globals.scss";
import CustomScript from "@/components/CustomScript";
import DefaultLayout from "@/components/DefaultLayout";
import "animate.css";

import { Inter } from "next/font/google";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <DefaultLayout>
        <CustomScript />
        <Component {...pageProps} />
        <FloatingWhatsApp
          phoneNumber="+233201024839"
          accountName="Hi-Tabel"
          avatar="/assets/img/hitabel-logo.png"
        />
      </DefaultLayout>
    </main>
  );
}
