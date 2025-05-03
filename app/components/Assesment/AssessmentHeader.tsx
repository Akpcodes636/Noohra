"use client";
import GoBack from "../ui/Goback";
import Logo from "../ui/Logo";

export default function AssessmentHeader() {
  return (
    <header className="xl:h-[13vh] 2xl:h-[10vh] shadow-[0px_2px_4px_0px_#EFEFEF]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-0 py-6">
          <div>
            <GoBack />
          </div>
          <div>
            <Logo />
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
}
