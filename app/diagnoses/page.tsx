"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import AssessmentHeader from "../components/Assesment/AssessmentHeader";
import { DiagnosedContent } from "../components/utilis/contents/RegisterPage.Content";
import { useUserInfo } from "../context/UserInfoContext";

export default function DiagnosisPage() {
  const router = useRouter();
  const { setUserInfo } = useUserInfo(); 

  const handleClick = (diagnosis: string) => {
    setUserInfo((prev) => ({ ...prev, diagnosis })); 
    router.push("/finalassesment");
  };

  return (
    <div>
      <AssessmentHeader />
      <div className="container mx-auto py-[37px]  lg:hidden">
        <div className="flex items-center justify-center ">
          <div className="h-0 w-[25.5px]">
            <Image
              src="/image/Line.png"
              alt="line through"
              width={500}
              height={500}
            />
          </div>
          <p className="text-[#63605D] font-medium text-[16px] mb-[3px]">3/4</p>
          <div className="h-0 w-[25.5px]">
            <Image
              src="/image/Line.png"
              alt="line through"
              width={500}
              height={500}
            />
          </div>
        </div>
        <p className="font-bold text-[18px] leading-[100%] text-center text-[#2A2827] mb-[24px]">
          Have you ever been diagnosed with ADHD or ASD by a doctor?
        </p>
        <div className="max-w-[343px] md:max-w-[500px] mx-auto h-full">
          <Image
            src="/image/Frame20.svg"
            alt="image of a boy standing"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-normal text-[20px] leading-[100%] w-full max-w-[343px] md:max-w-[500px] mx-auto text-center text-[#464442] mb-[24px]">
          Sharing your diagnosis history helps us tailor the assessment to fit
          your unique experience.
        </p>
        <div>
          {DiagnosedContent.map((p, i) => (
            <div key={i} className="mb-[16px]" onClick={() => handleClick(p.title)}>
              <div className="bg-[#EAF8F7] max-w-[530px] mx-auto h-[47px] space-x-[16px]">
                <div className="py-[6px] px-[16px] cursor-pointer">
                  <p className="font-semibold text-[20px]">{p.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop Screens */}
      <div className="pt-[120px] pb-[61px] hidden md:hidden lg:block">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="w-full h-full flex items-start justify-center flex-col">
              <div className="flex items-center justify-center ">
                <div className="h-0 w-[35.5px]">
                  <Image
                    src="/image/Line.png"
                    alt="line through"
                    width={500}
                    height={500}
                  />
                </div>
                <p className="text-[#63605D] font-medium text-[16px] mb-[3px]">
                  3/4
                </p>
              </div>
              <div className="mb-[32px]">
                <h1 className="font-bold text-[32px] mb-[16px]">
                  Have you ever been diagnosed with ADHD or ASD by a doctor?
                </h1>
                <p className="text-[#464442] text-[20px] font-normal">
                  Sharing your diagnosis history helps us tailor the assessment
                  to fit your unique experience.
                </p>
              </div>
              <div>
                {DiagnosedContent.map((p, i) => (
                  <div key={i} className="mb-[16px]" onClick={() => handleClick(p.title)}>
                    <div className="bg-[#EAF8F7] w-[500px] h-[47px] space-x-[16px] cursor-pointer">
                      <div className="py-[6px] px-[16px]">
                        <p className="font-semibold text-[20px]">{p.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[539px] mx-auto h-full">
              <Image
                src="/image/Frame20.svg"
                alt="image of a lady in a wheel chair"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
