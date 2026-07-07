import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Journey from "@/components/Journey/Journey";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects/Projects";
import Stats from "@/components/Stats/Stats";
import Testimonials from "@/components/Testinominals/Testimonials";
import Ventures from "@/components/Ventures/Ventures";
import WhyChoose from "@/components/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />

      
        <Hero />

        <About />
        <Stats />
        <Ventures />
        <WhyChoose />
        <Journey />
        <Projects />
        <Testimonials />
        <Contact />
      
    </>
  );
}