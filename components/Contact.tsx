import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

export const Contact = () => {
  const a = 1
  console.log('dfdf', a)
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="w-10/12 m-auto px-2 py-16 ">
        <div className="flex gap-3 justify-center">
          <hr className="my-4 w-12 md:w-48  h-1 rounded border-0 bg-primary"></hr>
          <h2 className="text-primary mb-10">Contact Me</h2>
          <hr className="my-4 w-12 md:w-48 h-1  rounded border-0 bg-primary"></hr>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://img.freepik.com/premium-vector/call-me-flat-design-illustration_188398-1825.jpg?w=740"
                  alt="/"
                  height={200}
                  width={500}
                />
              </div>
              <div>
                <h2 className="py-2">Eshan Ahammed</h2>
                <p>MERN stuck web Developer</p>
                <p className="py-4">
                  I am available for full-time and part type positions. Contact me
                  and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href={"https://www.facebook.com/eshan.benjamin01/"}
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:-translate-y-1 ease-in duration-300 text-[#5651e5] w-14"
                  >
                    <FaFacebookF size={30}></FaFacebookF>
                  </Link>
                  <Link
                    href={"https://github.com/3shaan"}
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-1 ease-in duration-300 text-[#5651e5] w-14"
                  >
                    <FaGithub size={30}></FaGithub>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/3shaan/"}
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-1 ease-in duration-300 text-[#5651e5] w-14"
                  >
                    <FaLinkedinIn size={30}></FaLinkedinIn>
                  </Link>
                  <Link
                    href="mailto:eshan.ahammed1204@gmail.com"
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-1 ease-in duration-300 text-[#5651e5] w-14"
                  >
                    <AiOutlineMail size={30}></AiOutlineMail>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="lg:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/c120796d-8da8-4221-8220-c6aa02c7e1a5"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4 text-center">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
