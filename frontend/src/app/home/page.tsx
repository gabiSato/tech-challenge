import Container from "@/components/container";

import Features from "@/app/home/components/home-features";
import Header from "@/app/home/components/header";
import Hero from "@/app/home/components/home-hero";
import Footer from "@/app/home/components/footer";

export default function Home() {
  return (
    <>
      <Header />

      <div className="pt-40 md:pt-24 pb-[70px] bg-linear-green">
        <Container className="flex flex-col gap-32 sm:gap-40 lg:gap-24">
          <Hero />

          <Features />
        </Container>
      </div>

      <Footer />
    </>
  );
}
