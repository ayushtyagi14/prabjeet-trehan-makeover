import { relieve } from "@/app/layout";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center text-center md:text-left justify-center gap-6 pt-40 pb-20 px-4 max-w-screen-2xl mx-auto"
        >
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="md:w-1/2"
            >
                <h1
                    className={`${relieve.className} text-[90px] md:text-[140px] leading-[3rem] md:leading-[5rem] text-center md:text-left mb-4 text-gray-900`}
                >
                    Beauty is a way of life
                </h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-[22px] text-center md:text-left my-8 text-gray-700 md:w-[70%]"
                >
                    Elevate your beauty with our expert artistry. Book now for a personalized, radiant makeover.
                </motion.p>
                <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="bg-[#2b4dac] text-white py-2 px-8 rounded-[12px]"
                >
                    Book Now
                </motion.button>
            </motion.div>
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-6 md:mt-0"
            >
                <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    src="/prabjeet.jpg"
                    alt="Makeup Artist"
                    className="rounded-[32px] border-[1.6px] border-[#2b4dac]"
                    width={350}
                    height={350}
                />
            </motion.div>
        </motion.section>
    );
};

export default Hero;
