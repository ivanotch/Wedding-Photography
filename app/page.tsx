import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Portfolio />
      <About />
    </div>
  );
}
