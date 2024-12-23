import { relieve, stone } from "@/app/layout";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [showModal2, setShowModal2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Implement form submission logic
        // On success:
        setLoading(false);
        setSubmitted(true);
    };

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
                        <a href="mailto:prabjeettrehanmakeover@gmail.com" className="text-gray-800 mb-2 flex flex-row items-center gap-4">
                            <img src="/email.png" alt="email" width={24} />
                            prabjeettrehanmakeover@gmail.com
                        </a>
                        <a href="tel:+15164125545" className="text-gray-800 mb-2 flex flex-row items-center gap-4">
                            <img src="/call.png" alt="call" width={24} />
                            +1 (516) 412-5545
                        </a>
                        <div className="text-gray-800 mb-2 flex flex-row items-center gap-4">
                            <img src="/location.png" alt="location" width={24} />
                            <a href="https://maps.app.goo.gl/quNKdQRd1YcYLzzp7">9 ELM St Hicksville NY 11801</a>
                            |
                            <a href="https://maps.app.goo.gl/1SEUXJGCnt5sbv7p8">10 Lydia ln Edison NJ 08817</a>
                        </div>
                    </div>
                    <button className="bg-[#2b4dac] text-white font-bold py-2 px-8 rounded-[12px] mt-4" onClick={() => setShowModal2(true)}>
                        Book Consultation Now
                    </button>
                </div>
                <motion.div
                    className="w-full md:w-1/2 md:pl-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <form className="bg-[#FDD121] shadow-lg rounded-[32px] px-6 py-8" onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">Reach me for Queries</h2>
                        <div className="mb-4">
                            <input type="text" name="name" placeholder="What's Your Name?" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2b4dac] bg-[#fff]" />
                        </div>
                        <div className="mb-4">
                            <input type="email" name="email" placeholder="What's Your Email?" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2b4dac] bg-[#fff]" />
                        </div>
                        <div className="mb-4">
                            <input type="tel" name="phone" placeholder="What's Your Phone Number?" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2b4dac] bg-[#fff]" />
                        </div>
                        <div className="mb-4">
                            <textarea placeholder="Type Your Message..." name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2b4dac] bg-[#fff]"></textarea>
                        </div>
                        <button type="submit" className="bg-[#2b4dac] text-white font-bold py-2 px-8 rounded-[12px] w-full">
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                        {submitted && <p className="text-green-600 text-center mt-4">Your message has been sent!</p>}
                    </form>
                </motion.div>
            </div>
            {showModal2 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]"
                    >
                        <iframe
                            src="https://calendly.com/prabjeettrehanmakeover/consult-with-prabjeet"
                            width="90%"
                            height="90%"
                            title="Booking Calendar"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-[28px] focus:outline-none"
                            onClick={() => setShowModal2(false)}
                            aria-label="Close modal"
                        >
                            X
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </motion.section>
    );
};

export default Contact;
