import { relieve, stone } from "@/app/layout";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-screen-2xl mx-auto py-12 px-4"
            id="contact"
        >
            <h1 className={`${stone.className} text-[60px] md:text-[90px] text-gray-800 mb-6 text-center`}>
                Contact Me
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-lg mx-auto mt-6">
                <div className="w-full md:w-1/2 md:pr-8 mb-8 flex flex-col items-center md:items-start">
                    <p className={`${relieve.className} mb-4 text-[28px] md:text-[40px] leading-none text-center md:text-left`}>
                        Get in touch with me for inquiries or bookings:
                    </p>
                    <div className="flex flex-col justify-between">
                        <p className="text-gray-800 mb-2 flex flex-row items-center gap-4">
                            <img src="/email.png" alt="email" width={24} />
                            example@example.com
                        </p>
                        <p className="text-gray-800 mb-2 flex flex-row items-center gap-4">
                            <img src="/call.png" alt="call" width={24} />
                            +1 123 456 7890
                        </p>
                    </div>
                    <button className="bg-[#2b4dac] text-white font-bold py-2 px-8 rounded-[12px] mt-4">
                        Book Consultation Now
                    </button>
                </div>
                <motion.div
                    className="w-full md:w-1/2 md:pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <form className="bg-[#d6ebff] border-[1.6px] border-[#2b4dac] shadow-lg rounded-[32px] px-6 py-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">Send Message</h2>
                        <div className="mb-4">
                            <input type="text" placeholder="What's Your Name?" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2b4dac] bg-[#eaf5ff]" />
                        </div>
                        <div className="mb-4">
                            <input type="email" placeholder="What's Your Email?" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2b4dac] bg-[#eaf5ff]" />
                        </div>
                        <div className="mb-4">
                            <input type="tel" placeholder="What's Your Phone Number?" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2b4dac] bg-[#eaf5ff]" />
                        </div>
                        <div className="mb-4">
                            <textarea placeholder="Type Your Message..." rows="4" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2b4dac] bg-[#eaf5ff]"></textarea>
                        </div>
                        <button type="submit" className="bg-[#2b4dac] text-white font-bold py-2 px-8 rounded-[12px] w-full">
                            Submit
                        </button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
