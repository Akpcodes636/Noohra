"use client";
import { useRouter } from "next/navigation";
import AssessmentHeader from "../components/Assesment/AssessmentHeader";
import Image from "next/image";
import { SelectGender } from "../components/utilis/contents/RegisterPage.Content";

export default function Gender() {
    const router = useRouter()
 
  const gotoAge = ()=>{
      router.push('/agegroup')
  }
  
  return (
    <div>
      <AssessmentHeader />
      <div className="container mx-auto pt-[120px] pb-[61px]">
        <div className="grid grid-cols-2">
          <div className="w-full h-full flex items-start justify-start flex-col">
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
                1/4
              </p>
            </div>
            {/* Gender assesement */}
            <div className="mb-[32px]">
              <h1 className="font-bold text-[32px] mb-[14px]">
                What is your Gender?
              </h1>
              <p className="text-[#464442] font-normal text-[20px]">
                This helps tailor the assessment to how your experiences might
                vary based on gender.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {SelectGender.map((p, i) => (
                <div
                  key={i}
                  className="w-[241.7px] h-[97px] bg-[#EAF8F7] gap-[12px] rounded-[23.66px] flex items-center justify-center border-2 border-transparent hover:border-[#BEEAE5] transition-all duration-200 cursor-pointer"
                  onClick={gotoAge}
                >
                  <div className="w-[30px] h-[31px]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={100}
                      height={100}
                      className="w-full h-full"
                    />
                  </div>
                  <h1 className="font-bold text-[28px] text-[#404041]">
                    {p.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/image/kids.svg"
              alt="boy and girl kids"
              width={500}
              height={500}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
