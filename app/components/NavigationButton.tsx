import React from "react";

export const NavigationButton = ({ text }: { text: string }) => {
  return (
    <li>
      <div className=" py-2 px-[10px] hover:bg-brandDeepBlue rounded-lg transition duration-300 ease-in-out hover:shadow-soft hover:scale-105 cursor-pointer hover:bg-opacity-50">
        <span>{text}</span>
      </div>
    </li>
  );
};
