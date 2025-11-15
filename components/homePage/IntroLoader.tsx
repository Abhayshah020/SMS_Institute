"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useIntro } from "@/context/IntroContext";
import Image from "next/image";

export default function IntroLoader() {
    const { introDone, setIntroDone } = useIntro();

    useEffect(() => {
        const t = setTimeout(() => setIntroDone(true), 1500);
        return () => clearTimeout(t);
    }, []);

    return (
        <div
            className={`fixed inset-0 z-[9999] pointer-events-none ${introDone ? "overflow-hidden" : "overflow-hidden"}`}
        >
            {/* Loader Content */}
            {!introDone && (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center mt-[-10%] z-[1]">
                    {/* Logo */}
                    <div className="mb-6">
                        <Image src='/assets/logo.webp' alt="Logo" width={100} height={100} className="mx-auto" />
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ lineHeight: 1.1 }}
                        className="max-w-[90%] md:max-w-[60%] text-2xl md:text-5xl font-extrabold text-gray-600 tracking-tight leading-snug"
                    >
                        <span className="text-blue-500">
                            SMS{" "}
                            <span className="text-xl md:text-3xl">Skills & Trades Institute</span>
                        </span>
                        <br />
                        "Every journey begins with a single step"
                    </motion.h1>
                </div>
            )}

            {/* OVERLAY DOORS */}
            {/* MOBILE → TOP/BOTTOM */}
            <div className="block md:hidden">
                <motion.div
                    initial={{ y: "0%" }}
                    animate={introDone ? { y: "-100%" } : {}}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="absolute inset-0 top-0 h-[100%] w-full bg-gray-100"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)" }}
                />
                <motion.div
                    initial={{ y: "0%" }}
                    animate={introDone ? { y: "100%" } : {}}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="absolute inset-0 bottom-0 h-[100%] w-full bg-gray-100"
                    style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
                />
            </div>

            {/* DESKTOP → LEFT/RIGHT */}
            <div className="hidden md:block">
                <motion.div
                    initial={{ x: "0%" }}
                    animate={introDone ? { x: "-100%" } : {}}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="absolute inset-y-0 left-0 w-[70%] bg-gray-100"
                    style={{ clipPath: "polygon(0 0, 50% 0, 100% 100%, 0 100%)" }}
                />
                <motion.div
                    initial={{ x: "0%" }}
                    animate={introDone ? { x: "100%" } : {}}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="absolute inset-y-0 right-0 w-[70%] bg-gray-100"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)" }}
                />
            </div>
        </div>
    );
}
