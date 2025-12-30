"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavMenu({ mode }: { mode: 'light' | 'dark' }) {
    const pathname = usePathname();
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
    ]

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-[rgba(0,0,0,0.1)] bg-white/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo Section */}
                    <div className="flex gap-1 items-center">
                        <Image src='/assets/logo.webp' alt="Logo" width={50} height={50} className="mx-auto" />
                        <a href="/" className="font-extrabold text-xl sm:text-2xl md:text-3xl text-blue-400 tracking-wide" >
                            SMS{" "}
                            <span className="text-base" style={{ color: 'black' }}>
                                Skills & Trades Institue
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12">
                        {menuItems.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.link}
                                className={`font-medium px-6 py-2 transition-colors hover:text-blue-500 ${pathname === item.link ? "text-blue-500" : ""}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    <a href="/enroll-now" className="hidden uppercase cursor-pointer md:inline bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-lg font-semibold transition-all" > Enroll Now </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-black p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-background/90 border-t border-gray-700">
                        <div className="flex flex-col gap-2 p-4">
                            {menuItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.link}
                                    className={`font-medium px-6 py-2 transition-colors hover:text-blue-500 ${pathname === item.link ? "text-blue-500" : ""}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
