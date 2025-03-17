"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaAlignRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
const links = [
  { name: "HOME", href: "/" },
  { name: "SERVICE", href: "/" },
  { name: "PRODUCTS", href: "/" },
  {
    name: "ABOUT US",
    href: "/",
    dropdown: ["Team", "Mission & Vission", "Portfolio", "Company"],
  },
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
        className={`bg-primarySky  z-50 w-full ${
          pathname === "/pages/Login" || pathname === "/pages/SignUp"
            ? ""
            : "fixed top-0 "
        } `}
      >
        <div className="container mx-auto flex justify-between items-center px-3 h-[60px]">
          <div className="md:flex gap-3 items-center text-primaryWhite">
            <div>+880 1571 744478</div>
            <div>info@softronixs.com</div>
          </div>

          <div className="flex gap-2 md:gap-4 items-center text-primaryWhite text-xl">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaLinkedin></FaLinkedin>
            <FaInstagram></FaInstagram>
          </div>
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
        className={` bg-primaryBlack  z-50 w-full fixed top-[60px]  ${
          showShadow && "shadow-md"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-3 md:h-[70px] h-[50px]">
          <Link className="hidden md:block text-primaryWhite" href="/">
            {/* <Image
              src={logo}
              alt="Logo"
              className="cursor-pointer w-20 md:w-32"
            /> */}
            Logo
          </Link>
          <Link className="md:hidden h-10 w-28 text-primaryWhite" href="/">
            {/* <Image src={logo1} alt="Logo" className="cursor-pointer"
             /> */}
            logo
          </Link>
          <div className="relative border border-primaryWhite mx-2 h-9">
            <input
              type="text"
              placeholder="What are you looking for today?"
              className="h-full bg-primaryWhite  pl-2 pr-10 md:w-40 lg:w-96 w-full text-secondaryBlack  outline-none"
            />
            <button className="absolute right-0 top-0 bg-primaryYellow  h-full w-8 flex justify-center items-center hover:bg-primaryPurple transition-colors duration-300">
              <FaSearch className=" text-primaryWhite " />
            </button>
          </div>
          <div className="flex gap-4">
            <ul className="md:flex space-x-6 items-center hidden">
              {links.map((link) => (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="text-primaryWhite  font-semibold hover:text-primaryYellow"
                  >
                    {link.name}
                    {link.dropdown && (
                      <IoIosArrowDown className="inline w-4 h-4 mr-1" />
                    )}
                  </Link>
                  {link.dropdown && (
                    <ul className="absolute -left-8 hidden group-hover:block bg-primaryWhite  shadow-lg rounded-md pt-4 ">
                      {link.dropdown.map((item) => (
                        <li className="w-48 hover:underline" key={item}>
                          <Link
                            href={`${link.href}/${item
                              .toLowerCase()
                              .replace(" ", "-")}`}
                            className="block px-4 py-2 hover:bg-primaryPurple  text-primaryBlack hover:text-primaryWhite transition-colors duration-300  "
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <Link href="/">
                <button className="bg-primaryWhite  text-primaryBlack hover:text-primaryWhite px-4 py-1 rounded-full hover:bg-primaryYellow  transition-colors duration-300 font-semibold">
                  Contact
                </button>
              </Link>
            </ul>
          </div>
          {isOpen ? (
            <div className="md:hidden">
              <FaXmark
                onClick={toggleSidebar}
                className="h-6 w-6 hover:scale-110 transition-transform duration-300 cursor-pointer text-primaryWhite   "
              />
            </div>
          ) : (
            <div className="md:hidden flex items-center gap-4">
              <Link href="/">
                <button className="bg-primaryWhite  text-primaryBlack hover:text-primaryWhite px-4 py-1 rounded-full hover:bg-primaryYellow  transition-colors duration-300 font-semibold">
                  Contact
                </button>
              </Link>
              <FaAlignRight
                onClick={toggleSidebar}
                className="h-6 w-6 hover:scale-110 transition-transform duration-300 cursor-pointer text-primaryWhite   "
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
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * index, duration: 0.3 },
    }),
  };
  // Links array
  const links = ["Home", "Service", "Products","About Us", "Contact"];
  return (
    <>
      {/* Overlay - Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-primaryBlack bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-64 bg-primarySky shadow-xl z-50 p-5"
      >
        {/* Close Button */}
        <button onClick={toggleSidebar} className="absolute top-4 right-4">
          <div className="text-primaryBlack text-xl font-light">X</div>
        </button>

        {/* Sidebar Content */}
        <div className="mt-10">
          <ul className="space-y-4 text-lg">
            {links.map((link, index) => (
              <motion.li
                key={link}
                custom={index}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={linkVariants}
                className="cursor-pointer text-primaryWhite hover:text-primaryPurple transition-colors duration-300"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};
