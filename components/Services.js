import { useState } from "react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
            title: "Bridal Makeup",
            description: "Transform into the stunning bride of your dreams with our personalized bridal makeup service.",
            consultationFee: "$100",
            mainImage: "/bridal-makeup.jpg",
            galleryImages: ["/bridal1.avif", "/bridal2.jpg", "/bridal3.jpg", "/bridal4.avif", "/bridal5.jpg"]
        },
        {
            title: "Evening Glam",
            description: "Get ready to dazzle with our evening glam makeup service, perfect for special occasions and events.",
            consultationFee: "$80",
            mainImage: "/evening-glam.jpg",
            galleryImages: ["/evening1.jpg", "/evening2.jpg", "/evening3.jpg", "/evening4.avif"]
        },
        {
            title: "Natural Beauty",
            description: "Enhance your natural beauty with our subtle yet elegant makeup application for a fresh look.",
            consultationFee: "$60",
            mainImage: "/natural-beauty.jpg",
            galleryImages: ["/natural1.jpg", "/natural2.jpg", "/natural3.jpg"]
        },
        {
            title: "Fantasy Makeup",
            description: "Let your imagination run wild with our fantasy makeup service, perfect for themed events and costume parties.",
            consultationFee: "$120",
            mainImage: "/fantasy-makeup.jpg",
            galleryImages: ["/fantasy1.jpg", "/fantasy2.jpg", "/fantasy3.jpg", "/fantasy4.jpg"]
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
    const [selectedImage, setSelectedImage] = useState(null);

    const slidesToShow = mobile ? 2.9 : 4;

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

    const handleImageClick = (image) => {
        setSelectedImage(image);
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
                        <div className="flex flex-row items-center max-w-screen-lg mx-auto bg-[#d6ebff] border-[1.21px] rounded-[32px] border-[#2b4dac] shadow-lg mb-8 p-5">
                            <div className="md:block hidden">
                                <img src={service.mainImage} alt={service.title} className="w-[400px] object-cover rounded-[24px]" />
                            </div>
                            <div className="px-6 flex flex-col md:items-start items-center text-center md:text-left gap-2">
                                <h2 className={` ${relieve.className} text-[32px] md:text-[40px] uppercase text-gray-800 text-center md:text-left`}>{service.title}</h2>
                                <div className="md:hidden block">
                                    <img
                                        src={service.mainImage}
                                        alt={service.title}
                                        className="w-[400px] object-cover rounded-[24px]"
                                    />
                                </div>
                                <p className="text-gray-600 font-medium">{service.description}</p>
                                <p className="text-gray-700 text-[14px]">Consultation Fee: <b className="text-[16px]">{service.consultationFee} </b> </p>
                                <button className="bg-[#2b4dac] text-white py-2 px-8 rounded-[12px]">
                                    Book Now
                                </button>
                            </div>
                        </div>
                        <div className="w-[90%] 2xl:w-full mx-auto mt-8">
                            <Slider {...settings}>
                                {service.galleryImages.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            src={image}
                                            alt={`${service.title} Gallery ${index + 1}`}
                                            className="2xl:w-[350px] lg:w-[250px] object-cover rounded-lg hover:cursor-pointer"
                                            onClick={() => handleImageClick(image)}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </motion.div>
            ))}
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
                        <img
                            src={selectedImage}
                            alt="Selected Image"
                            className="max-w-full max-h-full"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-[28px] focus:outline-none"
                            onClick={() => setShowModal(false)}
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
