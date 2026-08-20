import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <div className="bg-[#F7F4EF] px-6">
        <div className="mx-auto max-w-7xl">

          <div className="h-px bg-black/15" />

          <div className="overflow-hidden py-8">
            <div className="flex w-max animate-marquee-right whitespace-nowrap">
              <span className="mx-8 font-display text-[12vw] leading-none text-black/15">
                LUMIÈRE
              </span>

              <span className="mx-8 font-display text-[12vw] leading-none text-black/15">
                LUMIÈRE
              </span>

              <span className="mx-8 font-display text-[12vw] leading-none text-black/15">
                LUMIÈRE
              </span>

              <span className="mx-8 font-display text-[12vw] leading-none text-black/15">
                LUMIÈRE
              </span>
            </div>
          </div>

          <div className="h-px bg-black/15" />

        </div>
      </div>
      <Contact />
    </div>
  );
}
