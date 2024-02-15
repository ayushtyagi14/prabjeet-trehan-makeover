import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#d6ebff] border-[#2b4dac] border-t-2 py-8">
            <div className="max-w-6xl mx-auto px-4 flex md:flex-row flex-col gap-10 md:gap-0 justify-between items-center">
                <img src="/logo.png" alt="Logo" width={150} />
                <div className="flex space-x-4">
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
            </div>
            <p className="text-center mt-10">&copy; 2024 Prabjeet Trehan Makeover</p>
        </footer>
    );
};

export default Footer;
