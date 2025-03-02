"use client";
import { FC } from "react";
import Image from "next/image";

interface BallProps {
    direction: "left" | "right";
    className?: string;
  }

const Ball:FC<BallProps> = ({ direction, className =""}) => {
return (
     <div
      className={`flex items-center justify-center absolute ${className} ${
        direction === "right" ? "rotate-[140.27px]" : ""
      } `}
    >
      <div className={`w-[56px] h-[59px] relative `}>
        <Image
          src="/image/ball.png"
          alt={`Spray can pointing ${direction}`}
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
)
}
export default Ball;