import React from "react";
import { ankaraDesign, girlImg2 } from "../assets/img";

export default function SuccessPageMain() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-2 lg:mb-[-150px] top-[50%] z-10" >
        <div className="h-[128px] bg-[url(../src/assets/img/ankara-design.png)] bg-cover">
        </div>
        <div className="h-[128px] bg-[url(../src/assets/img/ankara-design.png)] bg-cover">
        </div>
      </div>
      <div className="absolute bottom-0 w-[70%] left-[50%] translate-x-[-50%] lg:w-[510px] lg:h-[380px]">
        <img src={girlImg2} alt="" />
      </div>
    </div>
  );
}
