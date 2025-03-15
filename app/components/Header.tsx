"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaAlignRight, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
const links = [
  { name: "Home", href: "/" },
  {
    name: "Link 1",
    href: "/",
    dropdown: ["Link 1", "Link 2", "Link 3"],
  },
  { name: "Link 2", href: "/" },
  { name: "Link 3", href: "/", dropdown: ["Event 1", "Event 2"] },
  { name: "Link 4", href: "/others", dropdown: ["Option 1", "Option 2"] },
];

const Header = () => {
  const [show, setShow] = useState(true);
  const [showShadow, setShowShadow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
      if (currentScrollY > lastScrollY + 15) {
        // Scrolling down
        setShow(false);
      } else if (currentScrollY < lastScrollY - 15) {
        // Scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div className="">
      {/* Top Bar */}
      <motion.div
        animate={{ y: show ? 0 : -60 }} // Hide to top
        transition={
          show
            ? { type: "spring", stiffness: 100, damping: 30 }
            : { type: "spring", stiffness: 30 }
        }
        className={`bg-yellow  z-50 w-full ${
          pathname === "/pages/Login" || pathname === "/pages/SignUp"
            ? ""
            : "fixed top-0 "
        } `}
      >
        <div className="container mx-auto flex justify-between items-center px-3 h-[60px]">
          <Link href="/">
            {/* <Image
              src={logo}
              alt="Logo"
              className="cursor-pointer w-20 md:w-32"
            /> */}
            Logo
          </Link>
          <div className="relative border border-white mx-2 h-9">
            <input
              type="text"
              placeholder="What are you looking for today?"
              className="h-full bg-lightWhite  pl-2 pr-10 lg:w-96 w-full text-darkBlack    outline-none"
            />
            <button className="absolute right-0 top-0 bg-yellow  h-full w-8 flex justify-center items-center hover:bg-goldenYellow transition-colors duration-300">
              <FaSearch className=" text-lightWhite " />
            </button>
          </div>
          <Link href="/">
            <button className="bg-lightWhite  text-darkBlack   px-4 py-1 rounded-full hover:bg-goldenYellow  transition-colors duration-300 font-semibold hover:underline">
              Contact
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div
        animate={{ y: show ? 0 : -60 }} // Hide to top
        transition={
          show
            ? { type: "spring", stiffness: 20 }
            : { type: "spring", stiffness: 70 }
        }
        className={` bg-lightWhite  z-50 w-full ${
          pathname === "/pages/Login" || pathname === "/pages/SignUp"
            ? ""
            : "fixed top-[60px] "
        }  ${showShadow && "shadow-md"}`}
      >
        <div className="container mx-auto flex justify-between items-center px-3 md:h-[70px] h-[50px]">
          <Link className="hidden md:block" href="/">
            {/* <Image
              src={logo}
              alt="Logo"
              className="cursor-pointer w-20 md:w-32"
            /> */}
            Logo
          </Link>
          <Link className="md:hidden h-10 w-28" href="/">
            {/* <Image src={logo1} alt="Logo" className="cursor-pointer"
             /> */}
            logo
          </Link>
          <div className="flex gap-4">
            <ul className="lg:flex space-x-6 items-center hidden">
              {links.map((link) => (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="text-darkBlack    font-semibold hover:text-goldenYellow"
                  >
                    {link.name}
                    {link.dropdown && (
                      <IoIosArrowDown className="inline w-4 h-4 mr-1" />
                    )}
                  </Link>
                  {link.dropdown && (
                    <ul className="absolute -left-8 hidden group-hover:block bg-lightWhite  shadow-lg rounded-md pt-4 ">
                      {link.dropdown.map((item) => (
                        <li className="w-36 hover:underline" key={item}>
                          <Link
                            href={`${link.href}/${item
                              .toLowerCase()
                              .replace(" ", "-")}`}
                            className="block px-4 py-2 hover:bg-lightGray  text-darkBlack   "
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {isOpen ? (
            <div className="md:hidden">
              <FaXmark
                onClick={toggleSidebar}
                className="h-6 w-6 hover:scale-110 transition-transform duration-300 cursor-pointer text-darkBlack   "
              />
            </div>
          ) : (
            <div className="md:hidden">
              <FaAlignRight
                onClick={toggleSidebar}
                className="h-6 w-6 hover:scale-110 transition-transform duration-300 cursor-pointer text-darkBlack   "
              />
            </div>
          )}
        </div>
      </motion.div>

      {/* drawer */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Header;
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay - Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 p-5"
      >
        {/* Close Button */}
        <button onClick={toggleSidebar} className="absolute top-4 right-4">
          <div className="text-gray-600 text-xl font-light">X</div>
        </button>

        {/* Sidebar Content */}
        <div className="mt-10">
          <ul className="space-y-4 text-lg">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">About</li>
            <li className="cursor-pointer hover:text-blue-500">Services</li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};
