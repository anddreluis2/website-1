import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import router from "next/router";
import { Fragment } from "react";
import {
  FaBook,
  FaChevronDown,
  FaGithubAlt,
  FaPhone,
  FaUserNinja,
} from "react-icons/fa";

export default function Example() {
  return (
    <div className="text-right">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <FaChevronDown className="ml-2 -mr-1 h-5 w-5 hover:text-gray" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-10 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link
                  href="#"
                  className={`gap-2 group flex w-full items-center rounded-md px-2 py-2 text-sm text-white hover:text-gray`}
                >
                  <FaPhone />
                  Contacts
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="https://github.com/anddreluis2"
                  className={`gap-2 group flex w-full items-center rounded-md px-2 py-2 text-sm text-white hover:text-gray`}
                >
                  <FaGithubAlt />
                  Projects
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="https://medium.com/@anddreluis"
                  className={`gap-2 group flex w-full items-center rounded-md px-2 py-2 text-sm text-white hover:text-gray`}
                >
                  <FaBook />
                  Medium
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <Link
                  href="#about"
                  className={`gap-2 group flex w-full items-center rounded-md px-2 py-2 text-sm text-white hover:text-gray`}
                >
                  <FaUserNinja />
                  About me
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
