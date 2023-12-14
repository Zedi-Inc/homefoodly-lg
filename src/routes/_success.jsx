import React from "react";
import SuccessPageHero from "../components/SuccessPageHero";
import SuccessPageMain from "../components/SuccessPageMain";

export default function SuccessPage() {
  return (
    <div className='min-h-screen sm:flex flex-col justify-between'>
        <SuccessPageHero />
        <SuccessPageMain />
    </div>

  );
}
