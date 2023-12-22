import React from "react";
import SuccessPageHero from "../components/SuccessPageHero";
import SuccessPageMain from "../components/SuccessPageMain";

export default function SuccessPage() {
  return (
    <div className='h-screen sm:flex flex-col gap-8'>
        <SuccessPageHero />
        <SuccessPageMain />
    </div>

  );
}
