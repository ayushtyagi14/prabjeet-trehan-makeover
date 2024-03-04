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
            <div className="lg:h-[78vh] md:h-[75vh] h-[45vh] bg-[#0a0d08] rounded-b-[5%]">
                <Image
                    src="https://res.cloudinary.com/df2jdmyci/image/upload/v1709588398/public/hero-img_haeym4.png"
                    className="brightness-[70%] object-cover"
                    fill
                />
            </div>
        </div>
    );
};

export default Hero;
