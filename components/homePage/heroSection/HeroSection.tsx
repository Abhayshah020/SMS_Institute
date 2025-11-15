"use client";

import { motion } from "framer-motion";
import NavMenu from "../../NavMenu";
import Rating from "@/components/Rating";

export default function HeroSection() {
    const introDone = true

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
            {/* Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90 bg-black"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 75%, 0% 100%)",
                }}
                poster="/assets/images/heroFallback.jpg" // optional, works as fallback too
            >
                <source src="/assets/videos/heroBg.mp4" type="video/mp4" />
            </video>

            {/* Overlay for better contrast */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 75%, 0% 100%)"
                }}
            />

            <NavMenu mode="light" />


            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center text-center mt-[-15%] md:mt-[-5%] w-[90%] md:w-[70%] md:px-6">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={introDone ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    style={{ letterSpacing: 0.1 }}
                    className="w-full capitalize md:w-[60%] mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-full"
                >
                    Welcome to SMS Skills & Trades Institute
                </motion.p>


                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={introDone ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    style={{ lineHeight: 0.9, letterSpacing: 0.1 }}
                    className="w-full md:w-[90%] uppercase text-4xl md:text-6xl lg:text-7xl py-3 font-extrabold text-white leading-snug sm:leading-tight md:leading-tight tracking-tight"
                >
                    ”Transforming Skills Into <span className="text-blue-400">Success”</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={introDone ? { opacity: 1 } : {}}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    style={{ letterSpacing: 0.1 }}
                    className="w-full capitalize md:w-[60%] mt-2 md:mt-5 text-base sm:text-lg md:text-xl text-gray-300 max-w-full"
                >
                    we empower Nepal’s workforce through hands-on, industry-focused training aligned with{" "}

                    {/* HIGHLIGHT 1 — CTEVT Nepal */}
                    <span className="relative inline-block px-1 text-white text-bold">
                        <motion.span
                            initial={{ width: "0%" }}
                            whileInView={introDone ? { width: "100%" } : {}}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
                            className="absolute inset-0 bg-yellow-400/80 rounded-sm -z-10 origin-left "
                        />
                        CTEVT Nepal
                    </span>

                    {" "}and{" "}

                    {/* HIGHLIGHT 2 — Australian Standards */}
                    <span className="relative inline-block px-1 text-white text-bold">
                        <motion.span
                            initial={{ width: "0%" }}
                            whileInView={introDone ? { width: "100%" } : {}}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.3, ease: "easeInOut" }}
                            className="absolute inset-0 bg-yellow-400/80 rounded-sm -z-10 origin-left"
                        />
                        Australian Standards.
                    </span>
                </motion.p>



                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={introDone ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 mb-2"
                >
                    <motion.a
                        href="/enroll-now"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r cursor-pointer from-blue-400 md:text-xl to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full shadow-xl font-bold transition-all"
                    >
                        Enroll Now
                    </motion.a>
                </motion.div>
                <Rating rating={4.8} totalReviews={405} />
            </div>
        </section>
    );
}
