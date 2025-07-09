"use client";
import Image from "next/image";
import AssessmentHeader from "../components/Assesment/AssessmentHeader";
import { AssessmentContent } from "../components/utilis/contents/RegisterPage.Content";
import { useRouter } from "next/navigation";
import { useUserInfo } from "../context/UserInfoContext";

export default function AssesmentPage() {
  const router = useRouter(); // Initialize the router
const { setUserInfo } = useUserInfo(); 

  const handleClick = ( assessment:string) => {
    setUserInfo((prev) => ({ ...prev,  assessment })); 
    router.push("/info"); // Navigate to finalassessment page
  };

  return (
    <>
      <AssessmentHeader />
      <div className="py-[37px] container mx-auto lg:hidden">
        <div className="flex items-center justify-center">
          <div className="h-0 w-[25.5px]">
            <Image
              src="/image/line.png"
              alt="line through"
              width={500}
              height={500}
            />
          </div>
          <p className="text-[#63605D] font-medium text-[16px] mb-[3px]">4/4</p>
          <div className="h-0 w-[25.5px]">
            <Image
              src="/image/line.png"
              alt="line through"
              width={500}
              height={500}
            />
          </div>
        </div>
        <p className="text-[18px] leading-[100%] text-[#2A2827] mb-[24px] text-center font-bold">
          Choose your assessment
        </p>
        <div className="max-w-[343px] mx-auto h-full mb-[24px]">
          <Image
            src="/image/Frame30.svg"
            alt="image of a boy standing"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-[20px] text-[#464442] w-full max-w-[343px] md:max-w-[500px] mx-auto font-normal leading-[100%] mb-[24px]">
          Choosing your focus helps us dive deeper into the areas that matter
          most to you.
        </p>
        <div className="flex items-center justify-center flex-col gap-x-[32px] gap-y-[24px]">
          {AssessmentContent.map((p, i) => (
            <div key={i} className=" " onClick={() => handleClick(p.title)}>
              <div className="bg-[#EAF8F7] max-w-[343px] mx-auto h-[147px] rounded-[23px] cursor-pointer">
                <div className="p-[31px]">
                  <h2 className="font-bold text-[20px] mb-[12px]">{p.title}</h2>
                  <p className="text-[12px] text-[#464442] font-medium">
                    {p.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop screens */}
      <div className="container mx-auto hidden md:hidden lg:block py-[120px]">
          <div className="grid grid-cols-2">
            <div className="w-full h-full flex items-start justify-center flex-col">
              <div className="flex items-center justify-center ">
                <div className="h-0 w-[35.5px]">
                  <Image
                    src="/image/line.png"
                    alt="line through"
                    width={500}
                    height={500}
                  />
                </div>
                <p className="text-[#63605D] font-medium text-[16px] mb-[3px]">
                  4/4
                </p>
              </div>
              <div className="mb-[32px]">
                <h1 className="font-bold text-[32px] mb-[16px]">
                  Choose your assessment
                </h1>
                <p className="text-[#464442] text-[20px] font-normal">
                  Choosing your focus helps us dive deeper into the areas that
                  matter most to you.
                </p>
              </div>

              <div className="flex items-center justify-center gap-x-[32px] ">
                {AssessmentContent.map((p, i) => (
                  <div key={i} className="" onClick={() => handleClick(p.title)}>
                    <div className="bg-[#EAF8F7] w-full max-w-[253px] h-[173px] rounded-[23px] cursor-pointer">
                      <div className="p-[31px]">
                        <h2 className="font-bold text-[28px] mb-[12px]">
                          {p.title}
                        </h2>
                        <p className="text-[12px] text-[#464442] font-medium">
                          {p.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[533px] mx-auto h-full">
              <Image
                src="/image/Frame30.svg"
                alt="image of a boy standing"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
    </>
  );
}
