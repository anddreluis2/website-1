import Head from "next/head";
import { Header, InfoCard, SocialCard } from "../components";
import About from "../components/about";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="w-[100%] relative h-[100%] bg-background">
      <Head>
        <title>Andre Luis de Oliveira</title>
      </Head>
      <Header />
      <InfoCard />
      <SocialCard />
      <About />
      <Footer />
    </div>
  );
}
