"use client";

import { useState, useEffect } from "react";
import "./css/loader.css";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSlidingOut, setIsSlidingOut] = useState(false);

  const slideOutDuration = 700; 

  useEffect(() => {
    
    const animationDelay = 2500; 

    const slideOutTimer = setTimeout(() => {
      setIsSlidingOut(true);
    }, animationDelay);

    const removeLoaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, animationDelay + slideOutDuration);

    return () => {
      clearTimeout(slideOutTimer);
      clearTimeout(removeLoaderTimer);
    };
  }, []); 
  if (!isLoading) return null;

  return (
    <div
  
      style={{ transitionDuration: `${slideOutDuration}ms` }}
      className={`fixed inset-0 z-[9999] bg-black transform transition-transform ease-in-out ${
        isSlidingOut ? "translate-y-full" : "translate-y-0"
      }`}
    >
      
      <div className="loader-wrapper">
        <div className="scene">
          <div className="shadow"></div>
          <div className="jumper">
            <div className="spinner">
              <div className="scaler">
                <div className="loader">
                  <div className="cuboid">
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}