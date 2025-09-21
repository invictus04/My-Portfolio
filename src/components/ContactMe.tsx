"use client";

import React from "react";
import { RainbowButton } from "./magicui/rainbow-button";

export function ContactMe() {
  return (
    <section className="py-16 sm:py-20 min-h-screen bg-black px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-neutral-200 text-center">
        Get in Touch With Me
      </h2>

      {/* Contact Form */}
      <form
        action="https://api.staticforms.xyz/submit"
        method="POST"
        className="w-full max-w-md sm:max-w-lg bg-transparent p-5 sm:p-8 rounded-lg shadow-md mx-auto"
      >
        <input
          type="hidden"
          name="apiKey"
          value="sf_g8e20fln9f79jh5hc50kh34c"
        />

        {/* Name */}
        <div className="mb-4">
          <label
            className="block text-[#e7ecef] font-medium mb-2 text-sm sm:text-base"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8364e8] text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-[#e7ecef] font-medium mb-2 text-sm sm:text-base"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8364e8] text-sm sm:text-base"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            className="block text-[#e7ecef] font-medium mb-2 text-sm sm:text-base"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8364e8] text-sm sm:text-base"
          ></textarea>
        </div>

        {/* Button */}
        <RainbowButton
          size="lg"
          variant="outline"
          className="w-full py-2 px-4 text-neutral-300 transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer text-sm sm:text-base"
          type="submit"
        >
          Send Message
        </RainbowButton>
      </form>

      {/* Footer */}
      <footer className="mt-12">
        <h1 className="text-center text-xs sm:text-sm md:text-base text-neutral-400">
          Made with ❤️ by <span className="font-semibold">Rajvardhan Singh Gangwar</span>
        </h1>
      </footer>
    </section>
  );
}
