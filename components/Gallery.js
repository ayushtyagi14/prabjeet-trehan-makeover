// components/GallerySection.js

import { relieve } from "@/app/layout";
import { motion } from "framer-motion";

const Gallery = () => {
    const images = [
        "/bridal2.jpg",
        "/evening3.jpg",
        "/fantasy2.jpg",
        "/bridal5.jpg",
        "/natural1.jpg",
        "/fantasy1.jpg",
        "/fantasy4.jpg",
        "/evening4.avif",
        "/natural3.jpg",
        "/natural2.jpg",
        "/bridal1.avif",
        "/bridal4.avif"
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-screen-2xl mx-auto py-12 px-4"
            id="gallery"
        >
            <h1 className={`${relieve.className} text-[90px] md:text-[140px] leading-[3rem] md:leading-[5rem] text-gray-800 mb-6 text-center`}>
                Gallery
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-screen-lg mx-auto">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="overflow-hidden rounded-lg"
                    >
                        <img
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Gallery;
