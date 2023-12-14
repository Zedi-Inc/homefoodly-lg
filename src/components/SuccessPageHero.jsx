import React from 'react'
import { logoIcon } from '../assets/img'

export default function SuccessPageHero() {
  return (
    <div className="w-full min-h-[50vh]">
      <div className="min-h-[50vh] relative text-black bg-cover">
        <div className="absolute top-0 w-full z-10 pt-8 px-6 pb-8">
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
          </div>
        </div>
        {/* <div className="w-[125%] ml-[-10%]">
          <img src={girlImg} alt="" className="hidden lg:block w-full" />
        </div> */}
      </div>
    </div>
  )
}
