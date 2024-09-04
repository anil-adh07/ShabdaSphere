"use client";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Logo from "./logo";
import useOnclickOutside from "react-cool-onclickoutside";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import ButtonLink from "./button";

const Navbar = () => {
  const [open, isOpen] = useState(false);
  const [aboutdropDown, aboutsetDropdown] = useState<boolean>(false);

  const ToggleMenu = () => {
    isOpen(!open);
    aboutsetDropdown(false);
  };

  const toggleAboutDropdown = () => {
    aboutsetDropdown(!aboutdropDown);
  };

  const closeMenu = () => {
    setTimeout(() => {
      isOpen(false);
      aboutsetDropdown(false);
    }, 700);
  };
  const clickOutside = useOnclickOutside(() => {
    isOpen(false);
    aboutsetDropdown(false);
  });
  return (
    <>
      <div className="bg-lightwhite hidden lg:block fixed top-0 w-full h-auto shadow-md shadow-gray-400 z-50">
        <div className="px-8 py-4 flex flex-row justify-between items-center max-w-screen-2xl mx-auto">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="flex flex-row justify-between gap-10 items-center">
            <li className="text-dark text-lg hover:underline hover:text-lightgreeen duration-200 transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="py-3 relative group hover:text-lightgreeen transition-all duration-200 text-dark text-lg">
              <div className="cursor-pointer inline-flex items-center gap-1 group-hover:underline">
                About
                <IoIosArrowDown className="group-hover:rotate-180" />
              </div>
              <div
                className={`absolute top-12 -left-6  hidden group-hover:flex flex-col gap-4 bg-white pl-8 pr-16 py-6 rounded-2xl text-left  text-dark border border-dark shadow-dark shadow-lg z-50`}
              >
                <Link
                  href="/about"
                  className="hover:underline hover:text-lightgreeen duration-200 transition-all inline-flex"
                >
                  About Us
                </Link>
                <Link
                  href="/teams"
                  className="hover:underline hover:text-lightgreeen duration-200 transition-all pr-8"
                >
                  Teams
                </Link>

                <Link
                  href="/faq"
                  className="hover:underline hover:text-lightgreeen duration-200 transition-all"
                >
                  FAQs
                </Link>
                <Link
                  href="/testimonials"
                  className="hover:underline hover:text-lightgreeen duration-200 transition-all"
                >
                  Testimonials
                </Link>
              </div>
            </li>
            <li className="text-dark text-lg hover:underline hover:text-lightgreeen duration-200 transition-all">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-dark text-lg hover:underline hover:text-lightgreeen duration-200 transition-all">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="text-dark text-lg hover:underline hover:text-lightgreeen duration-200 transition-all">
              <Link href="/blogs">Blogs</Link>
            </li>
          </ul>
          <ButtonLink title="Contact us" link="/contact" />
        </div>
      </div>

      {/* Mobile View */}

      <div
        ref={clickOutside}
        className="fixed w-full top-0 z-50 lg:hidden bg-lightwhite"
      >
        <div
          className={`bg-lightwhite lg:hidden flex flex-row items-center justify-between py-3 px-8`}
        >
          <Link href="/">
            <Logo />
          </Link>

          <div className={`text-5xl p-1 text-dark`} onClick={ToggleMenu}>
            <RiMenu2Fill className="text-dark" />
          </div>
          <div
            className={`bg-dimgreen absolute -top-4 left-0 h-screen w-3/4 md:w-1/2 px-5 py-8 overflow-y-scroll transition-all duration-500 ${
              open ? "flex flex-col translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-row justify-between">
              <Link href="/">
                <Logo />
              </Link>
              <div onClick={closeMenu}>
                <RiCloseFill className="text-dark text-4xl" />
              </div>
            </div>
            <ul className="flex flex-col text-dark gap-1 py-10 px-2">
              <li className="hover:underline hover:text-lightgreeen duration-200 transition-all">
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="py-3 relative group">
                <div
                  className="cursor-pointer inline-flex justify-between items-center gap-1 w-full hover:underline hover:text-lightgreeen duration-200 transition-all"
                  onClick={toggleAboutDropdown}
                >
                  About
                  <IoIosArrowDown
                    className={`text-2xl ${aboutdropDown ? "rotate-180" : ""}`}
                  />
                </div>
                <div
                  className={`absolute top-12  ${
                    aboutdropDown ? "flex" : "hidden"
                  }  flex-col gap-4 bg-transparent border border-lightgreeen pl-6 pr-10 py-3 rounded-lg text-left  text-dark`}
                >
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="hover:underline hover:text-lightgreeen duration-200 transition-all pr-16"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/teachers"
                    onClick={closeMenu}
                    className="hover:underline hover:text-lightgreeen duration-200 transition-all"
                  >
                    Teachers
                  </Link>
                  <Link
                    href="/course-category"
                    onClick={closeMenu}
                    className="hover:underline hover:text-lightgreeen duration-200 transition-all"
                  >
                    Category
                  </Link>
                  <Link
                    href="/faq"
                    onClick={closeMenu}
                    className="hover:underline hover:text-lightgreeen duration-200 transition-all"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="hover:underline hover:text-lightgreeen duration-200 transition-all"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/blogs"
                    onClick={closeMenu}
                    className="hover:underline hover:text-lightgreeen duration-200 transition-all"
                  >
                    Blogs
                  </Link>
                </div>
              </li>
              <li
                className={`${
                  aboutdropDown ? "mt-64" : ""
                } pb-3 hover:underline hover:text-lightgreeen duration-200 transition-all`}
              >
                <Link href="/course" onClick={closeMenu}>
                  Course
                </Link>
              </li>
              <li className="hover:underline hover:text-lightgreeen duration-200 transition-all">
                <Link href="/event" onClick={closeMenu}>
                  Event
                </Link>
              </li>
            </ul>
            <div className="max-w-max" onClick={closeMenu}>
              <ButtonLink link="/contact" title="contact us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
