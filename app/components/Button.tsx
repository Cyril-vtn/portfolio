import React from "react";

export const Button = ({
  text,
  icon,
  cursor = "pointer",
}: {
  text?: string;
  icon?: React.ReactNode;
  cursor?: "pointer" | "none";
}) => {
  return (
    <button
      className={`cursor-none py-1 px-5 bg-brandOffwhite text-brandBlue rounded-[10px] flex items-center gap-2 transition duration-300 ease-in-out hover:shadow-soft hover:scale-105 text-xs font-marlin-medium leading-7 tracking-normal`}
      style={{ cursor }}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};
