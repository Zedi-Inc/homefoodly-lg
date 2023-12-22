import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
// import { isValid, z } from "zod";
import { useNavigate } from "react-router-dom";
import CountrySelect from "react-simple-country-select";
import countries from "../countries.json";
import { arrowLeftIcon } from "../assets/img";
import { Link } from "react-router-dom";

// import ReactFlagsSelect from "react-flags-select";

export default function Form() {
  const [selected, setSelected] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  const navigate = useNavigate();
  const requiredErrorMsg = "This field is required";
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    // resolver: zodResolver(schema),
    mode: "all",
  });
  console.log(errors);

  const onSubmitStep1 = async (data) => {
    console.log("Step 1 submitted:", data);
    setFormData(data);
    setStep(2);
  };

  const onSubmitStep2 = async (data) => {
    const mergedData = { ...formData, ...data };
    console.log(mergedData);
    const baseId = "appAEMpGfMUQgBnys";
    const tableId = "tbltWtBHujUl5FpaL";
    const AUTH_KEY = "keykO1OzSeZMBcoGC";
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${baseId}/${tableId}`,
        {
          method: "POST",
          body: JSON.stringify({ fields: mergedData }),
          headers: {
            Authorization: `Bearer ${AUTH_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        reset();
        navigate("/success");
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error.message);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={
          step === 1 ? handleSubmit(onSubmitStep1) : handleSubmit(onSubmitStep2)
        }
        className="boxShadow bg-white relative w-full lg:max-w-[654px] mx-auto border-black p-4 md:p-[40px] flex flex-col gap-6 py-10 mt-4 rounded-3xl"
      >
        <div className="flex justify-between">
          <div className="flex gap-2">
            {/* <Link
              to={"/"}
              className={`w-8 items-center ${step === 1 ? "hidden" : "block"}`}
            >
              <img src={arrowLeftIcon} alt="" />
            </Link> */}
            <h4 className="font-satoshi-bold text-xl leading-8">
              Vendor Registration Form
            </h4>
          </div>
          <p className="text-[#8A8F99]">
            Page{" "}
            <span className="text-[#51BA65]">{step === 1 ? "1" : "2"}</span> of{" "}
            <span>2</span>
          </p>
        </div>

        {step === 1 && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#8A8F99]" htmlFor="businessName">
                Business Name
              </label>
              <input
                className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] text-[#8A8F99] font-normal"
                type="text"
                id="businessName"
                {...register("businessName", { required: requiredErrorMsg })}
                placeholder="Enix Grocery"
              />
              {errors.businessName && (
                <p className="text-red-600 text-xs">{`${errors.businessName?.message}`}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#8A8F99]" htmlFor="contactPerson">
                Contact Person
              </label>
              <input
                className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] text-[#8A8F99] font-normal"
                type="text"
                id="contactPerson"
                {...register("contactPerson", { required: requiredErrorMsg })}
                placeholder="John Doe"
              />
              {errors.contactPerson && (
                <p className="text-red-600 text-xs">{`${errors.contactPerson?.message}`}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#8A8F99]" htmlFor="email">
                Email
              </label>
              <input
                className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] text-[#8A8F99] font-normal"
                type="email"
                id="email"
                {...register("email", { required: requiredErrorMsg })}
                placeholder="johndoe@example.com"
              />
              {errors.email && (
                <p className="text-red-600 text-xs">{`${errors.email?.message}`}</p>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-[#8A8F99]" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <PhoneInput
                  className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] text-[#8A8F99] font-normal"
                  id="phoneNumber"
                  name="phoneNumber"
                  control={control}
                  international={true}
                  defaultCountry="NG"
                  placeholder="+1 234 567 890"
                  minlength="10"
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-red-600 text-xs">{requiredErrorMsg}</p>
                )}
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="text-xs text-[#8A8F99]" htmlFor="country">
                  Country of Operation
                </label>
                <select
                  name="country"
                  id="country"
                  {...register("country", { required: requiredErrorMsg })}
                  className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] text-[#8A8F99] font-normal"
                >
                  <option value="">Select a country</option>
                  {countries.map((data) => {
                    return (
                        <option value={data?.name} key={data?.cca2}>{data?.name}</option>
                    );
                  })}
                </select>
                {/* <CountrySelect
                  className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] text-[#8A8F99] font-normal"
                  option={({ cca2, flag, name, code }) => (
                    <option value={name} key={cca2}>
                      {`${name}`}
                    </option>
                  )}
                  required
                  name="country"
                /> */}
                {errors.country && (
                  <p className="text-red-600 text-xs">{`${requiredErrorMsg}`}</p>
                )}
              </div>
            </div>

            <div className="mt-3">
              <button
                type="submit"
                className="bg-[#51BA65] w-full p-4 text-white font-satoshi-bold rounded-[24px]"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && formData && (
          <div className="formPart2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#8A8F99]" htmlFor="aboutBusiness">
                Tell Us about your business and product
              </label>
              <textarea
                className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] w-full text-[#8A8F99] font-normal"
                id="aboutBusiness"
                rows="5"
                cols="66"
                spellCheck
                placeholder="Please type your answer here..."
                {...register("aboutBusiness", { required: requiredErrorMsg })}
              ></textarea>
              {errors.aboutBusiness && (
                <p className="text-red-600 text-xs">{`${errors.aboutBusiness?.message}`}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#8A8F99]" htmlFor="whyHomeFoodly">
                Why do you want to join HomeFoodly?
              </label>
              <textarea
                className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] w-full text-[#8A8F99] font-normal"
                id="whyHomeFoodly"
                rows="5"
                cols="66"
                spellCheck
                placeholder="Please type your answer here..."
                {...register("whyHomeFoodly", {
                  required: requiredErrorMsg,
                })}
              ></textarea>
              {errors.whyHomeFoodly && (
                <p className="text-red-600 text-xs">{`${errors.whyHomeFoodly?.message}`}</p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className="bg-[#51BA65] w-full p-4 text-white font-satoshi-bold rounded-[24px]"
              type="submit"
            >
              {isSubmitting ? "submitting..." : "Submit Response"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
