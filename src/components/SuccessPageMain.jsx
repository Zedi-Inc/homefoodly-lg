import React from "react";
import { ankaraDesign, girlImg2 } from "../assets/img";

export default function SuccessPageMain() {
  return (
    <div className="w-full min-h-[50vh]">
      <div className="relative mt-[100px] lg:mt-[200px]">
        <div className="flex flex-col gap-2 z-10">
          <div className="h-[128px] bg-[url(../src/assets/img/ankara-design.png)] bg-cover"></div>
          <div className="h-[128px] bg-[url(../src/assets/img/ankara-design.png)] bg-cover"></div>
        </div>
        <div className="absolute w-[70%] md:max-w-[380px] mdd:max-w-[320px] lg:max-w-[550px] mdd:translate-x-[40%] bottom-0 translate-x-[15%] md:left-[50%] md:translate-x-[-50%] lg:translate-y-[35%]">
          <img src={girlImg2} alt="" />
        </div>
      </div>
      <div className="h-[200px] w-full lg:hidden"></div>
    </div>
  );
}
