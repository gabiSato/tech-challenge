import Container from "@/components/container";

import UserAuthentication from "@/app/home/components/user-authentication";
import Features from "@/app/home/components/home-features";
import Header from "@/app/home/components/header";
import NewUser from "@/app/home/components/new-user";
import Hero from "@/app/home/components/home-hero";
import Footer from "@/app/home/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <NewUser />
      <UserAuthentication />

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
