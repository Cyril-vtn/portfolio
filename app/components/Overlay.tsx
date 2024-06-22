import React from "react";

export const Overlay = ({
  sidebarOpen,
}: {
  sidebarOpen: boolean;
}) => {
  return (
    <div
      id="overlay"
      className={`absolute w-full h-full z-40 p-2 transition-all duration-300 ease-in-out ${
        sidebarOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-full h-full bg-black rounded-xl opacity-30"></div>
    </div>
  );
};
