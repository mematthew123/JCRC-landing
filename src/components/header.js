import { graphql, useStaticQuery, Link, linkColor } from "gatsby";
import React, { useState } from "react";
import Group94 from "../images/Group94.svg";
import { StaticImage } from "gatsby-plugin-image";
import FrameImg from "../images/FrameImg.svg";
// we need to import from google fonts

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <div className="bg-white">
      <header>
        <Popover className="relative bg-white">
          <div className="mx-auto flex max-w-9xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"> */}

            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img className="h-8 sm:h-10" src={FrameImg} alt="Whoo-hoo" />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    ></Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"></div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <ul
                style={{ color: `${linkColor}` }}
                className=" md:flex flex justify-items-stretch float-right"
              >
                <li className=" float-right text-sm uppercase hover:border-b">
                  <Link href="/">WHO WE ARE </Link>
                </li>

                <li className=" text-pink-400 ml-10 text-sm uppercase hover:border-b underline-pink">
                  <Link href="/#about">WHAT WE DO</Link>
                </li>

                <li className="ml-10 text-sm uppercase hover:border-b">
                  <Link href="/#joinus">JOIN US</Link>
                </li>

                <li className="ml-10 text-sm uppercase hover:border-b">
                  <Link href="/#support">SUPPORT JHRC</Link>
                </li>
              </ul>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Donate
              </a>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={FrameImg}
                        alt="logo ya bish"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <ul
                      style={{ color: `${linkColor}` }}
                      className=" md:flex flex float-right"
                    >
                      <li className=" float-right text-sm uppercase hover:border-b">
                        <Link href="/">WHO WE ARE </Link>
                      </li>

                      <li className=" text-pink-400 ml-10 text-sm uppercase hover:border-b underline-pink">
                        <Link href="/#about">WHAT WE DO</Link>
                      </li>

                      <li className="ml-10 text-sm uppercase hover:border-b">
                        <Link href="/#joinus">JOIN US</Link>
                      </li>

                      <li className="ml-10 text-sm uppercase hover:border-b">
                        <Link href="/#support">SUPPORT JHRC</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Donate{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-8xl sm:px-6 lg:px-0">
              <div className="relative shadow-xl sm:overflow-hidden ">
                <div className="absolute inset-0 shadow-lime-600">
                  <img
                    className="h-3/4  w-screen object-cover shadow-xl shadow-lime-600 box-shadow-lime-600 "
                    src={Group94}
                    alt="People working on laptops"
                  />
                </div>

                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48  lg:px-2">
                  <h1 className="text-center text-6xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className=" lg:font-sans-serif-pro lg:py-0 tracking-wide lg:align-text-top text-2xl md:text-5xl lg:text-9xl sm:text-base lg:ml-96 text-white">
                      WE ARE
                    </span>
                    <span className="  tracking-wide lg:align-text-top text-2xl md:text-5xl lg:text-9xl lg:ml-64 sm:text-xs block align-text-top text-white">
                      JCRC{" "}
                    </span>
                  </h1>
                
                  <ul className=" mr-6 max-w-lg mx-auto ml-auto sm:text-xs text-2xl text-white sm:max-w-3xl">
                  <div className="flex flex-col justify-center items-center">
                      <li className="text-white sm:text-xs lg:text-2xl">We are a</li>
                      <li className="text-white sm:text-xs lg:text-2xl">We are a</li>
                      <li className="text-white sm-text-xs lg:text-2xl">We are a</li>
                      </div>
                        
                    </ul>
                    
        
                 
                </div>
                
                
              </div>
       
              <div className="absolute inset-0 h-3 lg:mt-96 lg:top-[355px] w-screen lg:bg-lime-600  " />
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-base font-semibold text-gray-500">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
