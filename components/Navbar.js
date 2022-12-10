import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [nav, SetNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      }
      else {
        setShadow(false);
      }
    })
  },[])
    return (
      <div>
        <div
          style={{ backgroundColor: "#ecf0f3" }}
          className={
            shadow
              ? "fixed w-full shadow-xl z-[100] h-20 px-10 ease-in-out duration-300"
              : "fixed w-full z-[100] h-20 px-10"
          }
        >
          <div className=" flex justify-between items-center h-full w-full px-2 overflow-hidden">
            <Image
              className="bg-[#ecf0f3]"
              src={logo}
              width={150}
              height={50}
              alt="Eshan"
            />
            {/* <h1 className="text-primary italic">ΣƧΉΛП</h1> */}

            <div>
              <ul className="hidden md:flex ">
                <Link href="#home">
                  <li className="ml-10 text-sm uppercase hover:underline hover:decoration-2 hover:decoration-primary hover:ease-in-out hover:duration-200 underline-offset-4">
                    Home
                  </li>
                </Link>
                <Link href="#aboutme">
                  <li className="ml-10 text-sm uppercase hover:underline hover:decoration-2 hover:decoration-primary hover:ease-in-out hover:duration-200 underline-offset-4">
                    About
                  </li>
                </Link>
                <Link href="#skill">
                  <li className="ml-10 text-sm uppercase hover:underline hover:decoration-2 hover:decoration-primary hover:ease-in-out hover:duration-200 underline-offset-4">
                    Skill
                  </li>
                </Link>
                <Link href="#project">
                  <li className="ml-10 text-sm uppercase hover:underline hover:decoration-2 hover:decoration-primary hover:ease-in-out hover:duration-200 underline-offset-4">
                    Project
                  </li>
                </Link>
                <Link href="#contact">
                  <li className="ml-10 text-sm uppercase hover:underline hover:decoration-2 hover:decoration-primary hover:ease-in-out hover:duration-200 underline-offset-4">
                    Contact
                  </li>
                </Link>
              </ul>
              <div onClick={() => SetNav(true)} className="md:hidden">
                <AiOutlineMenu size={25}></AiOutlineMenu>
              </div>
              <div
                className={
                  nav
                    ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                    : ""
                }
              >
                {/* mobile  */}
                <div
                  className={
                    nav
                      ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                      : "fixed left-[-100%] top-0 ease-in duration-500"
                  }
                >
                  <div className="flex justify-between items-center mt-10">
                    <Image src={logo} width={125} height={50} alt="" />
                    <div
                      onClick={() => SetNav(false)}
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                    >
                      <AiOutlineClose size={20}></AiOutlineClose>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-200 my-4">
                    <p className="w-[85%] md:w-[90%] py-4">
                      Eshan personal portfolio website
                    </p>
                  </div>
                  <div className="py-4 flex flex-col">
                    <ul className="uppercase">
                      <Link href="/#home" onClick={() => SetNav(false)}>
                        <li className="py-4 text-sm">Home</li>
                      </Link>
                      <Link href="#aboutme" onClick={() => SetNav(false)}>
                        <li className="py-4 text-sm">About</li>
                      </Link>
                      <Link href="#skill" onClick={() => SetNav(false)}>
                        <li className="py-4 text-sm">Skill</li>
                      </Link>
                      <Link href="#project" onClick={() => SetNav(false)}>
                        <li className="py-4 text-sm">Project</li>
                      </Link>
                      <Link href="#contact" onClick={() => SetNav(false)}>
                        <li className="py-4 text-sm">Contact</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* overly  */}
          </div>
        </div>
      </div>
    );
};

export default Navbar;
