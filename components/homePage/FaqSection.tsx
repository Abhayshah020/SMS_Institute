"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What types of skill training programs do you offer?",
        answer:
            "We provide hands-on technical and vocational training in trades such as Electrical, Plumbing, Welding, Construction, Automotive, HVAC, Industrial Safety, and more. All courses follow CTEVT Nepal and Australian competency standards.",
    },
    {
        question: "Are the certificates recognized in Nepal and abroad?",
        answer:
            "Yes. Our training is aligned with CTEVT Nepal and international standards, making our certifications valid for both local employment and overseas job opportunities including Australia, Gulf countries, and Europe.",
    },
    {
        question: "Is the training fully practical?",
        answer:
            "Absolutely. Over 70–80% of our training is practical-based. Students learn directly in real workshop environments using industry-standard tools, machinery, and equipment.",
    },
    {
        question: "Do you provide job placement or career guidance?",
        answer:
            "Yes, we offer dedicated career counselling, overseas job preparation support, documentation guidance, and connections with manpower agencies and industry partners.",
    },
    {
        question: "Are the trainers qualified and certified?",
        answer:
            "All trainers are certified, experienced professionals with real industry backgrounds. Many have international work experience and hold recognized qualifications in their respective trades.",
    },
    {
        question: "Can I join even if I have no prior experience?",
        answer:
            "Yes! Our courses start from the basics and are designed for both beginners and semi-skilled learners. We focus on competency development step-by-step.",
    },
    {
        question: "Do you offer flexible class timings?",
        answer:
            "Yes. We provide morning, day, and evening shifts to support students who work or attend school. Weekend batches are available for selected courses.",
    }
];


export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-20 bg-gray-50 flex justify-center w-full">
            <div className="w-full px-4 md:px-0 md:w-[70%]">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ letterSpacing: 0.1 }}
                    className="text-3xl uppercase sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-balance text-center"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 sm:p-5 md:p-6"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex cursor-pointer justify-between items-start w-full text-left"
                            >
                                <span className="font-semibold text-base sm:text-lg md:text-lg text-gray-800">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-2 flex-shrink-0"
                                >
                                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="overflow-hidden mt-2 sm:mt-3"
                                    >
                                        <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
