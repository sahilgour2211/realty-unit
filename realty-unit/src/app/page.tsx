import CardsSection from "@/components/Home/CardsSection";
import Hero from "@/components/Home/Hero";
import OurAminitiesSection from "@/components/Home/OurAminitiesSection";
import OurServiceSection from "@/components/Home/OurServiceSection";
import RequestCallback from "@/components/Home/RequestCallback";
import Section2 from "@/components/Home/Section2";

export default function Home() {
  return (
    <>
      <Hero />
      <Section2 />
      <CardsSection />
      <OurServiceSection />
      <OurAminitiesSection />
      <RequestCallback />
    </>
  );
}
