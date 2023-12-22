import React from "react";
import { africaMapWithLines } from "../assets/img";

export default function Hero() {
  return (
    <div className="bg-[url(/src/assets/img/hero-bg.png)] bg-[length:200%_auto] md:bg-[length:130%_auto] lg:bg-[length:100%_auto] bg-position-xs xs:bg-position-sm md:bg-position-md bg-no-repeat lg:bg-position-lg xl:bg-position-xl mt-[76px] lg:mt-11">
      <div className="flex flex-col items-center gap-8 px-4 sm:px-6 lg:mx-[108px] lg:py-16">
        <div className="flex flex-col justify-center items-center text-[#292C32]">
          <h1 className="text-[40px] leading-[48px] font-satoshi-bold mb-4 text-center tracking-tighter">
            Unveiling the brand{" "}
            <span className="text-[#51BA65]">HomeFoodly,</span> where we’re
            redefining the global African food experience!
          </h1>
          <p className="text-center lg:max-w-[60%]">
            Are you an African good items and groceries business owners based in
            Africa? Nigeria, Ghana, Cameroon, South Africa, East Africa, Central
            Africa, etc. Join our platform as a vendor and unlock a world of
            opportunities to sell to global customers and help bridge the gap
            and void in many countries as Africans are looking for easier
            opportunities to get their native food item.
          </p>
        </div>
      </div>
      <div className="h-[340px] md:h-[380px] mdd:h-[560px] xmd:h-[560px] lg:h-[520px] w-full"></div>
    </div>
  );
}
