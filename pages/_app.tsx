import type { AppProps } from "next/app";
import "../public/assets/js/loader.js";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../public/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../public/assets/css/style.css";
import CustomScript from "@/components/CustomScript";
import DefaultLayout from "@/components/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <CustomScript />
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
