"use client";

import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

interface Review {
    review: string;
    rate: number;
    name: string;
    position: string;
}

const reviews: Review[] = [
    {
        review:
            "The welding training here completely transformed my career. The practical sessions were exactly like real job sites, and the instructors were very supportive. Thanks to their guidance, I am now working confidently in Qatar with a much better salary.",
        rate: 5,
        name: "Ramesh Yadav",
        position: "Welder – Doha, Qatar",
    },
    {
        review:
            "I joined the Electrical course with zero experience, but the trainers taught everything from the basics to advanced industrial wiring. The Australian-standard training system helped me qualify for an overseas skill test easily.",
        rate: 4.5,
        name: "Bibek Rai",
        position: "Electrical Technician",
    },
    {
        review:
            "The workshops are well-equipped, clean, and fully practical-focused. As an employer, I have hired several graduates from this institute, and they all perform exceptionally well on-site. Their skill level is impressive.",
        rate: 5,
        name: "Sanjay Shrestha",
        position: "HR Manager – Construction Company Nepal",
    },
    {
        review:
            "I loved the training environment and the teaching approach. Trainers explain everything clearly and make sure every student gets hands-on practice. The job counselling team also helped me prepare my documents for overseas applications.",
        rate: 4,
        name: "Laxmi Sharma",
        position: "Auto Mechanical Trainee",
    }
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const cardWidth = 340; // width + margin
        scrollRef.current.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    let startX = 0;
    let startY = 0;

    const onTouchStart = (e: React.TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        const dx = Math.abs(e.touches[0].clientX - startX);
        const dy = Math.abs(e.touches[0].clientY - startY);

        // If vertical swipe is bigger, prevent horizontal scroll
        if (dy > dx) {
            e.stopPropagation();
        }
    };


    return (
        <section className="py-20 bg-gray-50 w-full flex flex-col items-center justify-center">
            <div className="w-full px-4 md:px-0 md:w-[70%] text-center  relative">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ letterSpacing: 0.1 }}
                    className="text-3xl uppercase sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center"
                >
                    What Our Clients Say
                </motion.h2>


                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center justify-between w-full absolute top-15 left-0 px-4 z-10">
                    <button
                        onClick={() => scroll("left")}
                        className="bg-white shadow-lg p-3 rounded-full cursor-pointer  hover:scale-110 transition"
                    >
                        <ArrowLeft />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="bg-white shadow-lg p-3 rounded-full cursor-pointer  hover:scale-110 transition"
                    >
                        <ArrowRight />
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-3 overflow-x-auto snap-x snap-mandatory pr-4 no-scrollbar"
                    style={{ scrollBehavior: "smooth" }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                >

                    {reviews.map((r, idx) => (
                        <div
                            key={idx}
                            className="w-[280px] md:w-[360px] bg-white p-6 my-5 flex flex-col items-center 
                           justify-center rounded-2xl shadow-lg flex-shrink-0 snap-start"
                        >

                            {/* Rating */}
                            <div className="flex items-center mb-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i + 1 <= Math.floor(r.rate)
                                            ? "text-yellow-400"
                                            : i < r.rate
                                                ? "text-yellow-400/50"
                                                : "text-gray-300"
                                            }`}
                                    />
                                ))}
                                <span className="ml-2 text-gray-600 font-medium">
                                    {r.rate.toFixed(1)}
                                </span>
                            </div>

                            <p className="text-gray-700 mb-4 break-words">
                                {r.review}
                            </p>

                            <div className="mt-2">
                                <p className="font-semibold text-gray-900">{r.name}</p>
                                <p className="text-gray-500 text-sm">{r.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
