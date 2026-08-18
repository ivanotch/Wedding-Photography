import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Portfolio />
    </div>
  );
}
