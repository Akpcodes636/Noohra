"use client";
import Image from 'next/image'
import Link from 'next/link'


const Logo = () => {
  return (
    <Link href="/" className="h-full max-h-[30px]">
      <div className="h-[28px] lg:h-[42px] min-w-[88px] lg:min-w-[110px] md:h-full">
        <Image
          src="/image/Logo.png"
          height={500}
          width={500}
          alt="logo"
          className="h-full w-full object-contain"
        />
      </div>
    </Link>
  )
}

export default Logo;

