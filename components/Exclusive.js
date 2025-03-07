import React from 'react'
import { stone } from "@/app/layout";
import { motion } from "framer-motion";
import Link from 'next/link';

const Exclusive = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-screen-2xl mx-auto py-12 px-4"
            // id="amazon"
        >
            <h1 className={`${stone.className} text-[60px] md:text-[90px] text-gray-800 text-center`}>
                Click To See Exclusive Products
            </h1>
            <div className="flex flex-col w-[65%] mx-auto gap-4">
                <h2 className='text-center md:text-[24px] text-[20px] font-light -mt-6 tracking-wide'>
                    Click below to explore my handpicked Amazon storefront recommendations!
                </h2>
                <div className='mx-auto'>
                    <Link
                        href={'https://www.amazon.com/shop/prabjeettrehanmakeover?ref_=cm_sw_r_cp_ud_aipsfshop_15X8QAFE3SYYQKQCWRJE'}
                        target='_blank'
                    >
                        <img src="/amazon-big.png" alt="amazon" className='border-[2px] border-[#2b4dac] rounded-[24px] p-4 shadow-md hover:shadow-xl cursor-pointer' />
                    </Link>
                </div>
            </div>
        </motion.section>
    )
}

export default Exclusive
