import { amsterdam, relieve } from "@/app/layout";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#d6ebff] border-[#2b4dac] border-t-2 py-8">
            <div className="w-[95%] mx-auto px-4 flex md:flex-row flex-col gap-10 md:gap-0 justify-between items-center">
                <h1 className={`${amsterdam.className} lg:text-[24px] text-[18px] font-light text-center tracking-[0.18rem]`}>
                    Prabjeet Trehan
                    <br />
                    Makeover
                </h1>
                <p className={`${relieve.className} text-[28px] text-center w-[40%] 2xl:w-[25%] mx-auto`}>
                    &quot; Beauty is being comfortable and confident in your own skin &quot;
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/instagram-black.png" alt="instagram" width={28} />
                    </a>
                    <a href="#" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/youtube-black.png" alt="youtube" width={28} />
                    </a>
                    <a href="#" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/facebook-black.png" alt="facebook" width={28} />
                    </a>
                </div>
            </div>
            <p className="text-center mt-10">&copy; 2024 Prabjeet Trehan Makeover</p>
        </footer>
    );
};

export default Footer;
