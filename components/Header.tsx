// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import clsx from "clsx";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b-2">
//       <div className="w-full overflow-hidden">
//         <div className="flex justify-between">
//           <div className="flex">
//             <div className="flex items-center px-4 lg:px-10 py-3 border-r-2 p">
//               <div className="text-white font-bold text-xl lg:text-2xl w-[100px] lg:w-[200px]">
//                 <Image
//                   src="/logo.svg"
//                   alt="logo"
//                   className="object-cover"
//                   width={200}
//                   height={200}
//                   priority
//                 />
//               </div>
//             </div>
//             <div className="hidden lg:flex items-center px-6 py-1 lg:py-3 border-r-2 p">
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-200 transition-colors text-xs lg:text-sm font-medium"
//               >
//                 AIR [+]
//               </a>
//             </div>
//             <div className="hidden lg:flex items-center px-6 py-1 lg:py-3 border-r-2 p">
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-200 transition-colors text-xs lg:text-sm font-medium"
//               >
//                 LAND [+]
//               </a>
//             </div>
//             <div className="hidden lg:flex items-center px-6 py-1 lg:py-3 border-r-2 p">
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-200 transition-colors text-xs lg:text-sm font-medium"
//               >
//                 MARINE [+]
//               </a>
//             </div>
//           </div>

//           <div className="hidden lg:flex">
//             <div className="flex items-center px-6 py-3 border-x-2 p">
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
//               >
//                 About us
//               </a>
//             </div>
//             <div className="flex items-center px-6 py-3 border-r-2 p">
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
//               >
//                 CONTACT
//               </a>
//             </div>
//             <div className="flex items-center px-6 py-3 border-r-2 p">
//               <a
//                 href="#"
//                 className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
//               >
//                 Follow us
//               </a>
//             </div>
//           </div>

//           <div className="lg:hidden flex items-center px-4 lg:px-10 py-3 border-x-2 p">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div
//             className={clsx(
//             "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
//             isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           )}
//           >
//             <div className="bg-white rounded-b-lg pt-4 shadow-md">
//               <nav className="flex flex-col">
//                 {[
//                   "AIR USV",
//                   "LAND USV",
//                   "NEWS / PR",
//                   "COMPANY",
//                   "CONTACT",
//                   "TRAINING",
//                 ].map((item) => (
//                   <a
//                     key={item}
//                     href="#"
//                     className="text-black px-4 py-3 font-medium border-b border-[#C0BDBD] last:border-b-0"
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

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
          {/* Logo and left nav */}
          <div className="flex">
            <div className="flex items-center px-4 lg:px-10 py-3 border-r-2">
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
            {["AIR [+]", "LAND [+]", "MARINE [+]"].map((item) => (
              <div
                key={item}
                className="hidden lg:flex items-center px-6 py-3 border-r-2"
              >
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors text-xs lg:text-sm font-medium"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* Desktop right nav */}
          <div className="hidden lg:flex">
            {["About us", "CONTACT", "Follow us"].map((item) => (
              <div
                key={item}
                className="flex items-center px-6 py-3 border-r-2 first:border-x-2"
              >
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors text-sm font-medium"
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
