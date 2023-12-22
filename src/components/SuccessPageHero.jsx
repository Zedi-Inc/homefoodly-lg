import React from "react";
import { arrowRightIcon, logoIcon } from "../assets/img";
import { Link } from "react-router-dom";

export default function SuccessPageHero() {
  return (
    <div className="w-full min-h-[50vh]">
      <div className="relative text-black">
        <div className="absolute top-0 w-full z-10 px-6 py-8">
          <div className="flex gap-2 justify-center items-center lg:justify-start font-satoshi-bold lg:ml-10 text-2xl text-[#51BA65]">
            <img src={logoIcon} alt="" />
            HomeFoodly
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-8 font-satoshi-bold text-4xl text-center text-[35px] leading-10">
              Successfully Signed up!
            </h1>
            <p className="font-medium text-base mt-4 max-w-[400px] lg:max-w-full text-center lg:text-start">
              You’ll be notified with updates on HomeFoodly and will be the
              first to know once we’re live!
            </p>
            <Link className="relative bg-[#51BA65] w-fit text-white font-satoshi-bold rounded-3xl py-3 pl-6 pr-12 mt-4" to={'/'}>Return Home
            <img className="absolute right-0 top-0" src={arrowRightIcon} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
