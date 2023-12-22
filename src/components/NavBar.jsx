import React from "react";
import { logoIcon } from "../assets/img";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default function NavBar() {
  return (
    <nav className="bg-[#FDFAFF] w-screen fixed z-20 top-0 flex justify-center lg:justify-between px-16 py-6">
      <div className="flex gap-2 items-center lg:justify-start font-satoshi-bold text-2xl text-[#51BA65]">
        <img src={logoIcon} alt="" />
        HomeFoodly
      </div>
      <Link
        to="/#form"
        className="hidden lg:block bg-[#51BA65] px-5 py-3 text-white font-satoshi-bold rounded-[24px]"
      >
        Sign up as a vendor
      </Link>
    </nav>
  );
}
