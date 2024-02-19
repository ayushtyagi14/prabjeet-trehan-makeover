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
            <div className="lg:h-[96vh] md:h-[75vh] h-[55vh]">
                <Image
                    src="/hero-img.jpg"
                    className="brightness-[70%] object-cover rounded-b-[3%]"
                    fill
                />
            </div>
        </div>
    );
};

export default Hero;
