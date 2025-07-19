import { MoveRight, Plus } from "lucide-react";

export default function LandSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/land.png)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>

      <div className="relative z-10 text-white w-9/12">
        <div className="text-left pt-20 pb-44 md:pt-28 md:pb-56">
          <div className="text-lg md:text-[1.7rem] mb-6">Land</div>
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            Unmanned Ground <br /> Solutions
          </h2>
          <p className="text-xs md:text-lg mb-8 max-w-2xl opacity-90">
            Smart and resilient autonomous vehicles designed for tactical
            mobility, perimeter security, reconnaissance, and all-terrain
            logistics support.
          </p>
          <button className="group bg-transparent text-white text-sm sm:text-base md:text-xl py-3 rounded-sm font-medium transition-all duration-300 inline-flex items-center">
            Learn more about our land USV’s
            <span className="ml-2 w-5 h-5 flex items-center justify-center">
              <span className="block group-hover:hidden">
                <Plus />
              </span>

              <span className="hidden group-hover:block transition-transform duration-300">
                <MoveRight />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
