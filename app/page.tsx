import Header from "./components/header";
import Hero from "./components/Home/Hero";
import Ball from "./components/ui/Ball";

export default function Home() {
  return (
   <>
    <Header/>
    <div className="relative">
    <Ball className="absolute xl:top-[15%] 2xl:top-[20%] xl:right-[95%] 2xl:right-[80%]" direction="left" />
    <Hero />
    </div>
   </>
  );
}
