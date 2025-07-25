import Image from "next/image";

export default function CompanySection() {
  return (
    <section className="py-12 md:py-20 lg:pt-36 lg:pb-20">
      <div className="mx-auto w-full px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center items-center h-full gap-6 lg:gap-0 lg:justify-evenly">
            <div className="flex items-center">
              <Image
                src="/images/standard-logo.png"
                alt="logo"
                className="object-cover"
                width={100}
                height={100}
                priority
              />
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl xl:text-4xl xxl:text-5xl font-bold text-gray-900 leading-tight">
              Autonomy. Power.
              <br />
              Precision. {"That's"} the
              <br />
              ALMAR standard.
            </h2>
          </div>

          <div className="h-full flex items-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-[0.73rem] xl:text-lg xxl:text-2xl text-gray-600 leading-relaxed">
              At ALMAR, we pioneer the future of autonomous mobility across air,
              land, and sea. Our mission is to develop cutting-edge Unmanned
              Surface Vehicles (USVs) and autonomous systems that empower
              defense forces, commercial operators, and individuals to operate
              with greater precision, safety, and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
