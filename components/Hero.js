import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div className="relative">
            {/* Navbar on top */}
            <div className="absolute top-0 left-0 right-0 z-10 opacity-[85%]">
                <Navbar />
            </div>

            {/* Hero image section */}
            <div className="lg:h-[78vh] md:h-[75vh] h-[45vh] bg-[#0a0d08] relative overflow-hidden">
                {/* Image with brightness adjustment */}
                <Image
                    src="/assets/hero-img.jpg"
                    alt="Hero background"
                    className="brightness-[70%] object-cover"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
        </div>
    );
};

export default Hero;
