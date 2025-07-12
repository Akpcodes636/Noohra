"use client";
import { FaTimes } from "react-icons/fa";
import Button from "../ui/Button";
import useModalStore from "@/app/store/modal";
import { useRouter } from "next/navigation";

const NoticeModal = () => {
  const router = useRouter();
  const { secondModalOpen, closeSecondModal } = useModalStore();
  if (!secondModalOpen) return null;

const handleSkip = () => {
  closeSecondModal();
  router.push("/Gender"); // or wherever the flow should go
};

  return (
    <div
      className="fixed inset-0 z-50 gradient overflow-y-auto hide-scroll"
      role="dialog"
      aria-modal="true"
      aria-label="Test Selection Modal"
    >
      <div className="h-screen flex items-center justify-center">
        <div className="w-full max-w-[343px] min-h-[290px] lg:min-h-[270px] lg:max-w-[460px] mx-auto bg-white-100 rounded-[16px]">
          <div className="p-[16px]">
            <div className="flex items-center justify-center gap-x-3 mb-[24px]">
              <div className="max-w-[311px] lg:max-w-[390px] mx-auto w-full">
                <h2 className="text-[20px] leading-[26px] font-bold">
                  Cognitive Test Notice!
                </h2>
                <p className="font-normal text-[14px] leading-[26px]">
                  You&apos;re taking this assessment on behalf of someone else.
                </p>
              </div>
              <div
                className="w-[32px] h-[32px] bg-[#EAF8F7] flex items-center justify-center rounded-full cursor-pointer"
                onClick={closeSecondModal}
              >
                <FaTimes size={19} />
              </div>
            </div>

            {/* body */}
            <div className="bg-[#BEEAE5] mb-[32px] py-[22px] px-[16px]">
              <p className="text-[14px] leading-[20px] font-medium">
                To ensure accuracy,{" "}
                <span className="text-[#C29014]">
                  the cognitive test can only be taken by the individual
                  themselves.{" "}
                </span>{" "}
                Since you&apos;re not the person being assessed, this portion will be
                skipped.
              </p>
            </div>

            <div className="flex items-center justify-end gap-[16px]">
              <Button
                style="tertiary"
                type="button"
                css="w-[89px] h-[32px] rounded-[8px] border-[#15544D] border text-[#15544D]"
                fn={closeSecondModal}
              >
                Cancel
              </Button>
              <Button
                style="primary"
                type="button"
                css="w-[107px] h-[32px] rounded-[8px] bg-[#15544D] text-[#FFFFFF] text-[12px]"
                fn={handleSkip}
              >
                Skip anyway
              </Button>
            </div>
          </div>
          {/* Header */}
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
