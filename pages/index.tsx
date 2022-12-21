import { Header, InfoCard } from "./components";
import { SocialCard } from "./components/SocialCard";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-background">
      <Header />
      <InfoCard />
      <SocialCard />
    </div>
  );
}
