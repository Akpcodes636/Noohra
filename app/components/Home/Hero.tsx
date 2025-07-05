"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const gotoAssesment = () => {
    router.push("/assesment");
  };

  return (
    <section className="py-[90px] md:py-[95px] lg:py-[100px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-[20px] gap-x-[67px] place-items-center">
        <div className="">
          <h1 className="text-[20px] md:text-[30px] lg:text-[40px] text-center lg:text-left font-bold leading-[100%] w-full max-w-[343px] md:max-w-[490px] lg:max-w-[490px] mx-auto lg:mx-0 mb-[20px]">
            Your <span className="text-[#DEA91A]">AI-Powered </span>Learning App
            to Support ADHD and ASD
          </h1>

          <p className="font-normal text-[18px] md:text-[20px] text-center lg:text-left lg:text-[24px] leading-[100%] lg:leading-[42px] w-full max-w-[343px] md:max-w-[490px] lg:max-w-[490px] mx-auto lg:mx-0 text-[#000000]">
            Check your ADHD and ASD status{" "}
          </p>
          <div className="mt-[16px] flex items-center justify-center lg:justify-start">
            <Button
              style="primary"
              css="w-[191px] h-[50px] bg-[#000000] text-white-100 rounded-[4px] text-[16px]"
              type="button"
              fn={gotoAssesment}
            >
              Start Now
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[616px]">
            <Image
              src="/icons/Group1.svg"
              width={500}
              height={500}
              alt="kids dancing together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
