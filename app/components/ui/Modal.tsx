"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import Image from "next/image";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import Model from "./CognitiveModel"; // The second modal

interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selection: string) => void;
}

export default function TestModal({
  isOpen,
  onClose,
  onConfirm,
}: TestModalProps) {
  const [showError, setShowError] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);

    if (option === "someone_else") {
      setShowError(true);
      setShowSecondModal(true);
    } else {
      setShowError(false);
      setShowSecondModal(false);
    }

    router.push("/Gender");
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 gradient overflow-y-auto hide-scroll"
        role="dialog"
        aria-modal="true"
        aria-label="Test Selection Modal"
      >
        <div className="flex items-center justify-center min-h-screen max-w-[343px] mx-auto">
          <div
            className={`max-w-[343px] lg:max-w-[460px] rounded-[16px] ${
              showError ? "h-[382px]" : "h-[310px]"
            } bg-[#FFFFFF] p-[16px]`}
          >
            {/* Header */}
            <div className="flex items-center justify-center gap-x-3 mb-[24px]">
              <div className="max-w-[267px] mx-auto">
                <h2 className="text-[20px] leading-[26px] font-bold">
                  Who is taking this test?
                </h2>
                <p className="font-normal text-[14px] leading-[26px]">
                  Are you taking this test for yourself or for someone else?
                </p>
              </div>
              <div
                className="w-[32px] h-[32px] bg-[#EAF8F7] flex items-center justify-center rounded-full cursor-pointer"
                onClick={onClose}
              >
                <FaTimes size={14} />
              </div>
            </div>

            {/* Options */}
            <div className="mb-[24px]">
              <div
                className={`${
                  selectedOption === "myself"
                    ? "border-2 border-[#BEEAE5]"
                    : ""
                } bg-[#EAF8F7] h-[48px] flex items-center justify-center p-2 gap-x-[12px] rounded-[8px] mb-[16px] cursor-pointer`}
                onClick={() => handleOptionSelect("myself")}
              >
                <div className="w-[10%] flex items-center justify-center ">
                  <div className="w-[30px] h-[31px]">
                    <Image
                      src="/image.svg"
                      alt=""
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-[90%]">
                  <h2 className="text-[#464442]">Myself</h2>
                </div>
              </div>

              <div
                className={`${
                  selectedOption === "someone_else"
                    ? "border-2 border-[#BEEAE5]"
                    : ""
                } bg-[#EAF8F7] h-[48px] flex items-center justify-center p-2 gap-x-[12px] rounded-[8px] mb-[16px] cursor-pointer`}
                onClick={() => handleOptionSelect("someone_else")}
              >
                <div className="w-[10%] flex items-center justify-center">
                  <div className="w-[30px] h-[31px]">
                    <Image
                      src="/humans.svg"
                      alt=""
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-[90%]">
                  <h2 className="text-[#464442]">Someone else</h2>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {showError && (
              <div className="bg-[#FDF4DD] p-3 mb-4 rounded-md flex items-center gap-2 drop-shadow-[0px_2px_8px_0px_#DEA91A40]">
                <div className="text-[#DEA91A] text-xl">
                  <MdErrorOutline />
                </div>
                <div>
                  <p className="text-[12px] text-[#7A5A0D]">
                    If you&apos;re taking this assessment on behalf of someone
                    else, please use their information to answer the questions.
                  </p>
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <div className="flex items-end justify-end mt-2">
              <Button
                style="secondary"
                type="button"
                css={`w-[89px] h-[32px] rounded-[8px] ${
                  selectedOption
                    ? "bg-[#15544D]"
                    : "bg-gray-300 cursor-not-allowed"
                } text-[#FFF]`}
                fn={
                  selectedOption ? () => onConfirm(selectedOption) : undefined
                }
              >
                Okay
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Modal (Model) */}
      {showSecondModal && <Model onClose={handleCloseSecondModal} />}
    </>
  );
}
