import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";

interface ModelProps {
  onClose: () => void;
}

export default function Model({ onClose }: ModelProps) {
  const router = useRouter();

  const handleSkip = () => {
    onClose();
    router.push("/Gender");
  };

  return (
    <div className="fixed inset-0 z-50 gradient overflow-y-auto hide-scroll">
      <div className="bg-[#FFFFFF] flex items-center justify-center max-w-[267px] mx-auto h-[290px]">
        <div className="p-[16px]">
          <div className="flex items-center justify-center gap-x-3 mb-[24px]">
            <div className="">
              <h2 className="text-[20px] leading-[26px] font-bold">
                Cognitive Test Notice!
              </h2>
              <p className="font-normal text-[14px] leading-[26px]">
                You&apos;re taking this assessment on behalf of someone else.
              </p>
            </div>
            <div
              className="w-[32px] h-[32px] bg-[#EAF8F7] flex items-center justify-center rounded-full cursor-pointer"
              onClick={onClose}
            >
              <FaTimes size={14} />
            </div>
          </div>
          <div className="max-w-[311px] h-[290px] bg-[#BEEAE5] mb-[24px] px-[16px] py-2">
            <p className="text-[14px] text-[#464442]">
              To ensure accuracy,{" "}
              <span className="text-[#C29014]">
                the cognitive test can only be taken by the individual
                themselves
              </span>
              . Since you&apos;re not the person being assessed, this portion will be
              skipped.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              type="submit"
              style="primary"
              css="w-[89px] h-[32px]"
              fn={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              style="tertiary"
              css="w-[107px] h-[32px]"
              fn={handleSkip}
            >
              Skip anyway
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
