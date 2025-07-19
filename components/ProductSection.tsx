import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";

export default function ProductSection() {
  return (
    <section className="py-16 md:py-24 bg-[#EFEFEF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:grid-flow-col-dense">
          <div className="space-y-6 text-[#2C3848]">
            <div className="md:xl text-2xl font-medium tracking-wider uppercase">
              Lancia M-08 USV
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight">
              The Ultimate Maritime Autonomous Vehicle for Security & Transport
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              High-speed, high-capacity unmanned vessel for long-range
              operations, capable of executing maritime territorial and ensuring
              mission effectiveness in defense and civilian applications.
            </p>
            <button className="group py-3 rounded-sm font-semibold mdLtext-xl text-2xl transition-all duration-300 flex items-center text-gray-900">
              <span className="mr-3">Learn more about our Lancia M-08 USV</span>
              <span className="block group-hover:hidden w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 bg-[#2c3848]">
                <Plus className="w-full h-full" color="#fff" />
              </span>
              <span className="hidden group-hover:block w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10 transition-transform duration-300 bg-[#2c3848]">
                <ArrowRight className="w-full h-full" color="#fff" />
              </span>
            </button>
          </div>

          <div className="flex items-ceter justify-center">
            <div className="relative flex items-ceter justify-center w-[200px] md:w-[400px]">
              <Image
                src="/images/learn-more.png"
                alt="learn-more"
                className="object-cover"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
