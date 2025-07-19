"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-[#EFEFEF]">
      <div className="flex flex-col lg:flex-row mx-auto">
        <div className="w-9/12 md:w-7/12 max-w-lg lg:max-w-xl mx-auto">
          <div className="mb-8">
            <div className="text-[1.7rem] mb-6">Contact form</div>
            <h2 className="text-xl xs:text-3xl sm:text-4xl lg:text-[2.55rem] font-bold text-gray-900 mb-4">
              Contact ALMAR for demos
              <br />
              or support.
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full px-4 py-2 border-2 border-[#C0BDBD] text-black placeholder-black rounded-sm bg-transparent"
            />

            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Company"
              className="w-full px-4 py-2 border-2 border-[#C0BDBD] text-black placeholder-black rounded-sm bg-transparent"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-4 py-2 border-2 border-[#C0BDBD] text-black placeholder-black rounded-sm bg-transparent"
            />

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={8}
              placeholder="Message"
              className="w-full px-4 border-2 border-[#C0BDBD] text-black placeholder-black rounded-sm bg-transparent"
            />

            <button
              type="submit"
              className="bg-black text-white p-1 text-xl sm:text-2xl lg:text-3xl rounded-sm font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Request a demo
            </button>
          </form>
        </div>
        <div className="flex justify-end w-full lg:w-5/12">
          <Image
            src="/images/contact-form.png"
            alt="logo"
            className="object-contain"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
