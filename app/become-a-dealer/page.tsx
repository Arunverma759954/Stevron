"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function BecomeADealer() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      {/* Hero Section — offset for fixed navbar */}
      <section className="relative w-full aspect-[16/5] sm:aspect-[16/6] lg:aspect-[16/4.5] overflow-hidden">
        <Image
          src="/banner1.webp"
          alt="Become a Dealer"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      {/* Form Section */}
      <main className="flex-grow py-10 sm:py-14 lg:py-16 px-4 sm:px-6 flex justify-center bg-white">
        <div
          className="w-full bg-black shadow-2xl"
          style={{
            maxWidth: "764px",
            border: "0.5px solid #FFFFFF",
            borderRadius: "3px",
          }}
        >
          {/* Responsive inner padding */}
          <div className="p-5 sm:p-8 md:p-10">

            {/* Title box */}
            <div
              className="w-full bg-white flex items-center justify-center mb-5 sm:mb-6"
              style={{ borderRadius: "8px", minHeight: "46px", padding: "10px 12px" }}
            >
              <h2 className="font-orbitron text-black font-bold text-[11px] sm:text-[13px] md:text-[15px] tracking-[0.10em] sm:tracking-[0.12em] uppercase text-center leading-tight">
                CONVIÉRTASE EN UN DISTRIBUIDOR AUTORIZADO
              </h2>
            </div>

            {/* Subtitle */}
            Los productos Stevron solo se venden a través de tiendas de distribuidores autorizados
            <br className="hidden sm:block" />
            {" "}cuidadosamente seleccionados por nosotros.

            <form className="flex flex-col gap-4 sm:gap-5">

              {/* Company name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="......."
                  className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                  style={{ height: "34px", borderRadius: "3px" }}
                />
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                  Número de contacto
                </label>
                <div className="flex gap-2">
                  <div
                    className="flex items-center justify-center bg-white text-black text-[12px] font-inter font-normal flex-shrink-0"
                    style={{ width: "44px", height: "34px", borderRadius: "3px" }}
                  >
                    +91
                  </div>
                  <input
                    type="tel"
                    id="contactNumber"
                    placeholder="......."
                    className="flex-1 bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                    style={{ height: "34px", borderRadius: "3px" }}
                  />
                </div>
              </div>

              {/* E-mail */}
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="......."
                  className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                  style={{ height: "34px", borderRadius: "3px" }}
                />
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                  Dirección
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="......."
                  className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                  style={{ height: "34px", borderRadius: "3px" }}
                />
              </div>

              {/* Postal code & City — stacks on xs, side by side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                    Código postal
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    placeholder="......."
                    className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                    style={{ height: "34px", borderRadius: "3px" }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="......."
                    className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                    style={{ height: "34px", borderRadius: "3px" }}
                  />
                </div>
              </div>

              {/* Country */}
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                  País
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="......."
                  className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                  style={{ height: "34px", borderRadius: "3px" }}
                />
              </div>

              {/* Current brands */}
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[12px] sm:text-[13px] text-white font-normal">
                  Marcas actuales
                </label>
                <input
                  type="text"
                  id="currentBrands"
                  placeholder="......."
                  className="w-full bg-white text-black text-[12px] px-3 outline-none font-inter placeholder:text-[#999]"
                  style={{ height: "34px", borderRadius: "3px" }}
                />
              </div>

              {/* Custom Checkbox + Privacy text */}
              <div className="flex items-start gap-2.5 sm:gap-3 mt-1">
                <div className="relative flex-shrink-0" style={{ marginTop: "2px" }}>
                  <input
                    type="checkbox"
                    id="privacy"
                    className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full h-full"
                  />
                  <div
                    style={{
                      width: "13px",
                      height: "13px",
                      borderRadius: "2px",
                      border: "0.5px solid #FFFFFF",
                      backgroundColor: "#6D6D6D",
                    }}
                  />
                </div>
                <label
                  htmlFor="privacy"
                  className="font-inter text-[10px] sm:text-[11px] text-white leading-relaxed cursor-pointer select-none"
                  style={{ fontWeight: 300 }}
                >
                  Usted comprende que cuando hace clic en enviar, Stevron Tools AB (publ.) y sus empresas afiliadas utilizarán sus datos personales para responderle. Siempre utilizaremos sus datos personales de acuerdo con nuestro Aviso de privacidad. Encontrará más información sobre cómo procesamos sus datos, con quién podemos compartirlos, qué derechos tiene y más detalles de contacto con nosotros en el Aviso de privacidad. Puede retirar su consentimiento a nuestro boletín en cualquier momento haciendo clic en el botón de cancelar suscripción en cualquier comunicación que reciba de nosotros o poniéndose en contacto con nosotros como se establece en el Aviso de privacidad.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#94A034] text-white font-orbitron font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all hover:bg-[#7d8a2c] mt-2"
                style={{ height: "46px", borderRadius: "4px", fontSize: "13px" }}
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
