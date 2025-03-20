"use client";
import Image from "next/image";
import AssessmentHeader from "../components/Assesment/AssessmentHeader";
import { AssessmentContent } from "../components/utilis/contents/RegisterPage.Content";
import { useRouter } from "next/navigation";

export default function AssesmentPage() {
  const router = useRouter(); // Initialize the router

  const handleClick = () => {
    router.push("/ADHDAAssessment"); // Navigate to finalassessment page
  };

  return (
    <>
      <AssessmentHeader  />
      <div className="pt-[120px] pb-[61px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 max-h-screen">
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
                  <div key={i} className=" " onClick={handleClick}>
                    <div className="bg-[#EAF8F7] w-[253px] h-[173px] rounded-[23px]">
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
            <div className="w-full h-full">
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
      </div>
    </>
  );
}
