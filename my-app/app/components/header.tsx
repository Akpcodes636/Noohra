"use client";

import Link from "next/link";
import Logo from "./ui/Logo";

export default function Header(){
    return (
        <header className="w-full h-[70px]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                <Logo />
                <nav>
                 <ul>
                    <Link href={"/contact"}>
                     <span className="montserrat-medium-24 text-[#82807D] text-[24px] leading-[29px]">Contact us</span>
                    </Link>
                 </ul>
                </nav>
                </div>
            </div>
        </header>
    )
}