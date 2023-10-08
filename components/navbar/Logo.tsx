import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
        src="/images/logo.png"
        alt="Airbnb clone"
        height="100"
        width="100" 
        className="hidden md:block cursor-pointer"
    />
  )
}

export default Logo;