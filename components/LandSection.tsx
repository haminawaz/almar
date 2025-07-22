import { ArrowRight, MoveRight, Plus } from "lucide-react";

export default function LandSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden xxl:h-[100vh]">
      <video
        autoPlay
        loop 
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/land.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      <div className="relative z-10 text-white w-9/12">
        <div className="text-left pt-20 pb-44 md:pt-28 md:pb-56">
          <div className="text-lg md:text-[1.7rem] mb-6">Land</div>
          <h2 className="text-3xl sm:text-3xl md:text-5xl xxl:text-6xl font-semibold mb-6 leading-tight">
            Unmanned Ground <br /> Solutions
          </h2>
          <p className="text-xs md:text-lg xxl:text-[1.2rem] mb-8 max-w-xl opacity-90">
            Smart and resilient autonomous vehicles designed for tactical
            mobility, perimeter security, reconnaissance, and all-terrain
            logistics support.
          </p>
          <button className="group bg-transparent text-white text-sm sm:text-xl md:text-2xl xxl:text-3xl py-3 rounded-sm font-medium transition-all duration-300 inline-flex items-center">
            <span className="mr-2">Learn more about our land USV’s</span>
            <span className="block group-hover:hidden w- h-8 md:w-11 md:h-9 xl:w-13 xl:h-10 bg-[#2c3848]">
              <Plus className="w-full h-full" strokeWidth={1} />
            </span>
            <span className="hidden group-hover:block w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 transition-transform duration-300 bg-[#2c3848]">
              <ArrowRight className="w-full h-full" strokeWidth={1} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
