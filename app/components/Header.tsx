"use client";

import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavigationButton } from "./NavigationButton";
import { FaGithub } from "react-icons/fa";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 py-8 transition-colors duration-300 ease-in-out z-50">
      <div className="m-auto max-w-7xl px-8">
        <div className="flex items-center w-full justify-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <a
                className=" hidden md:block text-2xl font-marlin-bold md:ml-4 text-brandOffwhite select-none hover:scale-105 cursor-pointer transition"
                href="/"
              >
                Cyril.
              </a>
            </div>
            <nav className="flex gap-3 font-marlin-medium text-brandOffwhite tracking-normal text-sm">
              <NavigationButton text="Projets" href="/" />
              <NavigationButton text="A propos" href="/about" />
              <NavigationButton text="CV" href="/resume" />
            </nav>
          </div>
          <a
            href="https://github.com/Cyril-vtn"
            className=" hidden md:block"
            target="_blank"
          >
            <Button text="Github" icon={<FaGithub size={18} />} />
          </a>
        </div>
      </div>
    </div>
  );
};
