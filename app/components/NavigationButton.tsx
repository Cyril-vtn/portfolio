"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const NavigationButton = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`py-2 px-[10px] rounded-lg transition duration-300 ease-in-out cursor-pointer ${
        pathname === href
          ? "bg-brandOffwhite text-brandBlue"
          : "hover:text-brandOffwhite hover:shadow-soft hover:scale-105 hover:bg-opacity-50 hover:bg-brandDeepBlue "
      }`}
    >
      <span>{text}</span>
    </Link>
  );
};
