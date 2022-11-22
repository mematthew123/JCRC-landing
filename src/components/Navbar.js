// import React, { useState, useEffect } from "react"
// import { AiOutlineClose, AiOutlineMail, AiOutlineMenu, AiOutlineLine } from "react-icons/ai"
// import { FaGithub, FaLinkedinIn,  } from "react-icons/fa"
// import { BsFillPersonLinesFill } from "react-icons/bs"
// import { Link } from "gatsby"
// import FrameImg from "../images/Frameimg.svg"
// import { HeartIcon } from "@heroicons/react/20/solid"


// // import { useRouter } from 'next/router';

// const Navbar = () => {
//   const [nav, setNav] = useState(false)
//   const [shadow, setShadow] = useState(false)
//   const [navBg, setNavBg] = useState("#ecf0f3")
//   const [linkColor, setLinkColor] = useState("#1f2937")

//   const handleNav = () => {
//     setNav(!nav)
//   }

//   useEffect(() => {
//     const handleShadow = () => {
//       if (window.scrollY >= 90) {
//         setShadow(true)
//       } else {
//         setShadow(false)
//       }
//     }
//     window.addEventListener("scroll", handleShadow)
//   }, [])

//   return (
//     <div
//       style={{ backgroundColor: `${navBg}` }}
//       className={
//         shadow
//           ? " w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
//           : " w-full h-20 z-[100]"
//       }
//     >
//       <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
//         <Link href="/">
//           <a>
//             <img src={FrameImg} alt="logo" className="w-20 h-20" />
//           </a>
//         </Link>
//         <div>
//           <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
//             <li className="ml-10 text-sm uppercase hover:border-b">
//               <Link href="/">WHO WE ARE </Link>
//             </li>
//             {/* <li>
//                 <HeartIcon
//                     className="h-6 w-6 text-gray-500"
//                     aria-hidden="true"
//                   />
//                 </li> */}

//             <li className="ml-10 text-sm uppercase hover:border-b">
//               <Link href="/#about">WHAT WE DO</Link>
//             </li>
//             {/* <li>
//                 <HeartIcon
//                     className="  h-6 w-6 text-gray-500"
//                     aria-hidden="true"
//                   />
//                 </li> */}

//             <li className="ml-10 text-sm uppercase hover:border-b">
//               <Link href="/#joinus">JOIN US</Link>
//             </li>
//             {/* <li>
//                 <AiOutlineLine
//                     className="h-6 w-6 text-gray-500"
//                     aria-hidden="true"
//                   />
//                 </li> */}

//             <li className="ml-10 text-sm uppercase hover:border-b">
//               <Link href="/#support">SUPPORT JHRC</Link>
//             </li>
//             <li className="ml-10 text-sm uppercase hover:border-b">
//               <button className=" bg-blue-500 hover:bg-blue-700 text-white align-middle font-bold py-2 px-4 rounded">
//                 <Link href="https://mematthew123.dev">Donate</Link>
//               </button>
//             </li>
//           </ul>
//           {/* Hamburger Icon */}
//           <div
//             style={{ color: `${linkColor}` }}
//             onClick={handleNav}
//             className="md:hidden"
//           >
//             <AiOutlineMenu size={25} />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {/* Overlay */}
//       <div
//         className={
//           nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
//         }
//       >
//         {/* Side Drawer Menu */}
//         <div
//           className={
//             nav
//               ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
//               : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
//           }
//         >
//           <div>
//             <div className="flex w-full items-center justify-between">
//               <div
//                 onClick={handleNav}
//                 className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
//               >
//                 <AiOutlineClose />
//               </div>
//             </div>
//             <div className="border-b border-gray-300 my-4">
//               <p className="w-[85%] md:w-[90%] py-4">
//                 Let&#39;s build something legendary together
//               </p>
//             </div>
//           </div>
//           <div className="py-4 flex flex-col">
//             <ul className="uppercase">
//               <Link href="/">
//                 <li onClick={() => setNav(false)} className="py-4 text-sm">
//                   WHO WE ARE
//                 </li>
//               </Link>
//               <Link href="/#about">
//                 <li onClick={() => setNav(false)} className="py-4 text-sm">
//                     WHAT WE DO
//                 </li>
//               </Link>
//               <Link href="/#skills">
//                 <li onClick={() => setNav(false)} className="py-4 text-sm">
//                     JOIN US
//                 </li>
//               </Link>
//               <Link href="/#projects">
//                 <li onClick={() => setNav(false)} className="py-4 text-sm">
//                     SUPPORT JHRC
//                 </li>
//               </Link>
              
//             </ul>
//             <div className="pt-40">
//               <p className="uppercase tracking-widest text-[#5651e5]">
//                 Let&#39;s Connect
//               </p>
//               <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
               
//                 <Link href="/#contact">
//                   <div
//                     onClick={() => setNav(!nav)}
//                     className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
//                   >
//                     <AiOutlineMail />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

