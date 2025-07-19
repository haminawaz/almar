import { ArrowRight, Plus } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-10 left-5 md:left-10 z-10 text-white px-4">
        <h1 className="text-xl sm:text-3xl lg:4xl xl:text-5xl font-bold mb-8">
          ALMAR - Powering Precision.
          <br /> Delivering Performance.
        </h1>
        <p className="text-xs md:text-xs xl:text-lg mb-6 opacity-90">
          A family of autonomous systems, produced by ALMAR, that provide
          integrated, <br /> persistent awareness and security across land, sea
          and air, all at the tactical edge.
        </p>
        <button className="group bg-transparent text-white py-2 rounded-sm font-medium text-xl md:text-2xl xl:text-3xl inline-flex items-center">
          <span className="mr-3">Learn more</span>
          <span className="block group-hover:hidden w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10">
            <Plus className="w-full h-full" />
          </span>
          <span className="hidden group-hover:block w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 transition-transform duration-300 bg-[#2c3848]">
            <ArrowRight className="w-full h-full" />
          </span>
        </button>
      </div>
    </section>
  );
}
