import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import PhoneInput from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  userType: z.string(),
  name: z
    .string({
      invalid_type_error: "Name is required",
    })
    .max(70, "Name must not exceed 70 characters"),
  phoneNumber: z
    .string({
      invalid_type_error: "Phone number is required",
    })
    .max(16, "Enter a valid phone number"),
  email: z.string().email(),
});

export default function Form() {
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

  const onSubmit = async (data) => {
    const baseId = "appAEMpGfMUQgBnys";
    const tableId = "tbltWtBHujUl5FpaL";
    const AUTH_KEY = "keykO1OzSeZMBcoGC";
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${baseId}/${tableId}`,
        {
          method: "POST",
          body: JSON.stringify({ fields: data }),
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
        onSubmit={handleSubmit(onSubmit)}
        className="boxShadow bg-white mt-[-10%] lg:mt-24 relative w-full lg:max-w-[550px] mx-auto border-black p-4 flex flex-col gap-6 py-10 px-6 rounded-3xl"
      >
        <p className="font-satoshi-bold text-xl leading-8">Join Waitlist</p>
        <div className="flex flex-col gap-6">
          <p className="text-xs text-[#8A8F99]">What are you signing up as?</p>
          <div className="flex justify-around">
            <label className="radioLabel text-base" htmlFor="vendor">
              <input
                className="radioInput opacity-0"
                {...register("userType")}
                type="radio"
                defaultChecked
                id="vendor"
                name="userType"
                value="vendor"
              />
              <span className="checkmark after:content-['']"></span>Vendor
            </label>
            <label className="radioLabel text-base" htmlFor="consumer">
              <input
                className="radioInput opacity-0"
                {...register("userType")}
                type="radio"
                id="consumer"
                name="userType"
                value="consumer"
              />
              <span className="checkmark after:content-['']"></span>Consumer
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#8A8F99]" htmlFor="name">
              Name
            </label>
            <input
              className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none border-[#EAE7F1] text-[#8A8F99] font-normal"
              type="text"
              {...register("name")}
              name="name"
              id="name"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-600 text-xs">{`${errors.name?.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#8A8F99]" htmlFor="phoneNumber">
              Phone Number
            </label>
            <PhoneInput
              className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none border-[#EAE7F1] text-[#8A8F99] font-normal"
              name="phoneNumber"
              // {...register("phoneNumber")}
              id="phoneNumber"
              control={control}
              international={true}
              defaultCountry="NG"
              countryCallingCodeEditable={true}
              placeholder="+1 234 567 890"
            />
            {errors.phoneNumber && (
              <p className="text-red-600 text-xs">{`${errors.phoneNumber?.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#8A8F99]" htmlFor="email">
              Email
            </label>
            <input
              className="items-start p-4 bg-[#F2F2F5] rounded-3xl outline-none border-[#EAE7F1] text-[#8A8F99] font-normal"
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
          <div className="mt-3">
            <button
              disabled={isSubmitting}
              className="bg-[#51BA65] w-full p-4 text-white font-satoshi-bold rounded-[24px]"
              type="submit"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
