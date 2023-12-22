import React from "react";
import { logo2Icon } from "../assets/img";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#181818] flex flex-col items-center py-[40px] px-2 gap-16 text-white text-xs">
      <div className="flex flex-col items-center gap-[40px]">
        <div>
          <img src={logo2Icon} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <p className="lg:pr-8">email@zedi.africa </p>
          <p className="lg:px-8 border-0 lg:border-1 lg:border-l lg:border-r border-white">
            {"(+234) 80 1234 5678"}, {"(+44) 12 345 678"}
          </p>
          <p className="lg:px-8 border-white text-center">
            No. 7 Akin George Street, Obanikoro Estate, Obanikoro, Lagos
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-0 text-white text-xs w-[90%] justify-center lg:justify-between items-center">
        <div className="flex flex-col lg:flex-row gap-3 items-center lg:gap-8">
          <p className="text-center" to={"#"}>
            &copy; Copyright 2023 HomeFoodly. All Rights Reserved
          </p>
          <Link to={"#"}>Terms & Agreements</Link>
          <Link to={"#"}>Privacy Policy</Link>
        </div>
        <div className="flex gap-2 md:gap-8">
          <Link to={"#"}>Instagram</Link>
          <Link to={"#"}>Facebook</Link>
          <Link to={"#"}>Twitter</Link>
          <Link to={"#"}>LinkedIn</Link>
        </div>
      </div>
    </div>
  );
}
