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
      className={`py-2 px-[15px] rounded-lg transition duration-150 ease-in-out cursor-pointer ${
        pathname === href
          ? "bg-brandDeepBlue bg-opacity-50"
          : "hover:text-brandOffwhite hover:shadow-soft hover:scale-105 hover:bg-opacity-50 hover:bg-brandDeepBlue "
      }`}
    >
      {text}
    </Link>
  );
};
