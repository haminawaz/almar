"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b-2">
      <div className="w-full overflow-hidden">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center px-4 lg:px-10 py-3 border-r-2 p">
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
            <div className="hidden lg:flex items-center px-6 py-1 lg:py-3 border-r-2 p">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors text-xs lg:text-sm font-medium"
              >
                AIR [+]
              </a>
            </div>
            <div className="hidden lg:flex items-center px-6 py-1 lg:py-3 border-r-2 p">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors text-xs lg:text-sm font-medium"
              >
                LAND [+]
              </a>
            </div>
            <div className="hidden lg:flex items-center px-6 py-1 lg:py-3 border-r-2 p">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors text-xs lg:text-sm font-medium"
              >
                MARINE [+]
              </a>
            </div>
          </div>

          <div className="hidden lg:flex">
            <div className="flex items-center px-6 py-3 border-x-2 p">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
              >
                About us
              </a>
            </div>
            <div className="flex items-center px-6 py-3 border-r-2 p">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
              >
                CONTACT
              </a>
            </div>
            <div className="flex items-center px-6 py-3 border-r-2 p">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
              >
                Follow us
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center px-4 lg:px-10 py-3 border-x-2 p">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={clsx(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
          >
            <div className="bg-white rounded-b-lg pt-4 shadow-md">
              <nav className="flex flex-col">
                {[
                  "AIR USV",
                  "LAND USV",
                  "NEWS / PR",
                  "COMPANY",
                  "CONTACT",
                  "TRAINING",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-black px-4 py-3 font-medium border-b border-[#C0BDBD] last:border-b-0"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
