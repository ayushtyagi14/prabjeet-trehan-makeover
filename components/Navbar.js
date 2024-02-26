import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { amsterdam } from "@/app/layout";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {!scrolling &&
                <div className={`w-full px-10 pt-2 fixed top-1 z-[999] text-white bg-none ${scrolling && 'hidden'}`}>
                    <div className="w-full flex lg:flex-col flex-row gap-2 justify-between items-center">
                        <h1 className={`${amsterdam.className} lg:text-[24px] text-[18px] font-light text-center tracking-[0.18rem]`}>
                            Prabjeet Trehan
                            <br />
                            Makeover
                        </h1>
                        <div className="lg:flex hidden gap-8 items-center mt-2">
                            <Link href="/" className="hover:text-gray-200 font-light">
                                Home
                            </Link>
                            <Link href="#about" className="hover:text-gray-200 font-light">
                                About
                            </Link>
                            <Link href="#services" className="hover:text-gray-200 font-light">
                                Services
                            </Link>
                            <Link href="#reviews" className="hover:text-gray-200 font-light">
                                Reviews
                            </Link>
                            <Link href="#contact" className="hover:text-gray-200 font-light">
                                Contact
                            </Link>
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

                    <div className="fixed hidden lg:flex top-2 right-3 flex-row gap-3">
                        <a href="#">
                            <img src="/instagram.png" alt="instagram" width={28} />
                        </a>
                        <a href="#">
                            <img src="/youtube.png" alt="youtube" width={28} />
                        </a>
                        <a href="#">
                            <img src="/facebook.png" alt="facebook" width={28} />
                        </a>
                    </div>

                    <div className="fixed hidden lg:flex top-2 left-3">
                        <a href="#" className="flex flex-row gap-3 items-center font-light">
                            <img src="/call-white.png" alt="call" width={28} />
                            +1 (516) 412-5545
                        </a>
                    </div>
                </div>
            }
            {scrolling &&
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: scrolling ? 0 : -100 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.5 }}
                    className={`fixed top-0 left-0 right-0 z-50 navbar-background ${scrolling ? 'bg-[#0a0d08]' : 'hidden'} text-white py-3`}
                >
                    <div className="w-full flex lg:flex-col flex-row gap-2 justify-between items-center py-5 px-4 lg:py-0 lg:px-0">
                        <h1 className={`${amsterdam.className} lg:text-[24px] text-[18px] font-light text-center tracking-[0.18rem]`}>
                            Prabjeet Trehan
                            <br />
                            Makeover
                        </h1>
                        <div className="lg:flex hidden gap-8 items-center mt-2">
                            <Link href="/" className="hover:text-gray-200 font-light">
                                Home
                            </Link>
                            <Link href="#about" className="hover:text-gray-200 font-light">
                                About
                            </Link>
                            <Link href="#services" className="hover:text-gray-200 font-light">
                                Services
                            </Link>
                            <Link href="#reviews" className="hover:text-gray-200 font-light">
                                Reviews
                            </Link>
                            <Link href="#contact" className="hover:text-gray-200 font-light">
                                Contact
                            </Link>
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

                    <div className="fixed hidden lg:flex top-2 right-3 flex-row gap-3">
                        <a href="#">
                            <img src="/instagram.png" alt="instagram" width={28} />
                        </a>
                        <a href="#">
                            <img src="/youtube.png" alt="youtube" width={28} />
                        </a>
                        <a href="#">
                            <img src="/facebook.png" alt="facebook" width={28} />
                        </a>
                    </div>

                    <div className="fixed hidden lg:flex top-2 left-3">
                        <a href="#" className="flex flex-row gap-3 items-center font-light">
                            <img src="/call-white.png" alt="call" width={28} />
                            +1 (516) 412-5545
                        </a>
                    </div>
                </motion.nav >
            }
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#d6ebff] w-full border-2 border-[#2b4dac] fixed top-[118px] z-[999] py-4 text-center flex flex-col items-center gap-10"
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
        </>
    );
};

export default Navbar;
