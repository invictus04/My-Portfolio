"use client";

import React from "react";
import { RainbowButton } from "./magicui/rainbow-button";

export function ContactMe() {

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append("access-key","3117f41b-aa55-4e7c-a7af-8cb9d763fed8");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        const result = await response.json();
          if (result.success) {
              console.log(result);
          }
    }

    return (
        <section className="py-20 min-h-screen">
                <h2 className="text-3xl font-bold mb-4 text-neutral-200 text-center">
                    Get in Touch With Me
                </h2>
                <form className="w-full max-w-md bg-transparent p-5 rounded-lg shadow-md mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-[#e7ecef] font-medium mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8364e8]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#e7ecef] font-medium mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8364e8]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#e7ecef] font-medium mb-2">
                            Message:
                        </label>
                        <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8364e8]" name="message"
                        ></textarea>
                    </div>
                    
                    <RainbowButton
                        size="lg"
                        variant="outline"
                        className="w-full py-2 px-4 text-neutral-300 transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer"
                        type="submit"
                    >
                        Send Message
                    </RainbowButton>
                </form>
            
                <footer>
                    <h1 className="text-center pt-13">Made with ❤️ By Raj vardhan Singh Gangwar</h1>
                </footer>
            
        </section>
    );
}

