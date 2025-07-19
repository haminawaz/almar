import { ArrowRight, Plus } from "lucide-react";

export default function AirSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden mb-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/air.png)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      <div className="relative z-10 text-white w-5/6">
        <div className="text-left pt-20 pb-44 md:pt-28 md:pb-56">
          <div className="text-[1.7rem] xxl:text-4xl mb-6 font-normal">Air</div>
          <h2 className="text-3xl sm:text-3xl md:text-5xl xxl:text-6xl font-semibold mb-6 leading-tight">
            Autonomous <br /> Aerial Systems
          </h2>
          <p className="text-xs md:text-lg xxl:text-2xl mb-8 max-w-xl opacity-90">
            High-performance unmanned aircraft for surveillance, defense, and
            rapid deployment across any terrain.
          </p>
          <button className="group bg-transparent text-white text-sm sm:text-xl md:text-2xl xxl:text-3xl py-3 rounded-sm font-medium transition-all duration-300 inline-flex items-center">
            <span className="mr-2">Learn more about our Aerial Systems</span>
            <span className="block group-hover:hidden w- h-8 md:w-11 md:h-9 xl:w-13 xl:h-10">
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
