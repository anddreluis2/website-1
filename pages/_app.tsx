import type { AppProps } from "next/app";
import "styles/global.css";
import { Source_Code_Pro } from "next/font/google";

const gruppo = Source_Code_Pro({
  style: ["normal"],
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={gruppo.className}>
      <Component {...pageProps} />;
    </main>
  );
}
