import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import ReactCountryFlagsSelect from "react-country-flags-select";
const schema = z.object({
  businessName: z
    .string({
      invalid_type_error: "Business name is required",
    })
    .max(70, "Business Name must not exceed 70 characters"),
  contactPerson: z
    .string({
      invalid_type_error: "This feild is required",
    })
    .max(70, "Contact Name must not exceed 70 characters"),
  email: z.string().email(),
  phoneNumber: z
    .string({
      invalid_type_error: "Phone number is required",
    })
    .max(16, "Enter a valid phone number"),
  country: z.string({
    invalid_type_error: "This feild is required",
    aboutBusiness: z
      .string({
        invalid_type_error: "This feild is required",
      })
      .max(200, "Not more than 200 words is required"),
    whyHomeFoodly: z
      .string({
        invalid_type_error: "This feild is required",
      })
      .max(200, "Not more than 200 words is required"),
  }),
});

export default function Form() {
  const [selected, setSelected] = useState("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmitStep1 = async (data) => {
    console.log("Step 1 submitted:", data);
    setFormData(data);
    setStep(2);
  };

  const onSubmitStep2 = async (data) => {
    const mergedData = { ...formData, ...data };
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
        className="boxShadow bg-white relative w-full lg:max-w-[654px] mx-auto border-black p-[40px] flex flex-col gap-6 py-10 mt-4 rounded-3xl"
      >
        <div className="flex justify-between">
          <h4 className="font-satoshi-bold text-xl leading-8">
            Vendor Registration Form
          </h4>
          <p className="text-[#8A8F99]">
            Page <span className="text-[#51BA65]">1</span> of <span>2</span>
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#8A8F99]" htmlFor="businessName">
                Business Name
              </label>
              <input
                className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] text-[#8A8F99] font-normal"
                type="text"
                {...register("businessName")}
                name="businessName"
                id="businessName"
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
                {...register("contactPerson")}
                name="contactPerson"
                id="contactPerson"
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
                {...register("email")}
                name="email"
                id="email"
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
                  name="phoneNumber"
                  id="phoneNumber"
                  control={control}
                  international={true}
                  defaultCountry="NG"
                  placeholder="+1 234 567 890"
                />
                {errors.phoneNumber && (
                  <p className="text-red-600 text-xs">{`${errors.phoneNumber?.message}`}</p>
                )}
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="text-xs text-[#8A8F99]" htmlFor="country">
                  Country of Operation
                </label>
                <ReactCountryFlagsSelect
                  id="country"
                  name="country"
                  selected={selected}
                  searchPlaceholder="Search Country"
                  selectPlaceholder="Select Country"
                  classes={{
                    container:
                      "my-custom-container-style flex items-center p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] text-[#8A8F99] font-normal",
                    clearIcon: false,
                  }}
                  onSelect={(code) => setSelected(code)}
                />
                {errors.country && (
                  <p className="text-red-600 text-xs">{`${errors.country?.message}`}</p>
                )}
              </div>
            </div>
            {step === 1 && (
              <div className="mt-3">
                <button
                  className="bg-[#51BA65] w-full p-4 text-white font-satoshi-bold rounded-[24px]"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
        {step === 1 && (
          <div className="formPart2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#8A8F99]" htmlFor="aboutBusiness">
                Tell Us about your business and product
              </label>
              <textarea
                className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none outline-1 focus:outline-[#51BA65] w-full text-[#8A8F99] font-normal"
                {...register("aboutBusiness")}
                name="aboutBusiness"
                id="aboutBusiness"
                rows="5"
                cols="66"
                spellCheck
              >
                Please type your answer here...
              </textarea>
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
                {...register("whyHomeFoodly")}
                name="whyHomeFoodly"
                id="whyHomeFoodly"
                rows="5"
                cols="66"
                spellCheck
              >
                Please type your answer here...
              </textarea>
              {errors.aboutBusiness && (
                <p className="text-red-600 text-xs">{`${errors.aboutBusiness?.message}`}</p>
              )}
            </div>
            <button
              disabled={isSubmitting}
              className="bg-[#51BA65] w-full p-4 text-white font-satoshi-bold rounded-[24px]"
              type="submit"
            >
              Submit Response
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
