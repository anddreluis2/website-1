import Head from "next/head";
import { useState } from "react";
import { Header, InfoCard, SocialCard } from "../components";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-background">
      <Head>
        <title>Andre Luis de Oliveira</title>
      </Head>
      <Header />
      <InfoCard />
      <SocialCard />
    </div>
  );
}
