import { Menu } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { DiGit } from "react-icons/di";
import DropdownMenu from "./DropdownMenu";

export const Header: React.FC = () => {
  return (
    <div className="bg-header w-[100vw] justify-between flex p-6 h-20">
      <div className="w-12">
        <Link className="text-white items-center hover:text-gray" href="/">
          <DiGit size={40} />
        </Link>
      </div>
      <DropdownMenu />
    </div>
  );
};

export default Header;
