import Head from "next/head";
import { Header, InfoCard, SocialCard } from "../components";
import About from "../components/about";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div className="w-[99vw] relative h-full bg-background">
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
