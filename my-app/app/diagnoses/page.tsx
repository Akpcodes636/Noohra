"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import AssessmentHeader from "../components/Assesment/AssessmentHeader";
import { DiagnosedContent } from "../components/utilis/contents/RegisterPage.Content";

export default function DiagnosisPage() {
  const router = useRouter(); // Initialize the router

  const handleClick = () => {
    router.push("/finalassesment"); // Navigate to finalassessment page
  };

  return (
    <>
      <AssessmentHeader />
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
                  <div key={i} className="mb-[16px]" onClick={handleClick}>
                    <div className="bg-[#EAF8F7] w-[530px] h-[47px] space-x-[16px]">
                      <div className="py-[6px] px-[16px]">
                        <p className="font-semibold text-[20px]">{p.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-full">
              <Image
                src="/image/Frame20.svg"
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