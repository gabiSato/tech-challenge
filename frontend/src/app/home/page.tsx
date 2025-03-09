import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/home-header";
import Hero from "@/components/home-hero";
import Features from "@/components/home-features";

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
