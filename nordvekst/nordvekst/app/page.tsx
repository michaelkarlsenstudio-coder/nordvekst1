import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Offer from "@/components/Offer";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Process />
      <Offer />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
