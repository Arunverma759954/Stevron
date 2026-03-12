import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex h-[80px] w-full items-center justify-center border-b border-white/30 bg-[#050505] px-4">
      <div className="flex w-full max-w-[1440px] items-center px-6 lg:px-12">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Image
            src="/Logo.webp"
            alt="STEVRON Logo"
            width={220}
            height={48}
            priority
            className="h-auto"
          />
        </div>

        {/* Navigation Links - Positioned based on Figma (Approx 770px from left) */}
        <div className="ml-auto hidden items-center gap-8 md:flex lg:gap-12">
          <Link
            href="/"
            className="font-orbitron text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="font-orbitron text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="font-orbitron text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="font-orbitron text-[17.37px] font-normal tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Contact Us
          </Link>
          
          {/* Globe Icon */}
          <button className="ml-4 text-white hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-globe"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
