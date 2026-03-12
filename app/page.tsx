import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[700px] w-full overflow-hidden bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home.webp"
            alt="STEVRON Hero"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay to ensure text readability if needed */}
          <div className="absolute inset-0 " />
        </div>

        {/* Hero Content - Only interactive elements or missing text */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 lg:px-12">
          {/* We keep the container for potential interactive elements, 
              but remove redundant text that overflows from the image itself. */}
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="bg-white pt-8 pb-0 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          {/* Buttons Aligned to the Center */}
          <div className="flex justify-center gap-2">
            <button className="flex h-[38px] px-8 items-center justify-center rounded-[5px] bg-[#000000] font-orbitron text-[14px] font-normal text-white transition-opacity hover:opacity-90">
              Explore Products
            </button>
            <button className="flex h-[38px] px-8 items-center justify-center rounded-[5px] bg-[#000000] font-orbitron text-[14px] font-normal text-white transition-opacity hover:opacity-90">
              Become Distributor
            </button>
          </div>

          {/* Wide Horizontal Line: Span full container width, 3px height, #A7A7A7 color */}
          <div className="mt-8 mx-auto h-[3px] w-full bg-[#A7A7A7]" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white pt-0 pb-12 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative h-[446px] w-full overflow-hidden rounded-xl">
            <Image
              src="/about.webp"
              alt="About STEVRON"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Bottom Divider */}
          <div className="mt-[15px] mx-auto h-[3px] w-full bg-[#A7A7A7]" />
        </div>
      </section>

      {/* Tool Categories Section */}
      <section className="bg-white pt-4 pb-12 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] flex flex-col items-center">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-14">
            {[
              { title: "DC TOOLS", image: "/1.webp" },
              { title: "AC TOOLS", image: "/2.webjp" },
              { title: "ACCESSORIES", image: "/3.webp" },
              { title: "HAND TOOLS", image: "/4.webp" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex h-[305px] w-[242px] flex-col overflow-hidden border border-[#353535] rounded-t-[11px]"
              >
                {/* Header Box */}
                <div className="flex h-[46px] w-full items-center justify-center bg-[#353535]">
                  <span className="font-orbitron text-[14px] font-normal text-white">
                    {item.title}
                  </span>
                </div>
                {/* Image Container */}
                <div className="relative flex-grow bg-white p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Same layout, added larger margin-top for gap */}
          <div className="flex flex-wrap justify-center gap-14 mt-10">
            {[
              { title: "DC TOOLS", image: "/1.webp" },
              { title: "AC TOOLS", image: "/2.webjp" },
              { title: "ACCESSORIES", image: "/3.webp" },
              { title: "HAND TOOLS", image: "/4.webp" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex h-[305px] w-[242px] flex-col overflow-hidden border border-[#353535] rounded-t-[11px]"
              >
                {/* Header Box */}
                <div className="flex h-[46px] w-full items-center justify-center bg-[#353535]">
                  <span className="font-orbitron text-[14px] font-normal text-white">
                    {item.title}
                  </span>
                </div>
                {/* Image Container */}
                <div className="relative flex-grow bg-white p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
