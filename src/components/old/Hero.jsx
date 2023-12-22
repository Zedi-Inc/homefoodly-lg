import { girlImg, logoIcon } from "../assets/img";

export default function Hero() {
  return (
    <div className="w-full min-h-[50vh]">
      <div className="min-h-[50vh] lg:min-h-screen relative text-white bg-[url(../src/assets/img/ankara-design.png)] bg-cover">
        <div className="bg-black absolute top-0 w-full z-10 bg-opacity-40 backdrop-blur-sm pt-8 px-6 pb-8">
          <div className="flex gap-2 justify-center items-center lg:justify-start font-satoshi-bold lg:ml-10 text-2xl">
            <img src={logoIcon} alt="" />
            HomeFoodly
          </div>
          <div className="flex flex-col items-center justify-center lg:items-start lg:ml-[75px]">
            <h1 className="mt-8 ml-3 lg:ml-0 font-satoshi-bold text-4xl leading-10 max-w-xs">
              Coming to your screens soon! ⌛
            </h1>
            <p className="font-medium text-base mt-4 max-w-[400px] text-center lg:text-start">
              Join the waitlist to be notified when we’re live or you can sign
              up to be a seller
            </p>
          </div>
        </div>
        <div className="w-[125%] ml-[-10%]">
          <img src={girlImg} alt="" className="hidden lg:block w-full" />
        </div>
      </div>
    </div>
  );
}
