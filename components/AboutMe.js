import { relieve } from "@/app/layout";
import { motion } from "framer-motion";
import Image from "next/image"; // Importing Image from Next.js

const AboutMe = () => {
    return (
        <section className="max-w-screen-2xl mx-auto py-16 px-4 md:px-8">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
                {/* Top Rectangle Container */}
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col lg:flex-row gap-10 items-center justify-between lg:px-20 p-4 lg:py-0 lg:h-[280px] w-full rounded-[32px] bg-[#FDD121] shadow-md"
                >
                    <div className="lg:w-[70%]">
                        <h2 className={`${relieve.className} text-3xl md:text-[40px] uppercase mb-4`}>About Me</h2>
                        <p className="text-lg text-gray-700">
                            Welcome to the captivating world of beauty, where every stroke of a brush tells a unique story. I am Prabjeet, a passionate makeup artist dedicated to enhancing your natural allure and bringing your inner radiance to the forefront. With an eye for detail and a palette of endless possibilities, I specialize in creating stunning looks tailored to your individuality.
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <Image
                            src="/assets/about-me.jpg"
                            alt="About Me"
                            width={230}
                            height={300} // Specify height for better performance
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </motion.div>

                {/* Grid Columns */}
                <div className="lg:mt-20 mt-10 grid grid-cols-1 md:grid-cols-3 items-start gap-4">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center rounded-[32px] bg-[#FDD121] shadow-md lg:w-[400px] lg:h-[420px] p-2"
                    >
                        <Image
                            src="/assets/about-me-left.jpg"
                            alt="Left About Me Image"
                            width={160}
                            height={200} // Specify height for better performance
                            className="rounded-lg shadow-lg mb-4 -mt-10"
                        />
                        <p className="text-gray-700 text-center">
                            Embrace the power of makeup as a tool for self-expression and empowerment. With a blend of creativity and technical skill, I specialize in delivering flawless finishes that inspire awe.
                        </p>
                    </motion.div>

                    {/* Center Column */}
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src="/assets/about-me-centre.jpg"
                                alt="Center About Me Image"
                                width={300}
                                height={400} // Specify height for better performance
                                className="rounded-lg shadow-2xl mb-4"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center rounded-[32px] bg-[#FDD121] shadow-md lg:w-[400px] lg:h-[420px] p-2 mt-6 md:mt-0"
                    >
                        <Image
                            src="/assets/about-me-right.jpg"
                            alt="Right About Me Image"
                            width={200}
                            height={250} // Specify height for better performance
                            className="rounded-lg shadow-lg mb-4 -mt-10"
                        />
                        <p className="text-gray-700 text-center">
                            From subtle enhancements to bold statements, each application is infused with precision and passion. Together, let's unlock your inner allure and unleash a newfound sense of confidence that radiates from within.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
