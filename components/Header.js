import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./NavigationBar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const router = useRouter();
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && router.pathname === "/") {
        setHeaderVisible(true);
      } else if (router.pathname === "/") {
        setHeaderVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  const handleMouseEnter = () => {
    if (router.pathname === "/") {
      setHeaderVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (router.pathname === "/" && window.scrollY === 0) {
      setHeaderVisible(false);
    }
  };

  return (
    <header
      className={`bg-teal-950 h-14 w-screen p-2 fixed top-0 z-50 transition-opacity ${
        router.pathname === "/" && (headerVisible ? "opacity-100" : "opacity-0")
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto flex justify-between items-center h-full w-screen">
        <div className="h-full flex items-center lg:w-2/12">
          <div className="ml-2 h-full">
            <a href="/">
              <Image src="/logo/logo.png" alt="Logo" width={40} height={40} />
            </a>
          </div>

          <div className="ml-2 h-full lg:hidden">
            <Image
              src="/logo/text-blanc.png"
              alt="Logo"
              width={120}
              height={40}
            />
          </div>
        </div>
        <div className="h-full w-2/12 lg:w-8/12 flex justify-center items-center">
          <Navbar />
        </div>
        <div className="h-full w-2/12 lg:w-2/12 hidden lg:flex flex justify-end items-center">
          <a
            href="https://www.facebook.com/pepinieredejudicarre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className=" text-white cursor-pointer w-8 h-8"
              icon={faFacebook}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
