import { relieve } from "@/app/layout";
import { motion } from "framer-motion";

const Review = () => {
    const reviews = [
        {
            name: "Emily",
            review: "Absolutely loved the makeup! Prabjeet is incredibly talented and made me feel so beautiful. Highly recommend!",
            stars: 5,
            initial: "EJ",
            service: "Bridal Makeup"
        },
        {
            name: "Jessica",
            review: "Had such a wonderful experience with Prabjeet. She really listened to what I wanted and the result was stunning. Will definitely be coming back!",
            stars: 4,
            initial: "JW",
            service: "Natural Beauty"
        },
        {
            name: "Sophie",
            review: "Prabjeet is amazing! Her attention to detail is impeccable and she has such a friendly demeanor. Couldn't be happier with my makeup!",
            stars: 5,
            initial: "SL",
            service: "Evening Glam"
        },
        {
            name: "Anna",
            review: "Highly professional and talented makeup artist. Prabjeet made me feel comfortable and beautiful. Will be recommending her to all my friends!",
            stars: 5,
            initial: "AT",
            service: "Fantasy Makeup"
        },
        {
            name: "Michael",
            review: "Prabjeet is an exceptional makeup artist! She made me look great for my photoshoot. I couldn't have asked for better results.",
            stars: 4,
            initial: "MB",
            service: "Bridal Makeup"
        },
        {
            name: "Sarah",
            review: "I had a fantastic experience with Prabjeet. She understood exactly what I wanted and executed it perfectly. Highly recommend her services!",
            stars: 5,
            initial: "SP",
            service: "Evening Glam"
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-screen-2xl mx-auto py-12 px-4"
            id="reviews"
        >
            <h1 className={`${relieve.className} text-[60px] md:text-[90px] font-thin uppercase text-gray-800 mb-6 text-center`}>
                Client Reviews
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto mt-4">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-[#d6ebff] border-[1.6px] border-[#2b4dac] shadow-lg rounded-lg overflow-hidden p-6"
                    >
                        <div className="flex items-center mb-4">
                            <div className="mr-4 bg-[#2b4dac] rounded-full w-12 h-12 flex items-center justify-center">
                                <p className="font-bold text-white">{review.initial}</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-800">{review.name}</p>
                                <p className="text-sm text-gray-600">{review.service}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">{review.review}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Review;
