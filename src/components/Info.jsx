import { girlImg, logoIcon } from "../assets/img";

export default function Info() {
  return (
    <div className="px-2 lg:px-[45px] lg:max-w-[50%]">
      <div className="">
        <h2 className="font-satoshi-bold text-center lg:text-left text-[34px] xl:text-[40px] lg:max-w-[80%] tracking-tighter leading-[48px]">
          Become a <span className="text-[#51BA65]">HomeFoodly</span> Vendor:
          Elevate your business 📈
        </h2>
        <p className="lg:max-w-[70%] text-center lg:text-left">
          We are seeking African food business owners to register and become a
          vendor on our platform in preparation for the launch in January This
          is the right platform to give your business the international exposure
          it’s been seeking.
        </p>
      </div>
      <div className="hidden lg:block w-[100%] ml-[-30px]">
        <img src={girlImg} alt="" className="lg:block w-full h-full" />
      </div>
    </div>
  );
}
