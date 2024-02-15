import React, { useState } from "react";
import Link from "next/link";
// import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { relieve } from "@/app/layout";
import Image from "next/image";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="w-full flex flex-row justify-between items-center px-10 py-6 border-[#2b4dac] border-b-2 fixed z-[999] bg-[#d6ebff]">
                <Image
                    width={150}
                    height={150}
                    src={"/logo.png"}
                    alt="Prabjeet Trehan "
                />
                <div className="lg:flex flex-row items-center gap-8 hidden">
                    <Link href="/" className="hover:text-gray-500">
                        Home
                    </Link>
                    <Link href="#about" className="hover:text-gray-500">
                        About
                    </Link>
                    <Link href="#services" className="hover:text-gray-500">
                        Services
                    </Link>
                    <Link href="#reviews" className="hover:text-gray-500">
                        Reviews
                    </Link>
                    <Link href="#gallery" className="hover:text-gray-500">
                        Gallery
                    </Link>
                    <Link href="#contact" className="hover:text-gray-500">
                        Contact
                    </Link>
                </div>
                <div className="lg:flex hidden space-x-4">
                    <a href="#" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/instagram.png" alt="instagram" width={28} />
                    </a>
                    <a href="#" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/youtube.png" alt="youtube" width={28} />
                    </a>
                    <a href="#" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/facebook.png" alt="facebook" width={28} />
                    </a>
                </div>
                <div className="lg:hidden block">
                    <input
                        hidden
                        className="check-icon"
                        id="check-icon"
                        name="check-icon"
                        type="checkbox"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <label className="icon-menu" htmlFor="check-icon">
                        <div className="bar bar--1"></div>
                        <div className="bar bar--2"></div>
                        <div className="bar bar--3"></div>
                    </label>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#d6ebff] w-[90%] mx-5 md:mx-9 border-2 border-[#2b4dac] fixed top-[138px] z-[999] py-4 text-center flex flex-col items-center gap-10"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <Link href="/" className="hover:text-gray-300">
                                Home
                            </Link>
                            <Link href="#services" className="hover:text-gray-500">
                                Services
                            </Link>
                            <Link href="#about" className="hover:text-gray-500">
                                About
                            </Link>
                            <Link href="#testimonial" className="hover:text-gray-500">
                                Testimonial
                            </Link>
                            <Link href="#work" className="hover:text-gray-500">
                                Work
                            </Link>
                            <Link href="#contact" className="hover:text-gray-500">
                                Contact
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="#" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                                <img src="/instagram.png" alt="instagram" width={28} />
                            </a>
                            <a href="#" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                                <img src="/youtube.png" alt="youtube" width={28} />
                            </a>
                            <a href="#" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                                <img src="/facebook.png" alt="facebook" width={28} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
