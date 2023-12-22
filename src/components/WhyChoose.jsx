import React from "react";
import {
  airplaneIcon,
  cardIcon,
  communityIcon,
  globeIcon,
  twoFourIcon,
  userFriendlyIcon,
} from "../assets/img";
import WhyChooseCard from "./WhyChooseCard";

export default function WhyChoose() {
  const whyChooseData = [
    {
      id: 1,
      iconSrc: globeIcon,
      subHeading: "Global Reach",
      content:
        "Reach customers around the world who crave the authentic taste of African cuisine but lacking easy access to the home ingredients.",
    },
    {
      id: 2,
      iconSrc: airplaneIcon,
      subHeading: "Shipping Solutions",
      content:
        "Enjoy streamlined shipping services, ensuring timely deliveries to customers worldwide.",
    },
    {
      id: 3,
      iconSrc: cardIcon,
      subHeading: "Secure Transactions",
      content:
        "Our platform ensures secure and reliable transactions, giving you peace of mind.",
    },
    {
      id: 4,
      iconSrc: twoFourIcon,
      subHeading: "Marketing Support",
      content:
        "Benefit from our marketing initiatives to boost your visibility and sales.",
    },
    {
      id: 5,
      iconSrc: userFriendlyIcon,
      subHeading: "Easy Set-up",
      content:
        "Hassle-free registration process and user-friendly vendor dashboard for seamless management.",
    },
    {
      id: 6,
      iconSrc: communityIcon,
      subHeading: "Community Connection",
      content:
        "Join a vibrant community of vendors and customers passionate about African food ingredient.",
    },
  ];
  return (
    <section className="mt-16 mb-30 px-4 lg:px-16">
      <h2 className="font-satoshi-bold text-center text-[34px] xl:text-[40px] tracking-tighter leading-[48px] py-8">
        Why choose <span className="text-[#51BA65]">HomeFoodly?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {whyChooseData.map((data) => {
          return (
            <WhyChooseCard
              key={data?.id}
              iconSrc={data?.iconSrc}
              subHeading={data?.subHeading}
              content={data?.content}
            />
          );
        })}
      </div>
    </section>
  );
}
