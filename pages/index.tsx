import { Header, InfoCard, SocialCard } from "../components";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-background">
      <Header />
      <InfoCard />
      <SocialCard />
    </div>
  );
}
