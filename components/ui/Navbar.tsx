"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BellIcon, Bookmark, BookMarked, BookMarkedIcon } from "lucide-react";

// type Props = {
//   loginSession: Session | null;
// };
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "/dashboard", text: "Dashboard" },
    { href: "/profile", text: "Profile" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 transition-all duration-300 z-50
    ${
      isScrolled
        ? "bg-white/95  backdrop-blur-lg shadow-lg"
        : "bg-white/90 backdrop-blur-md"
    } border-b border-gray-200 `}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center">
            <Link href="/" className=" space-x-2 group">
              <h1 className="font-bold text-xl flex flex-col sm:text-xl lg:text-2xl bg-gradient-to-r from-cyan-400 to-cyan-900  bg-clip-text text-transparent">
                Help Desk
                <span className=" text-xs">By Ashfak</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-sm lg:text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav> */}

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {true ? (
              <div className=" flex items-center gap-5 ">
                {/* Avatar */}
                <BellIcon className=" h-6 w-6 cursor-pointer"/>
                <Bookmark className=" h-6 w-6 cursor-pointer"/>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-9 h-9 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <img
                    src={
                      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    }
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={"/login"}
                className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm hover:shadow-lg transform hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {/* {isMenuOpen ? (
            //   <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
            //   <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )} */}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2.5 text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.text}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-2">
                {true ? (
                  <>
                    <div className="flex items-center space-x-3 px-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400">
                        <img
                          src={
                            "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                          }
                          alt="User Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className=" leading-tight">
                        <h2 className=" text-xl tracking-tight font-semibold">
                          S.M. Ashfak Uddin
                        </h2>
                        <p className=" text-sm tracking-tight text-neutral-600 ">
                          ash@mail.com
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    href={"/login"}
                    className="px-3 py-2.5 text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Log In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
