"use client";
import Header from "../components/header";
import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header/>
      <div className="container">
        <div className="grid grid-cols-2 min-h-screen py-[76px] place-content-center">
          <div className="flex items-center justify-center">
            <Image 
              src="/image/Layout.png" 
              width={500} 
              height={500} 
              alt="Register image" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}