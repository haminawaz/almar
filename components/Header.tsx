"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b-2">
      <div className="w-full overflow-hidden">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center px-4 lg:px-10 py-5 border-r-2">
              <div className="text-white font-bold text-xl lg:text-2xl w-[100px] lg:w-[200px]">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  className="object-cover"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
            {["Air [+]", "Land [+]", "Marine [+]"].map((item) => (
              <div
                key={item}
                className="hidden lg:flex items-center px-6 py-3 border-r-2"
              >
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors text-sm xl:text-base font-medium"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* Desktop right nav */}
          <div className="hidden lg:flex">
            {["About us", "Contact", "Follow us"].map((item) => (
              <div
                key={item}
                className="flex items-center px-6 py-3 border-r-2 first:border-x-2"
              >
                <a
                  href={item === "Contact" ? "#contact" : "#"}
                  className="text-white hover:text-blue-200 transition-colors text-sm xl:text-base font-medium"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          <div className="lg:hidden flex items-center px-4 py-3 border-x-2">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed lg:hidden inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-background z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <span className="text-lg font-bold">ALMAR</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col mt-4">
          {[
            "Air [+]",
            "Land [+]",
            "Marine [+]",
            "About us",
            "Contact",
            "Follow us",
          ].map((item) => (
            <a
              key={item}
              href={item === "Contact" ? ("#contact") : "#"}
              onClick={() => setIsMenuOpen(false)}
              className="text-black px-4 py-3 font-medium hover:bg-[#e0e0e0] border-b border-[#C0BDBD]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
