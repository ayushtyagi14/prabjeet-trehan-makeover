import { amsterdam, relieve } from "@/app/layout";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#FDD121] border-[#2b4dac] border-t-2 py-8">
            <div className="w-[95%] mx-auto px-4 flex md:flex-row flex-col gap-10 md:gap-0 justify-between items-center">
                <h1 className={`${amsterdam.className} lg:text-[24px] text-[28px] font-light text-center tracking-[0.18rem]`}>
                    Prabjeet Trehan
                    <br />
                    Makeover
                </h1>
                <p className={`${relieve.className} text-[28px] text-center w-full md:w-[60%] mx-auto`}>
                    &quot; Transforming faces, revealing stories. Where brushes meet canvas, and every stroke tells a tale of beauty. Embrace the artistry - where confidence is the finest accessory. &quot;
                </p>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/prabjeettrehanmakeover" target="_blank" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/instagram-black.png" alt="instagram" width={28} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCD4_q_-k660JCT-31-GXlEQ" target="_blank" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/youtube-black.png" alt="youtube" width={28} />
                    </a>
                    <a href="https://www.facebook.com/Prabjeettrehanmakeover/" target="_blank" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/facebook-black.png" alt="facebook" width={28} />
                    </a>
                    <a href="https://www.amazon.com/shop/prabjeettrehanmakeover?ref_=cm_sw_r_cp_ud_aipsfshop_MTJ9W1AA5NMPHR6AEBJA" target="_blank" className="p-4 rounded-[32px] shadow-md border-[1.6px] border-[#2b4dac]">
                        <img src="/amazon-black.png" alt="facebook" width={28} />
                    </a>
                </div>
            </div>
            <p className="text-center mt-10">&copy; 2024 Prabjeet Trehan Makeover</p>
        </footer>
    );
};

export default Footer;
