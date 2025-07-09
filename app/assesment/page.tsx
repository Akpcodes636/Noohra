"use client";
import Image from "next/image";
import Button from "../components/ui/Button";
import Header from "../components/header";
import useModalStore from "../store/modal";
import TestModal from "../components/modals/Modal";
import InputField from "../components/ui/InputField";
import { useState } from "react";
import { useUserInfo } from "../context/UserInfoContext";
import { toast } from "sonner";

export default function Assesmentpage() {
  const [email, setEmail] = useState("");
  const { openModal } = useModalStore();
  const { setUserInfo } = useUserInfo();

  const handleStart = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setUserInfo((prev) => ({ ...prev, email }));
    toast.success("Email saved!");
    openModal()
  };

  return (
    <section className="">
      <Header />
      <div className="container mx-auto py-[37px]">
        <div className="block md:block lg:hidden">
          <div className="flex items-center justify-center gap-3">
            <div className="h-0 w-[25.5px]">
              <Image
                src="/image/Line.png"
                alt="line through"
                width={500}
                height={500}
              />
            </div>
            <p className="text-[#63605D] font-medium text-[12px] text-center lg:text-[16px]">
              5-MINUTE TEST
            </p>
            <div className="h-0 w-[25.5px]">
              <Image
                src="/image/Line.png"
                alt="line through"
                width={500}
                height={500}
              />
            </div>
          </div>
          <h1 className="font-bold text-[18px]  text-center md:text-[32px] mb-[16px]">
            Your Journey to Understanding ADHD and ASD Starts Here
          </h1>
          <div className="w-full max-w-[343px] h-[306px] mx-auto">
            <Image
              src="/image/newImage.svg"
              alt="a lady and scientist working"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-normal  text-[14px] md:text-[20px] mb-[24px] text-center mt-[24px]">
            We are here to help you learn more about yourself and what makes you
            unique. With our AI-driven assessments, you can explore traits like
            ADHD or Autism Spectrum Disorder (ASD) and get insights that might
            help you understand your strengths and challenges better. Ready to
            dive in and discover more about you?
          </p>
          <div>
            <InputField
              name="userInput"
              label="Enter your details"
              placeholder="Enter your Email"
              css="bg-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              css="w-[343px] h-[40px] text-[#FFFFFF] font-bold mx-auto"
              type="button"
              style="primary"
              fn={handleStart}
            >
              Start test
            </Button>
          </div>
        </div>
        <div className="hidden md:hidden lg:grid grid-cols-2 place-items-center">
          <div className="flex items-start justify-start flex-col">
            <div className="flex items-center justify-center gap-3">
              <div className="h-0 w-[35.5px]">
                <Image
                  src="/image/Line.png"
                  alt="line through"
                  width={500}
                  height={500}
                />
              </div>
              <p className="text-[#63605D] font-medium text-[12px] text-center lg:text-[16px]">
                5-MINUTE TEST
              </p>
            </div>
            <h1 className="font-bold text-[32px] mb-[16px]">
              Your Journey to Understanding ADHD and ASD Starts Here
            </h1>
            <p className="font-normal text-[20px]">
              We are here to help you learn more about yourself and what makes
              you unique. With our AI-driven assessments, you can explore traits
              like ADHD or Autism Spectrum Disorder (ASD) and get insights that
              might help you understand your strengths and challenges better.
              Ready to dive in and discover more about you?
            </p>
            <div>
              <InputField
                name="userInput"
                label="Enter your details"
                placeholder="Enter your Email"
                css="bg-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                css="w-[343px] h-[40px] md:h-[56px] text-[#FFFFFF] font-bold"
                type="button"
                style="primary"
                fn={handleStart}
              >
                Start test
              </Button>
            </div>
          </div>
          <div className="">
            <div className="w-[557px] ">
              <Image
                src="/image/newImage.svg"
                alt="a lady and scientist working"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <TestModal />
      </div>
    </section>
  );
}
