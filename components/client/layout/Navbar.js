import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../../../public/logo.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 70) {
        setBgColor(true);
      } else {
        setBgColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <header className="fixed w-full bg-[#ffffff] z-50 drop-shadow-md">
      <div className="xl:max-w-screen-xl mx-auto flex flex-wrap items-center justify-between  py-2  text-black ">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <div className="w-20 mx-5 cursor-pointer ">
              <Image src={logoPic} width={100} height={100} alt="" />
            </div>
          </Link>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {!navbarOpen ? (
              <FaBars size={25} className="mr-3" />
            ) : (
              <FaTimes size={25} className="mr-3" />
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow justify-center items-center " +
            (navbarOpen ? "flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-center">
            <li className="px-4 border-transparent border-b-4 hover:text-[#EF1C24] py-2 font-medium uppercase">
              <Link href="/" onClick={() => setNavbarOpen(!navbarOpen)}>
                HOME
              </Link>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:text-[#EF1C24] py-2 font-medium uppercase">
              <Link
                href="/ourservice"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                Our Services
              </Link>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:text-[#EF1C24] py-2 font-medium uppercase">
              <Link href="/aboutus" onClick={() => setNavbarOpen(!navbarOpen)}>
                About Us
              </Link>
            </li>

            <li className="px-4 border-transparent border-b-4 hover:text-[#EF1C24] py-2 font-medium uppercase">
              <Link href="/blogs" onClick={() => setNavbarOpen(!navbarOpen)}>
                Blogs
              </Link>
            </li>
            {/* <li className="px-4 border-transparent border-b-4 hover:border-[#EF1C24] py-2 font-medium uppercase">
              <Link href="/Contact">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>Contact</a>
              </Link>
            </li> */}
            <li className="px-4 py-2 bg-red-400 font-medium mx-2 rounded-tl-3xl rounded-br-3xl hover:bg-[#F01C28] text-white text-center">
              <Link href="/consult" onClick={() => setNavbarOpen(!navbarOpen)}>
                Book A Free Consult
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
