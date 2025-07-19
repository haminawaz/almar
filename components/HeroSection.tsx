import { MoveRight, Plus } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/hero.png')`,
      }}
    >
      <div className="absolute bottom-10 left-5 md:left-10 z-10 text-white px-4">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4">
          ALMAR - Powering Precision.
          <br /> Delivering Performance.
        </h1>
        <p className="text-xs md:text-xs lg:text-sm mb-6 opacity-90">
          A family of autonomous systems, produced by ALMAR, that provide
          integrated, <br /> persistent awareness and security across land, sea
          and air, all at the tactical edge.
        </p>
        <button className="group bg-transparent text-white py-2 rounded-sm font-medium text-xl inline-flex items-center">
          Learn more
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
    </section>
  );
}
