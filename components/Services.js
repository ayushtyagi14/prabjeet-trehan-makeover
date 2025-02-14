import { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { relieve, stone } from "@/app/layout";

const Services = () => {
    const services = [
        {
            title: "Bride's Wedding Celebration Looks",
            description: "Transform into the stunning bride of your dreams with our personalized bridal makeup service.",
            // consultationFee: "$100",
            mainImage: "/assets/bridal5.jpg",
            galleryImages: [
                { type: "image", url: "/assets/bridal1.jpg" },
                { type: "video", url: "/assets/bridal3.mp4" },
                { type: "image", url: "/assets/bridal2.jpg" },
                { type: "image", url: "/assets/bridal4.jpg" },
                { type: "video", url: "/assets/bridal7.mp4" },
                { type: "image", url: "/assets/bridal5.jpg" },
                { type: "image", url: "/assets/bridal6.jpg" },
            ]
        },
        {
            title: "Evening Glam",
            description: "Get ready to dazzle with our evening glam makeup service, perfect for special occasions and events.",
            consultationFee: "$100",
            mainImage: "/assets/evening0.jpg",
            galleryImages: [
                { type: "image", url: "/assets/evening1.jpg" },
                { type: "image", url: "/assets/evening2.jpg" },
                { type: "image", url: "/assets/evening3.jpg" },
                { type: "image", url: "/assets/evening4.jpg" },
                { type: "image", url: "/assets/evening5.jpg" },
                { type: "image", url: "/assets/evening6.jpg" },
                { type: "image", url: "/assets/evening7.jpg" },
                { type: "image", url: "/assets/evening8.jpg" },
            ]
        },
        {
            title: "Natural Beauty",
            description: "Enhance your natural beauty with our subtle yet elegant makeup application for a fresh look.",
            consultationFee: "$100",
            mainImage: "/assets/natural2.jpg",
            galleryImages: [
                { type: "image", url: "/assets/natural1.jpg" },
                { type: "image", url: "/assets/natural2.jpg" },
                { type: "image", url: "/assets/natural3.jpg" },
                { type: "image", url: "/assets/natural4.jpg" },
                { type: "image", url: "/assets/natural5.jpg" },
                { type: "image", url: "/assets/natural6.jpg" },
            ]
        },
        {
            title: "Self Makeup Grooming Class",
            description: "Elevate your skills with personalized techniques for confident, flawless makeup.",
            consultationFee: "$150 - 6 hrs one day class",
            mainImage: "/assets/classes-banner.jpg",
            galleryImages: [
                { type: "video", url: "/assets/class1.mp4" },
                { type: "video", url: "/assets/class2.mp4" },
            ]
        },
    ];

    const [width, setWidth] = useState(null);
    let mobile = false;

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => {
            window.removeEventListener("resize", () => setWidth(window.innerWidth));
        };
    }, []);

    if (width < 800) {
        mobile = true;
    } else {
        mobile = false;
    }

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const slidesToShow = mobile ? 2.4 : 4.4;

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        prevArrow: false,
        nextArrow: false,
    };

    const handleMediaClick = (media) => {
        setSelectedImage(media.url);
        setShowModal(true);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-screen-2xl mx-auto py-12 px-4"
            id="services"
        >
            <h1 className={`${stone.className} text-[60px] md:text-[90px] text-gray-800 mb-6 text-center`}>
                My Services
            </h1>
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="overflow-hidden mb-8"
                >
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center max-w-screen-lg mx-auto bg-[#FDD121] rounded-[32px] shadow-lg mb-8 p-5">
                            <div className="md:block hidden">
                                <img
                                    src={service.mainImage}
                                    alt={service.title}
                                    className={`
                                        w-[400px] max-h-[300px] object-cover rounded-[24px]
                                        ${index === 0 && 'object-bottom'}
                                        ${index === 1 && 'object-center'}
                                        ${index === 2 && 'object-center'}
                                    `}
                                />
                            </div>
                            <div className="px-5 flex flex-col md:items-start items-center text-center md:text-left gap-2">
                                <h2 className={` ${relieve.className} text-[32px] leading-tight t uppercase text-gray-800 text-center md:text-left`}>{service.title}</h2>
                                <div className="md:hidden block">
                                    <img
                                        src={service.mainImage}
                                        alt={service.title}
                                        className="w-[400px] object-cover rounded-[24px]"
                                    />
                                </div>
                                <p className="text-gray-600 font-medium">{service.description}</p>
                                {service.consultationFee ?
                                    <p className="text-gray-700 text-[14px]">
                                        Service Cost: <b className="text-[16px]">{service.consultationFee} </b>
                                    </p> :
                                    <p className="text-gray-700 text-[14px] font-bold">
                                        Consult to Reserve your day
                                    </p>
                                }
                                <button
                                    className="bg-[#2b4dac] text-white py-2 px-8 rounded-[12px] -ml-1"
                                    onClick={() => setShowModal2(true)}
                                >
                                    Reserve your spot
                                </button>
                            </div>
                        </div>
                        {index < 3 && (
                            <div className="w-[90%] 2xl:w-full mx-auto mt-8">
                                <Slider {...settings}>
                                    {service.galleryImages.map((media, index) => (
                                        <div key={index} className="px-1 lg:px-0">
                                            {media.type === "image" ? (
                                                <img
                                                    src={media.url}
                                                    alt={`${service.title} Gallery ${index + 1}`}
                                                    className="2xl:w-[300px] lg:w-[250px] h-[350px] object-cover object-top rounded-lg hover:cursor-pointer"
                                                    onClick={() => handleMediaClick(media)}
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <video
                                                    src={media.url}
                                                    alt={`${service.title} Video ${index + 1}`}
                                                    className="2xl:w-[300px] lg:w-[250px] h-[350px] object-cover object-top rounded-lg hover:cursor-pointer"
                                                    onClick={() => handleMediaClick(media)}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                />
                                            )}
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        )}
                        {index === 3 && (
                            <div className="flex flex-row justify-center gap-4 mt-8">
                                {service.galleryImages.map((media, index) => (
                                    <div key={index}>
                                        {media.type === "image" ? (
                                            <img
                                                src={media.url}
                                                alt={`${service.title} Gallery ${index + 1}`}
                                                className="w-[250px] h-[250px] object-cover rounded-lg hover:cursor-pointer"
                                                onClick={() => handleMediaClick(media)}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <video
                                                src={media.url}
                                                alt={`${service.title} Video ${index + 1}`}
                                                className="w-[250px] h-full object-cover rounded-lg hover:cursor-pointer"
                                                onClick={() => handleMediaClick(media)}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
            {/* Modal */}
            {showModal && (
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
                        {selectedImage.endsWith(".mp4") ? (
                            <video
                                src={selectedImage}
                                alt="Selected Video"
                                className="max-w-full max-h-full"
                                controls
                            />
                        ) : (
                            <img
                                src={selectedImage}
                                alt="Selected Image"
                                className="max-w-full max-h-full"
                            />
                        )}
                        <button
                            className="absolute top-4 right-4 text-white text-[28px] focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            X
                        </button>
                    </motion.div>
                </motion.div>
            )}
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
                        />
                        <button
                            className="absolute top-0 lg:top-4 right-4 text-white text-[28px] focus:outline-none"
                            onClick={() => setShowModal2(false)}
                        >
                            X
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </motion.section>
    );
};

export default Services;
