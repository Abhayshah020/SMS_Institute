"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function NavMenu({ mode }: { mode: 'light' | 'dark' }) {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Our Programs",
            link: "/our-programs",
        },
        {
            title: "About Us",
            link: "/about-us",
        },
        {
            title: "Contact Us",
            link: "/contact-us",
        },
        {
            title: "Enroll Now",
            link: "/enroll-now",
        },
    ]

    return (
        <>
            <nav className="absolute top-6 flex justify-between items-center w-full md:w-[70%] px-4 md:px-0 z-20">
                <div className="hidden md:flex items-center gap-4" style={{ color: mode === 'dark' ? 'black' : 'white' }}>
                    <Phone size={24} fill={mode === 'dark' ? 'black' : "white"} />
                    <span className="font-medium">+61 45 009 8141</span>
                </div>

                <div className="flex gap-1 items-center">
                    <Image src='/assets/logo.webp' alt="Logo" width={50} height={50} className="mx-auto" />
                    <a
                        href="/"
                        className="font-extrabold text-xl sm:text-2xl md:text-3xl text-blue-400 tracking-wide"
                    >
                        SMS{" "}
                        <span className="text-base" style={{ color: mode === 'dark' ? 'black' : 'white' }}>Skills & Trades Institue</span>
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="/enroll-now"
                        className="hidden uppercase cursor-pointer md:inline bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-lg font-semibold transition-all"
                    >
                        Enroll Now
                    </a>

                    <Menu
                        size={24}
                        className="cursor-pointer"
                        style={{ color: mode === 'dark' ? 'black' : 'white' }}
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="menu-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/75 gap-5 z-50 flex flex-col justify-center items-center"
                    >
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                        <X
                            size={32}
                            className="text-white z-10 absolute top-6 right-6 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />

                        {menuItems.map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.link}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white uppercase tracking-tighter cursor-pointer z-10 text-3xl md:text-4xl font-bold tracking-wide px-6 py-2 hover:text-yellow-400 transition-colors"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                {item.title}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
