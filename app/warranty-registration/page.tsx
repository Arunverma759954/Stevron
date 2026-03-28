"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function WarrantyRegistration() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white">
      {/* Hero Banner */}
      <section className="relative w-full aspect-[16/6] lg:aspect-[16/4.5] overflow-hidden">
        <Image
          src="/banner.webp"
          alt="Warranty Registration"
          fill
          priority
          className="object-cover"
        />

      </section>

      {/* Form Section */}
      <main className="flex-grow bg-[#050505] py-16 px-4 flex justify-center">
        {/* Outer form card — 764×764 from Figma */}
        <div className="w-full max-w-[764px] bg-black border border-[#FFFFFF]/10 rounded-[4px] p-8 md:p-10 shadow-2xl">

          {/* Title box — white rounded pill */}
          <div className="w-full bg-white rounded-[8px] flex items-center justify-center py-3 mb-8">
            <h2 className="font-orbitron text-black font-bold text-[13px] md:text-[15px] tracking-[0.15em] uppercase text-center">
              PRODUCT WARRANTY REGISTRATION FORM
            </h2>
          </div>

          <form className="flex flex-col gap-5">

            {/* Customer Name */}
            <div className="flex flex-col gap-1">
              <label className="font-inter text-[13px] text-white font-normal">
                Customer Name
              </label>
              {/* Input: 696.37 × 29.24px, radius 3px, white bg */}
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-[29px] bg-white text-black text-[12px] px-3 rounded-[3px] outline-none font-inter placeholder:text-[#999]"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-1">
              <label className="font-inter text-[13px] text-white font-normal">
                Contact Number
              </label>
              <div className="flex gap-2">
                {/* +91 prefix box — matches small square in Figma */}
                <div className="flex items-center justify-center w-[40px] h-[29px] bg-white text-black text-[12px] rounded-[3px] font-inter font-normal flex-shrink-0">
                  +91
                </div>
                <input
                  type="tel"
                  placeholder="Enter Your Contact Number"
                  className="flex-1 h-[29px] bg-white text-black text-[12px] px-3 rounded-[3px] outline-none font-inter placeholder:text-[#999]"
                />
              </div>
            </div>

            {/* Product Code */}
            <div className="flex flex-col gap-1">
              <label className="font-inter text-[13px] text-white font-normal">
                Product Code
              </label>
              <input
                type="text"
                placeholder="Select Product Code"
                className="w-full h-[29px] bg-white text-black text-[12px] px-3 rounded-[3px] outline-none font-inter placeholder:text-[#999]"
              />
            </div>

            {/* Product Serial Number */}
            <div className="flex flex-col gap-1">
              <label className="font-inter text-[13px] text-white font-normal">
                Product Serial Number
              </label>
              <input
                type="text"
                placeholder="Select Product Serial Number"
                className="w-full h-[29px] bg-white text-black text-[12px] px-3 rounded-[3px] outline-none font-inter placeholder:text-[#999]"
              />
            </div>

            {/* Purchase Proof Upload */}
            <div className="flex flex-col gap-1">
              <label className="font-inter text-[13px] text-white font-normal">
                Purchase Proof / Invoice / Invoice
              </label>
              <div
                className={`w-full h-[120px] border border-dashed rounded-[3px] flex flex-col items-center justify-center transition-colors cursor-pointer ${dragActive
                    ? "border-[#94A034] bg-[#94A034]/5"
                    : "border-white/25 hover:border-white/50"
                  }`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
              >
                <p className="font-inter text-[13px] text-white/80 text-center">
                  Drop your profile here or click to browse
                </p>
                <p className="font-inter text-[11px] text-white/40 mt-1">
                  JPEG, PNG, WEBP, PDF (max 5MB)
                </p>
              </div>
            </div>

            {/* Checkbox — 12.79×12.79, border 0.5px #FFFFFF, radius 2px, fill #6D6D6D */}
            <div className="flex items-start gap-3 mt-1">
              <div className="relative flex-shrink-0 mt-[1px]">
                <input
                  type="checkbox"
                  id="terms"
                  className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
                />
                <div
                  className="w-[13px] h-[13px] rounded-[2px] border-[0.5px] border-white"
                  style={{ backgroundColor: "#6D6D6D" }}
                />
              </div>
              <label htmlFor="terms" className="font-inter text-[11px] text-white leading-snug cursor-pointer">
                I agree to the{" "}
                <Link href="#" className="underline hover:text-[#94A034] transition-colors">
                  Terms and Conditions
                </Link>
                *
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-3 w-full h-[46px] bg-[#94A034] text-white font-orbitron font-bold text-[15px] tracking-[0.2em] rounded-[4px] uppercase transition-all hover:bg-[#7d8a2c]"
            >
              SUBMIT REGISTRATION
            </button>
          </form>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
