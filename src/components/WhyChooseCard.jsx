import React from "react";

export default function WhyChooseCard({ iconSrc, subHeading, content }) {
  return (
    <div className="flex flex-col gap-4 border-dashed border-[#51BA65] border-2 rounded-3xl pt-5 pb-8 px-6">
      <div className="flex gap-2 items-center">
        <img src={iconSrc} alt="globe icon" />
        {subHeading}
      </div>
      <p>{content}</p>
    </div>
  );
}
