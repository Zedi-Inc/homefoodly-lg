import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Info from "../components/Info";
import Form from "../components/Form";
import WhyChoose from "../components/WhyChoose";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <div className="bg-[#51BA65] bg-opacity-10 flex flex-col lg:flex-row lg:px-16 pt-16 pb-8 lg:pb-0" id="form">
        <Info />
        <Form />
      </div>
        <WhyChoose />
        <JoinUs />
        <Footer />
    </div>
  );
}
