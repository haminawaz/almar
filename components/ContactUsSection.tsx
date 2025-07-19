import { MoveRight, Plus } from "lucide-react";

export default function ContactUsSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/contact-us.png)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Contact us
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Reach out to us to discover how we can work together to optimize and
            improve your operations.
          </p>
          <button className="group bg-transparent border-2 border-white text-white py-2 rounded-sm font-medium text-xl px-6 inline-flex items-center">
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
      </div>
    </section>
  );
}
