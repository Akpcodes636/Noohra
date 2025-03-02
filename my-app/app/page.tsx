import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/Home/Hero";
import Ball from "./components/ui/Ball";

export default function Home() {
  return (
   <>
    <Header/>
    <div className="relative">
    <Ball className="absolute top-52 left-80" direction="left" />
    <Hero />
    </div>
   </>
  );
}
