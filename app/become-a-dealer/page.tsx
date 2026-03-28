"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function BecomeADealer() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full aspect-[16/6] lg:aspect-[16/4.5] overflow-hidden">
        <Image
          src="/banner1.webp"
          alt="Become a Dealer"
          fill
          priority
          className="object-cover"
        />

      </section>

      {/* Form Section */}
      <main className="flex-grow py-16 px-4 flex justify-center bg-[#050505]">
        {/*
          Figma: Dealer Form — Width 764px, Height 943px
          Border: Mixed #FFFFFF
        */}
        <div
          className="w-full bg-black shadow-2xl"
          style={{
            maxWidth: "764px",
            border: "0.5px solid #FFFFFF",
            borderRadius: "3px",
            padding: "32px 40px",
          }}
        >
          {/* Title box */}
          <div
            className="w-full bg-white flex items-center justify-center mb-6"
            style={{ borderRadius: "8px", height: "46px" }}
          >
            <h2 className="font-orbitron text-black font-bold text-[13px] md:text-[15px] tracking-[0.12em] uppercase text-center">
              BECOME AN AUTHORISED DEALER
            </h2>
          </div>

          {/* Subtitle */}
          <p className="font-inter text-[#FFFFFF] text-[13px] font-normal text-center mb-10 leading-snug">
            Stevron products are only sold via authorised dealer<br />
            shops that are carefully selected by us.
          </p>

          <form className="flex flex-col" style={{ gap: "20px" }}>

            {/* Company name */}
            <div className="flex flex-col" style={{ gap: "6px" }}>
              <label className="font-inter text-[13px] text-white font-normal">
                Company name
              </label>
              <input
                type="text"
                id="companyName"
                placeholder="......."
                className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                style={{ height: "29px", borderRadius: "3px" }}
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col" style={{ gap: "6px" }}>
              <label className="font-inter text-[13px] text-white font-normal">
                Contact Number
              </label>
              <div className="flex" style={{ gap: "8px" }}>
                <div
                  className="flex items-center justify-center bg-white text-black text-[12px] font-inter font-normal flex-shrink-0"
                  style={{ width: "40px", height: "29px", borderRadius: "3px" }}
                >
                  +91
                </div>
                <input
                  type="tel"
                  id="contactNumber"
                  placeholder="......."
                  className="flex-1 bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                  style={{ height: "29px", borderRadius: "3px" }}
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="flex flex-col" style={{ gap: "6px" }}>
              <label className="font-inter text-[13px] text-white font-normal">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="......."
                className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                style={{ height: "29px", borderRadius: "3px" }}
              />
            </div>

            {/* Address */}
            <div className="flex flex-col" style={{ gap: "6px" }}>
              <label className="font-inter text-[13px] text-white font-normal">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="......."
                className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                style={{ height: "29px", borderRadius: "3px" }}
              />
            </div>

            {/* Postal code & City — side by side */}
            <div className="grid grid-cols-2" style={{ gap: "16px" }}>
              <div className="flex flex-col" style={{ gap: "6px" }}>
                <label className="font-inter text-[13px] text-white font-normal">
                  Postal code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  placeholder="......."
                  className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                  style={{ height: "29px", borderRadius: "3px" }}
                />
              </div>
              <div className="flex flex-col" style={{ gap: "6px" }}>
                <label className="font-inter text-[13px] text-white font-normal">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="......."
                  className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                  style={{ height: "29px", borderRadius: "3px" }}
                />
              </div>
            </div>

            {/* Country */}
            <div className="flex flex-col" style={{ gap: "6px" }}>
              <label className="font-inter text-[13px] text-white font-normal">
                Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="......."
                className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                style={{ height: "29px", borderRadius: "3px" }}
              />
            </div>

            {/* Current brands */}
            <div className="flex flex-col" style={{ gap: "6px" }}>
              <label className="font-inter text-[13px] text-white font-normal">
                Current brands
              </label>
              <input
                type="text"
                id="currentBrands"
                placeholder="......."
                className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                style={{ height: "29px", borderRadius: "3px" }}
              />
            </div>

            {/* Custom Checkbox + Privacy text */}
            <div className="flex items-start" style={{ gap: "10px", marginTop: "8px" }}>
              <div className="relative flex-shrink-0" style={{ marginTop: "2px" }}>
                <input
                  type="checkbox"
                  id="privacy"
                  className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
                />
                {/* Figma: 12.79×12.79, border 0.5px #FFFFFF, radius 2px, fill #6D6D6D */}
                <div
                  style={{
                    width: "12.79px",
                    height: "12.79px",
                    borderRadius: "2px",
                    border: "0.5px solid #FFFFFF",
                    backgroundColor: "#6D6D6D",
                  }}
                />
              </div>
              <label htmlFor="privacy" className="font-inter text-[10px] text-white leading-relaxed cursor-pointer select-none" style={{ fontWeight: 300 }}>
                You understand that when you click on submit, Stevron Tools AB (publ.) and its affiliate companies will use your personal data to respond to you. We will always use your personal data in accordance with our Privacy Notice. You will find more information about how we process your data, who we may share it with, what rights you have and further contact details to us in the Privacy Notice. You can withdraw your consent to our newsletter at any time by clicking the unsubscribe button in any communication you receive from us or by contacting us as set out in the Privacy Notice.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#94A034] text-white font-orbitron font-bold tracking-[0.2em] uppercase transition-all hover:bg-[#7d8a2c]"
              style={{ height: "46px", borderRadius: "4px", fontSize: "15px", marginTop: "8px" }}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
