import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 right-0 z-10 opacity-[85%]">
                <Navbar />
            </div>
            <div className="lg:h-[75vh] md:h-[75vh] h-[55vh] bg-[#0a0d08] rounded-b-[5%]">
                <Image
                    src="/hero-img.jpg"
                    className="brightness-[70%] object-contain"
                    fill
                />
            </div>
        </div>
    );
};

export default Hero;
