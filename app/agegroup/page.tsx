"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AssessmentHeader from "../components/Assesment/AssessmentHeader";
import { AgeGroupContent } from "../components/utilis/contents/RegisterPage.Content";
import { useUserInfo } from "../context/UserInfoContext";

export default function AgeGroup() {
  const router = useRouter();

  const { setUserInfo } = useUserInfo(); 

  const handleAgeSelect = (age: string) => {
    setUserInfo((prev) => ({ ...prev, age })); 
    router.push("/diagnoses"); 
  };

  return (
    <>
      <AssessmentHeader />
      <div className="pt-[40px] pb-[61px]">
        <div className="container mx-auto">
          <div className="block md:block lg:hidden">
            <div className="flex items-center justify-center gap-3">
              <div className="h-0 w-[25.5px]">
                <Image
                  src="/image/line.png"
                  alt="line through"
                  width={35.5}
                  height={2}
                  priority
                />
              </div>
              <p className="text-[#63605D] font-medium text-[16px] mb-[3px]">
                2/4
              </p>
              <div className="h-0 w-[25.5px]">
                <Image
                  src="/image/line.png"
                  alt="line through"
                  width={35.5}
                  height={2}
                  priority
                />
              </div>
            </div>
            <h1 className="text-[18px] font-bold text-center mb-[24px]">
              Select your age group
            </h1>
            <div>
              <div className="max-w-[343px] md:max-w-[500px] w-full mx-auto h-full flex items-center justify-center">
                <Image
                  src="/image/imagess.svg"
                  alt="image of a boy standing"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <p className="text-[#464442] text-[20px] max-w-[343px] mx-auto md:max-w-[500px] font-normal text-center">
                Your age helps us make sure the questions and results are just
                right for where you are in life.
              </p>
              <div className="w-full mx-auto">
                {AgeGroupContent.map((p, i) => (
                  <div key={i} className="mb-[16px]">
                    <div
                      className="bg-[#EAF8F7] w-full max-w-[530px] mx-auto h-[47px] flex items-center px-[16px] cursor-pointer hover:bg-[#D6F1EF] transition-colors duration-200"
                      onClick={() => handleAgeSelect(p.title)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleAgeSelect(p.title);
                        }
                      }}
                    >
                      <p className="font-semibold text-[20px]">{p.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Large screen */}
          <div className="hidden md:hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 max-h-screen">
            <div className="w-full h-full flex items-start justify-center flex-col">
              <div className="flex items-center justify-start gap-3">
                <div className="h-0 w-[35.5px]">
                  <Image
                    src="/image/line.png"
                    alt="line through"
                    width={35.5}
                    height={2}
                    priority
                  />
                </div>
                <p className="text-[#63605D] font-medium text-[16px] mb-[3px]">
                  2/4
                </p>
              </div>
              <div className="mb-[32px]">
                <h1 className="font-bold text-[32px] mb-[16px]">
                  Select your age group
                </h1>
                <p className="text-[#464442] text-[20px] font-normal">
                  Your age helps us make sure the questions and results are just
                  right for where you are in life.
                </p>
              </div>
              <div className="w-full">
                {AgeGroupContent.map((p, i) => (
                  <div key={i} className="mb-[16px]">
                    <div 
                      className="bg-[#EAF8F7] w-full max-w-[530px] h-[47px] flex items-center px-[16px] cursor-pointer hover:bg-[#D6F1EF] transition-colors duration-200"
                      onClick={() => handleAgeSelect(p.title)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleAgeSelect(p.title);
                        }
                      }}
                    >
                      <p className="font-semibold text-[20px]">{p.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/image/imagess.svg"
                alt="image of a boy standing"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div> 
        </div>
    </>
  );
}
