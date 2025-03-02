"use client";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="h-[100vh]">
      <div className="container mx-auto">
        <div className="min-h-screen flex items-center  justify-center">
          <div className="max-w-[490px] flex-1 h-full">
            <h1 className="text-[40px] leading-[52.75px] font-normal text-center md:text-center lg:text-start">
            Your <span className="text-[#DEA91A]">AI-Powered</span> Learning App to Support ADHD and ASD
            </h1>
            <p className="text-[24px] font-normal text-center md:text-center lg:text-start mb-4">Check your ADHD and ASD status</p>
            <Button 
              type="button" 
              style="primary" 
              css="w-[191px] h-[50px]"
            >
              Start Now
            </Button>
          </div>
          <div className="flex-1 h-full">
            <Image 
              src="/image/Hero.png" 
              width={1000} 
              height={1000} 
              alt="Kids playing around" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}