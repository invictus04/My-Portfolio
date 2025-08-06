"use client";

import React from "react";
import { RainbowButton } from "./magicui/rainbow-button";

export function ContactMe() {


    return (
        <section className="py-20 min-h-screen">
                <h2 className="text-3xl font-bold mb-4 text-neutral-200 text-center">
                    Get in Touch With Me
                </h2>
                <form action="https://api.staticforms.xyz/submit" method="POST" className="w-full max-w-md bg-transparent p-5 rounded-lg shadow-md mx-auto" >
                    <input type="hidden" name="apiKey" value="sf_g8e20fln9f79jh5hc50kh34c"/>
                    <div className="mb-4">
                        <label className="block text-[#e7ecef] font-medium mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8364e8]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#e7ecef] font-medium mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8364e8]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#e7ecef] font-medium mb-2" htmlFor="message">
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

