import Head from "next/head";
import { Header, InfoCard, SocialCard } from "../components";
import About from "../components/about";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div className="w-[99vw] h-full bg-background">
      <Head>
        <title>Andre Luis de Oliveira</title>
      </Head>
      <Header />
      <InfoCard />
      <SocialCard />
      <About />
      <Projects />
    </div>
  );
}
