import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Sidebar = ({
  sidebarRef,
  sidebarOpen,
  setSidebarOpen,
  features,
  languages,
}: {
  sidebarRef: React.MutableRefObject<any>;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  features: string[];
  languages: string[];
}) => {
  return (
    <div
      id="sidebar"
      ref={sidebarRef}
      className={`absolute z-50 m-4 top-0 flex flex-col overflow-auto h-[-webkit-fill-available] w-[30%] max-w-[420px] gap-4 bg-brandOffwhite bg-noise-bg rounded-lg shadow-hard py-3 px-5 transition-all duration-300 ease-in-out ${
        sidebarOpen ? "right-0" : "-right-[60%]"
      }`}
    >
      <div className="flex flex-col rounded-t-lg w-full h-full gap-4">
        <div className="flex flex-col  items-center gap-2">
          <div className="flex gap-2 justify-between w-full">
            <h3 className="font-marlin-medium text-brandBlue tracking-normal xl:text-lg text-xs">
              Fonctionnalités
            </h3>
            <div className="xl:text-lg text-xs flex items-center justify-center">
              <FaArrowRight
                size={22}
                className="cursor-pointer transition-all duration-200 ease-in-out p-1 hover:bg-brandBlue text-brandBlue hover:text-brandOffwhite rounded-full"
                onClick={() => setSidebarOpen(false)}
              />
            </div>
          </div>
          <ul className="text-sm space-y-1 text-lightGray w-full">
            {features?.map((feature, index) => (
              <li key={index}>- {feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-marlin-medium text-brandBlue text-md tracking-normal">
            Languages utilisés
          </h3>
          <ul className="text-sm space-y-1 text-lightGray">
            {languages?.map((language, index) => (
              <li key={index}>- {language}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
