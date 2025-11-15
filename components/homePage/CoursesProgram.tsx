"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const courses = [
    {
        title: "AC & Refrigeration Technician",
        overview:
            "This program trains students in installation, maintenance, and repair of air conditioning and refrigeration systems with hands-on exposure.",
        skills: [
            "AC installation & servicing",
            "Cooling systems troubleshooting",
            "Refrigerant handling",
            "Electrical components & safety",
            "Maintenance of commercial & domestic units",
        ],
        careers: [
            "HVAC Technician",
            "Cooling System Installer",
            "Industrial Refrigeration Technician",
            "Overseas HVAC Assistant (Gulf, Europe, Australia)",
        ],
        image: "/assets/coreImageCompressorWebp/1.webp",
        icon: "❄️",
    },
    {
        title: "Aged Care Nurse",
        overview:
            "Learn caregiving skills following Australian Aged Care Standards focusing on safety, hygiene, and patient-centered care.",
        skills: [
            "Personal care support",
            "Manual handling & safety",
            "Infection control",
            "Communication & reporting",
            "Dementia & disability care",
        ],
        careers: [
            "Carer in hospitals",
            "Nursing homes",
            "Disability support worker",
            "Aged care assistant (Australia pathways)",
        ],
        image: "/assets/coreImageCompressorWebp/2.webp",
        icon: "🧓",
    },
    {
        title: "Carpenter",
        overview:
            "Hands-on training in construction carpentry, woodworking machinery, and structural framing.",
        skills: [
            "Furniture making",
            "Construction carpentry",
            "Power tool operation",
            "Measurements & blueprint reading",
        ],
        careers: [
            "Construction Carpenter",
            "Furniture Maker",
            "Interior Finisher",
            "Skilled Worker Overseas",
        ],
        image: "/assets/coreImageCompressorWebp/3.webp",
        icon: "🪚",
    },
    {
        title: "Chef (Cook)",
        overview:
            "Professional culinary training for commercial kitchens with international standards.",
        skills: [
            "Hot & cold kitchen",
            "Food hygiene standards",
            "Continental & Asian cuisine",
            "Menu planning & plating",
        ],
        careers: [
            "Chef/Cook",
            "Kitchen Assistant",
            "Hotel & restaurant staff",
            "Overseas culinary trainee",
        ],
        image: "/assets/coreImageCompressorWebp/4.webp",
        icon: "👨‍🍳",
    },
    {
        title: "Civil Engineer Assistant",
        overview:
            "Practical training for civil engineering support roles.",
        skills: [
            "Surveying",
            "Construction site supervision",
            "Drafting & measurement",
            "Material handling",
            "Project documentation",
        ],
        careers: [
            "Site Assistant",
            "Survey Assistant",
            "Construction Technician",
            "Overseas construction support",
        ],
        image: "/assets/coreImageCompressorWebp/5.webp",
        icon: "🏗",
    },
    {
        title: "Electrician",
        overview:
            "Domestic and industrial wiring, electrical systems, and maintenance following safety standards.",
        skills: [
            "Wiring installation",
            "Panel board connection",
            "Electrical safety",
            "Motor controls",
            "Testing & maintenance",
        ],
        careers: [
            "Electrician",
            "Industrial Maintenance Technician",
            "Domestic Wiring Expert",
            "Overseas electrical assistant",
        ],
        image: "/assets/coreImageCompressorWebp/6.webp",
        icon: "⚡",
    },
    {
        title: "Metal Calibrator",
        overview:
            "Precision measurement and calibration techniques used in manufacturing and quality control.",
        skills: [
            "Vernier caliper & micrometer use",
            "Metal inspection",
            "Measurement accuracy",
            "Quality testing",
        ],
        careers: [
            "Calibration Technician",
            "Metal Quality Inspector",
            "Workshop Technician",
        ],
        image: "/assets/coreImageCompressorWebp/7.webp",
        icon: "⚙",
    },
    {
        title: "Plumber",
        overview:
            "Training in plumbing installation, maintenance, and repair.",
        skills: [
            "Pipe installation",
            "Sanitary systems",
            "Leak inspection",
            "Drainage fitting",
            "Blueprint reading",
        ],
        careers: [
            "Domestic plumber",
            "Construction plumber",
            "Overseas maintenance plumber",
        ],
        image: "/assets/coreImageCompressorWebp/8.webp",
        icon: "🔧",
    },
    {
        title: "Welder",
        overview:
            "Skilled welding with MIG, TIG, and ARC techniques.",
        skills: [
            "Industrial welding",
            "Safety & PPE",
            "Metal joining techniques",
            "Fabrication basics",
        ],
        careers: [
            "Welder",
            "Fabricator",
            "Industrial metal worker",
            "Overseas welding support roles",
        ],
        image: "/assets/coreImageCompressorWebp/9.webp",
        icon: "🔥",
    },
];

export default function CoursesProgram() {
    return (
        <section className="w-full py-20 bg-white flex justify-center">
            <div className="w-full px-4 md:px-0 md:w-[70%]">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ letterSpacing: 0.1 }}
                    className="text-3xl uppercase sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-balance text-center"
                >
                    Our Training Programs
                </motion.h2>

                <div className="flex flex-col gap-16">
                    {courses.map((course, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-black/10">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2 border-l-4 border-blue-500 pl-6 md:pl-10">
                                <h3 className="text-3xl font-bold flex items-center gap-3 mb-3">
                                    <span className="text-4xl">{course.icon}</span> {course.title}
                                </h3>

                                <p className="text-gray-600 text-lg mb-4">{course.overview}</p>

                                <div className="mb-4">
                                    <h4 className="text-xl font-semibold mb-2 text-blue-600">
                                        Skills You Will Learn
                                    </h4>
                                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                                        {course.skills.map((s, idx) => (
                                            <li key={idx}>{s}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-2 text-blue-600">
                                        Career Opportunities
                                    </h4>
                                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                                        {course.careers.map((c, idx) => (
                                            <li key={idx}>{c}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
