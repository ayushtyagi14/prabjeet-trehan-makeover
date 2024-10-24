import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { amsterdam } from "@/app/layout";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolling(window.scrollY > 0);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const socialLinks = useMemo(() => (
        <div className="fixed hidden lg:flex top-2 right-3 flex-row gap-3">
            <a href="https://www.instagram.com/prabjeettrehanmakeover" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.png" alt="instagram" width={28} height={28} />
            </a>
            <a href="https://www.youtube.com/channel/UCD4_q_-k660JCT-31-GXlEQ" target="_blank" rel="noopener noreferrer">
                <Image src="/youtube.png" alt="youtube" width={28} height={28} />
            </a>
            <a href="https://www.facebook.com/Prabjeettrehanmakeover/" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.png" alt="facebook" width={28} height={28} />
            </a>
        </div>
    ), []);

    return (
        <>
            {!scrolling &&
                <div className={`w-full px-10 pt-2 fixed top-1 z-[999] text-white bg-none`}>
                    <div className="w-full flex lg:flex-col flex-row gap-2 justify-between items-center">
                        <h1 className={`${amsterdam.className} lg:text-[24px] text-[18px] font-light text-center tracking-[0.18rem]`}>
                            Prabjeet Trehan
                            <br />
                            Makeover
                        </h1>
                        <div className="lg:flex hidden gap-8 items-center mt-2">
                            {["Home", "About", "Services", "Reviews", "Contact"].map((link, index) => (
                                <Link key={index} href={`#${link.toLowerCase()}`} className="hover:text-gray-200 font-light transition duration-300">
                                    {link}
                                </Link>
                            ))}
                        </div>
                        <div className="lg:hidden flex flex-col items-end gap-2">
                            <a href="tel:+15164125545" className="flex flex-row gap-3 items-center font-light text-[14px]">
                                <Image src="/call-white.png" alt="call" width={20} height={20} />
                                +1 (516) 412-5545
                            </a>
                            <div>
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
                    </div>
                    {socialLinks}
                    <div className="fixed hidden lg:flex top-2 left-3">
                        <a href="tel:+15164125545" className="flex flex-row gap-3 items-center font-light">
                            <Image src="/call-white.png" alt="call" width={28} height={28} />
                            +1 (516) 412-5545
                        </a>
                    </div>
                </div>
            }

            {scrolling &&
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.5 }}
                    className={`fixed top-0 left-0 right-0 z-50 navbar-background bg-[#0a0d08] text-white py-3`}
                >
                    <div className="w-full flex lg:flex-col flex-row gap-2 justify-between items-center py-5 px-4 lg:py-0 lg:px-0">
                        <h1 className={`${amsterdam.className} lg:text-[24px] text-[18px] font-bold text-center tracking-[0.18rem]`}>
                            Prabjeet Trehan
                            <br />
                            Makeover
                        </h1>
                        <div className="lg:flex hidden gap-8 items-center mt-2">
                            {["Home", "About", "Services", "Reviews", "Contact"].map((link, index) => (
                                <Link key={index} href={`#${link.toLowerCase()}`} className="hover:text-gray-200 font-light transition duration-300">
                                    {link}
                                </Link>
                            ))}
                        </div>
                        <div className="lg:hidden flex flex-col items-end gap-2">
                            <a href="tel:+15164125545" className="flex flex-row gap-3 items-center font-bold text-[14px]">
                                <Image src="/call-white.png" alt="call" width={20} height={20} />
                                +1 (516) 412-5545
                            </a>
                            <div>
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
                    </div>
                    {socialLinks}
                    <div className="fixed hidden lg:flex top-2 left-3">
                        <a href="tel:+15164125545" className="flex flex-row gap-3 items-center font-light">
                            <Image src="/call-white.png" alt="call" width={28} height={28} />
                            +1 (516) 412-5545
                        </a>
                    </div>
                </motion.nav>
            }

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="bg-[#FDD121] w-full border-2 border-[#2b4dac] fixed top-[118px] z-[999] py-4 text-center flex flex-col items-center gap-10"
                    >
                        <div className="flex flex-col items-center gap-2">
                            {["Home", "Services", "About", "Testimonial", "Work", "Contact"].map((link, index) => (
                                <Link key={index} href={`#${link.toLowerCase()}`} className="hover:text-gray-500 transition duration-300">
                                    {link}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            {["instagram", "youtube", "facebook"].map((social, index) => (
                                <a key={index} href={`https://www.${social}.com/prabjeettrehanmakeover`} target="_blank" rel="noopener noreferrer" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                                    <Image src={`/${social}.png`} alt={social} width={28} height={28} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
