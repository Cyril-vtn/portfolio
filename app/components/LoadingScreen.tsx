"use client";
import React, { useEffect, useState } from "react";

export const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [pourcentage, setPourcentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPourcentage((pourcentage) => {
        if (pourcentage < 100) {
          return pourcentage + 1;
        } else {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen max-h-screen h-screen flex justify-center items-center ${
          loading ? "opacity-100" : "opacity-0"
        } 
      } transition-opacity duration-500 ease-in-out`}
      >
        <div className="absolute text-white text-5xl bottom-10 right-10 z-50 font-marlin-bold">
          {pourcentage} %
        </div>
      </div>

      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000 ease-in-out delay-700`}
      >
        {children}
      </div>
    </>
  );
};
