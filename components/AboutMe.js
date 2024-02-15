import { relieve } from "@/app/layout";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useRef, useState } from "react";

const AboutMe = () => {
    const reviews = [
        {
            image: "/review1.png",
        },
        {
            image: "/review1.png",
        },
        {
            image: "/review1.png",
        },
    ];

    const autoplayDelay = 3000;
    const videoDelay = 1500;

    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.realIndex);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-screen-2xl mx-auto pb-20"
            id="about"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center">
                <div className="mb-8">
                    <h1 className={`${relieve.className} text-[90px] md:text-[140px] leading-[3rem] md:leading-[5rem] text-gray-800 mb-2 text-center`}>
                        About Me
                    </h1>
                    <div className="flex flex-col md:flex-row items-center md:gap-20 gap-10 w-full mt-6 md:mt-0">
                        <div className="flex flex-col gap-4 w-[80%] md:w-full">
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-lg text-gray-600"
                            >
                                Welcome to the captivating world of beauty, where every stroke of a brush tells a unique story. I am Prabjeet, a passionate makeup artist dedicated to enhancing your natural allure and bringing your inner radiance to the forefront. With an eye for detail and a palette of endless possibilities, I specialize in creating stunning looks tailored to your individuality.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-lg text-gray-600"
                            >
                                Embrace the power of makeup as a tool for self-expression and empowerment. With a blend of creativity and technical skill, I specialize in delivering flawless finishes that inspire awe. From subtle enhancements to bold statements, each application is infused with precision and passion. Together, let&apos;s unlock your inner allure and unleash a newfound sense of confidence that radiates from within.
                            </motion.p>
                        </div>
                        <motion.img
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            src="/intro.png"
                            alt="Intro Image"
                            className="rounded-[32px] mx-auto mb-4 border-[1.6px] border-[#2b4dac]"
                            width={300}
                        />
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <img
                                    src={review.image}
                                    alt={`Review ${index + 1}`}
                                    className="w-full h-[500px] object-cover shadow-md rounded-[32px] mb-4"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="md:hidden w-[90%]">
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1.4}
                        autoplay={{
                            delay: autoplayDelay,
                            disableOnInteraction: false,
                        }}
                        speed={videoDelay}
                        loop={true}
                        centeredSlides={false}
                        className="mySwipe"
                        onSlideChange={handleSlideChange}
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={review.image}
                                    alt={`Review ${index + 1}`}
                                    className="w-full object-cover shadow-md rounded-[32px] mb-4"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutMe;
