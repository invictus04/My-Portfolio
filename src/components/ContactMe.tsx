"use client";

import React, { useState } from "react";
import { RainbowButton } from "./magicui/rainbow-button";

export function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [showPopup, setShowPopup] = useState(false);

  const validateFields = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email address is invalid.";
    if (!message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    const newErrors = validateFields();

    if (Object.keys(newErrors).length === 0) {
    
      setShowPopup(true);

      
      setName("");
      setEmail("");
      setMessage("");


      setTimeout(() => setShowPopup(false), 3000);
    }
  };


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name && e.target.value.trim() !== "") {
      setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email && /\S+@\S+\.\S+/.test(e.target.value)) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (errors.message && e.target.value.trim() !== "") {
      setErrors((prev) => ({ ...prev, message: undefined }));
    }
  };

  return (
    <section className="py-16 sm:py-20 min-h-screen bg-black px-4 sm:px-6 lg:px-12 relative">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-neutral-200 text-center">
        Get in Touch With Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-lg bg-transparent p-5 sm:p-8 rounded-lg shadow-md mx-auto"
      >
  
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
            id="name"
            value={name}
            onChange={handleNameChange}
            className={`w-full px-3 py-2 rounded-md border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#8364e8] text-sm sm:text-base`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
          )}
        </div>

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
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full px-3 py-2 rounded-md border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#8364e8] text-sm sm:text-base`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
          )}
        </div>

      
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
            value={message}
            onChange={handleMessageChange}
            className={`w-full px-3 py-2 rounded-md border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#8364e8] text-sm sm:text-base`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <RainbowButton
          size="lg"
          variant="outline"
          className="w-full py-2 px-4 text-neutral-300 transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer text-sm sm:text-base"
          type="submit"
        >
          Send Message
        </RainbowButton>
      </form>


      {
      showPopup && 
      (
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-sm sm:text-base animate-bounce">
          Your submission widget has been successfully rendered in our inbox. Talk soon!
        </div>
      )}

      <footer className="mt-12">
        <h1 className="text-center text-xs sm:text-sm md:text-base text-neutral-400">
          Made with ❤️ by <span className="font-semibold">Rajvardhan Singh Gangwar</span>
        </h1>
      </footer>
    </section>
  );
}
