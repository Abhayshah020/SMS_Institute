"use client";

import { animate, motion } from "framer-motion";
import { Award, Smile, Users, Wrench } from "lucide-react";
import { useState } from "react";

const stats = [
    { label: "People We have Taught", value: 500, icon: Users },
    { label: "Our Expert Technicians", value: 25, icon: Wrench },
    // { label: "Satisfied Clients", value: 5000, icon: Smile },
    { label: "Years of Experience", value: 5, icon: Award },
];

export default function StatsSection() {
    return (
        <section className="pt-10 pb-20 bg-blue-50 flex justify-center">
            <div className="w-full px-4 md:px-0 md:w-[70%] text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ letterSpacing: 0.1 }}
                    className="text-3xl uppercase sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-balance text-center"
                >
                    Our Impact
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {stats.map(({ label, value, icon: Icon }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all"
                        >
                            <Icon className="mx-auto mb-4 text-blue-600" size={36} />
                            <AnimatedNumber target={value} />
                            <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">
                                {label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AnimatedNumber({ target }: { target: number }) {
    const [count, setCount] = useState(0);

    const handleInView = () => {
        animate(0, target, {
            duration: 1.5,
            ease: "easeOut",
            onUpdate: (value) => setCount(Math.floor(value)),
        });
    };

    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            onViewportEnter={handleInView}
            className="block text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900"
        >
            {count.toLocaleString()}+
        </motion.span>
    );
}
