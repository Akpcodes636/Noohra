"use client";
import Image from "next/image";
import { useState } from "react";
import TestModal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Header from "../components/header";

export default function Assesmentpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTestQuestions, setShowTestQuestions] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  
  // opening modal
  const openLoginModal = () => {
    setIsModalOpen(true);
  };
  
  // Closing modal
  const closeLoginModal = () => {
    setIsModalOpen(false);
  };
  
  // Handle confirmation
  const handleConfirm = (selection: string) => {
    // Add your confirmation logic here
    console.log("Test selection confirmed");
    console.log("User email:", email);
    closeLoginModal();
    setShowTestQuestions(true);
    // You could navigate to the next page or perform other actions
  };
  
  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section className="">
      <Header />
      <div className="container mx-auto">
        {/* Desktop View */}
        {!showTestQuestions && (
          <div className="h-screen grid grid-cols-2 place-items-center">
            <div className="w-[502px] h-full flex items-start justify-center flex-col">
              <div className="flex items-center justify-center gap-3">
                <div className="h-0 w-[35.5px]">
                  <Image
                    src="/image/line.png"
                    alt="line through"
                    width={500}
                    height={500}
                  />
                </div>
                <p className="text-[#63605D] font-medium text-[16px]">
                  5-MINUTE TEST
                </p>
              </div>
              <h1 className="font-bold text-[32px] mb-[16px]">
                Your Journey to Understanding ADHD and ASD Starts Here
              </h1>
              <p className="font-normal text-[20px] mb-[40px]">
                We are here to help you learn more about yourself and what makes
                you unique. With our AI-driven assessments, you can explore
                traits like ADHD or Autism Spectrum Disorder (ASD) and get
                insights that might help you understand your strengths and
                challenges better. Ready to dive in and discover more about you?
              </p>
              
              {/* Email Input Field */}
              <div className="mb-6 w-full max-w-[349px]">
                <label htmlFor="email" className="block text-[#63605D] text-sm font-medium mb-2">
                  Enter your email to get started
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7B7E] focus:border-transparent"
                  placeholder="example@email.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              
              <div>
                <Button
                  type="button"
                  style="secondary"
                  css="w-[349px] h-[56px] bg-[#000000] text-[#FFF] cursor-pointer"
                  fn={openLoginModal}
                >
                  Start test
                </Button>
              </div>
            </div>
            <div className="w-[556px] h-[453px] flex items-center justify-center">
              <Image
                src="/image/newImage.svg"
                alt="a lady and scientist working"
                width={500}
                height={500}
              />
            </div>
          </div>
        )}
        {/* Use the TestModal component */}
        <TestModal
          isOpen={isModalOpen}
          onClose={closeLoginModal}
          onConfirm={handleConfirm}
        />
      </div>
    </section>
  );
}