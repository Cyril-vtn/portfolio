import React from "react";

export const Button = ({
  text,
  icon,
}: {
  text: string;
  icon?: React.ReactNode;
}) => {
  return <button className="py-1 px-5 bg-brandOffwhite text-brandBlue rounded-lg flex items-center gap-2 transition duration-300 ease-in-out hover:shadow-soft hover:scale-105 text-xs font-marlin-medium leading-7 tracking-normal">
    {icon}
    <span>{text}</span>
  </button>;
};
