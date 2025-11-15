"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="py-10 bg-white w-full flex items-center justify-center">
            <div className="w-full px-4 md:px-0 md:w-[70%] text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ letterSpacing: 0.1 }}
                    className="text-3xl uppercase sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-balance text-center"
                >
                    About Us
                </motion.h2>

                {/* Animated Intro Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12"
                >
                    At{" "}
                    <motion.span
                        className="relative font-semibold text-blue-600"
                        initial={{ backgroundSize: "0% 100%" }}
                        whileInView={{
                            backgroundSize: "100% 100%",
                            transition: { duration: 1.2, ease: "easeInOut" },
                        }}
                        viewport={{ once: true, amount: 0.4 }}
                        style={{
                            backgroundImage: "linear-gradient(120deg, #3b82f6 0%, #60a5fa 100%)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "0 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        SMS Skills & Trades Institute
                    </motion.span>
                    , we aren't just a institue — we are dedicated to providing advanced technical
                    and vocational education aligned with global industry needs.
                    Our mission is to empower students with practical training, certified qualifications,
                    and professional readiness for careers in Nepal and abroad. All programs follow
                    {" "}
                    <motion.span
                        className="text-blue-500 font-semibold"
                        whileInView={{ scale: [1, 1.05, 1], transition: { duration: 1 } }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        CTEVT Nepal Curriculum
                    </motion.span>{" "}
                    and
                    {" "}
                    <motion.span
                        className="text-blue-500 font-semibold"
                        whileInView={{ scale: [1, 1.05, 1], transition: { duration: 1 } }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        Australian Qualification Standards
                    </motion.span>{" "}
                    (AQF-style competencies) ensuring global acceptance and industry relevance.
                </motion.p>
            </div>
        </section>
    );
}
