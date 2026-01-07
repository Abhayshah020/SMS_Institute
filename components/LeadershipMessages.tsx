"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

interface Message {
    id: string
    role: string
    name: string
    title: string
    organization: string
    message: string
    experience: string
    color: string
    image: string
    imageAlt: string
}

const messages: Message[] = [
    {
        id: "ceo",
        role: "CEO",
        name: "Manish Kumar Shah",
        title: "Founder & Chief Executive Officer",
        organization: "SMS Skills & Trades Institute",
        message: `At SMS Skills & Trades Institute, our mission is to deliver practical, ethical, and globally relevant education that empowers individuals to build sustainable careers. This mission is deeply personal to me.

With more than Five years of hands-on nursing and aged care experience in Australia, I have worked closely with diverse healthcare teams across multiple aged care facilities, supporting residents with dignity, compassion, and professionalism. My journey as a Nurse in Australia has allowed me to experience international healthcare standards firsthand, particularly in areas such as patient safety, infection control, documentation, teamwork, and person-centred care.

This real-world exposure has strongly shaped the academic philosophy at SMS Skills & Trades Institute. I firmly believe that quality education must be grounded in industry experience, not just classroom theory. That is why our programs especially Nursing Preparation at SMS – For Nurses, By Nurses are designed to reflect actual exam expectations, clinical realities, and professional discipline.

Our Nursing Preparation programs for NLEN (PCL Nursing License Examination) and MEC-CEE (BNS Entrance Examination) are structured to support aspiring nurses with exam-focused learning, computer-based mock tests, and expert guidance from experienced nursing professionals. We prepare students not only to pass exams, but to become confident and responsible healthcare professionals.

Beyond nursing preparation, SMS Skills & Trades Institute offers a diverse range of career-focused programs, developed to meet national and international workforce demands. Our key program areas include:
• Nursing License & Entrance Exam Preparation
• Aged Care & Caregiving Training Programs
• Health & Support Services Training
• Technical & Trade Skill Programs
• Professional Skill Development & Workforce Readiness Programs

Each program is delivered with a strong emphasis on practical skills, compliance, employability, and ethical professionalism.

Having studied and worked across Nepal, Germany, and Australia, I understand the importance of global exposure, structured training, and continuous upskilling. At SMS, we strive to bridge the gap between education and employability, ensuring our students are prepared not only for exams, but for real careers.

I warmly invite students, parents, and professionals to explore our programs and become part of an institute that values experience-driven education, integrity, and long-term success.

At SMS Skills & Trades Institute, we do not just train students—we build professionals for the future.`,
        experience: "5+ years nursing & aged care in Australia",
        color: "from-blue-600 to-blue-400",
        image: "/ceo.jpg",
        imageAlt: "Manish Kumar Shah, CEO",
    },
    {
        id: "director",
        role: "DIRECTOR",
        name: "Namrata Ramtel",
        title: "Director",
        organization: "SMS Skills & Trades Institute",
        message: `At SMS Skills & Trades Institute, our commitment is to deliver practical, ethical, and globally informed education that prepares students for real careers not just examinations.

With more than Ten years of professional nursing experience across Australia and Germany, I have worked within diverse healthcare systems where clinical accuracy, patient safety, infection control, and compassionate, person-centred care are fundamental. This international exposure has reinforced my belief that effective education must be grounded in real-world practice and global standards.

This perspective guides our approach at SMS particularly in Nursing Preparation at SMS – For Nurses, By Nurses. Our programs are designed and delivered by experienced nursing professionals, combining exam-focused learning, computer-based mock tests, and continuous academic support to help students build confidence and competence.

Beyond nursing preparation, SMS offers a range of healthcare, technical, and skill-based programs developed to meet current workforce needs. Across all programs, we emphasise practical skills, employability, professionalism, and ethical practice.

I warmly invite students and families to join an institute that values experience-led education, global exposure, and long-term professional success.`,
        experience: "10+ years nursing in Australia & Germany",
        color: "from-blue-500 to-cyan-400",
        image: "/director.jpg",
        imageAlt: "Namrata Ramtel, Director",
    },
    {
        id: "nursing",
        role: "HEAD OF NURSING DEPARTMENT",
        name: "Sweta Mishra",
        title: "Senior Nurse | Head of Nursing Department",
        organization: "SMS Skills & Trades Institute, Nepal",
        message: `Nursing is a profession built on knowledge, discipline, compassion, and responsibility. Having spent more than 12 years working in high-pressure clinical environments, including surgical and transplant units in leading teaching hospitals of Nepal, I understand that success in nursing examinations and professional practice requires far more than memorisation. It demands clarity of concepts, accuracy, ethical practice, and confidence under pressure.

At SMS Skills & Trades Institute, our Nursing Preparation Program has been carefully structured to reflect the real expectations of nursing examinations and clinical standards. The philosophy "For Nurses, By Nurses" is not just a statement, it is the foundation of our teaching approach. Every lesson, mock test, and feedback session is guided by nurses who have experienced the realities of patient care, infection control, medication safety, and teamwork in demanding healthcare settings.

Our preparation for NLEN (PCL Nursing License Examination) and MEC-CEE (BNS Entrance Examination) focuses on exam-oriented learning supported by daily computer-based mock tests, real exam-pattern practice, and detailed performance evaluation. This ensures students are not only academically prepared but also mentally confident to face the actual CBT examination environment.

As a nursing educator and clinician, I strongly believe that discipline, regular practice, and ethical professionalism are key to long-term success. At SMS, we guide students to develop strong fundamentals, effective time-management skills, and critical thinking abilities that are essential both for examinations and for future clinical practice.

I am proud to lead a dedicated nursing faculty team that is committed to professional integrity, compassionate teaching, and student success. Whether you are a first-time candidate, a repeat examinee, or a working nurse preparing for your next step, you will find structured guidance and genuine mentorship at SMS.

To all aspiring nurses, remember that nursing is not only a career, it is a commitment to care, safety, and lifelong learning. With the right guidance and consistent effort, success is within your reach.

We look forward to supporting you on your professional journey.`,
        experience: "12+ years nursing in surgical & transplant units",
        color: "from-indigo-600 to-blue-500",
        image: "/head_nurse.jpg",
        imageAlt: "Sweta Mishra, Head of Nursing Department",
    },
]

export default function LeadershipMessages() {
    const [expandedId, setExpandedId] = useState<string>("ceo")

    return (
        <div className="py-10 bg-white w-full flex items-center justify-center">
            <div className="w-full px-4 md:px-0 md:w-[70%]">
                {/* Header Section */}
                <div className="text-center my-5">
                    <h1 className="text-5xl md:text-6xl text-slate-900 mb-6 leading-tight text-balance">
                        Messages from{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600">
                            Our Leaders
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Insights from our visionary leaders who are committed to delivering excellence in education and professional
                        development
                    </p>
                </div>

                {/* Messages Grid */}
                <div className="flex flex-col gap-8 mb-16">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            onClick={() => setExpandedId(msg.id)}
                            className={`group cursor-pointer transition-all duration-500 ${expandedId === msg.id ? "md:col-span-3" : ""
                                }`}
                        >
                            <div
                                className={`
                  relative h-full rounded-3xl overflow-hidden bg-white
                  border border-blue-100 hover:border-blue-300
                  shadow-lg hover:shadow-2xl transition-all duration-500
                  ${expandedId === msg.id ? "ring-2 ring-blue-500" : ""}
                `}
                            >
                                {/* Gradient accent - top bar */}
                                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${msg.color}`}></div>

                                {/* Card Content */}
                                <div className="p-4 md:p-8 h-full flex flex-col">
                                    {/* Profile Image Section - Added image display for expanded view */}
                                    <div className="flex flex-col  md:flex-row items-start gap-8 mb-8 pb-8 border-b border-blue-100">
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`relative w-32 h-40 rounded-2xl overflow-hidden ring-4 ring-blue-200 bg-gradient-to-br ${msg.color} shadow-xl`}
                                            >
                                                <Image
                                                    src={msg.image || "/placeholder.svg"}
                                                    alt={msg.imageAlt}
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            {/* Role Badge */}
                                            <div className="mb-4">
                                                <span
                                                    className={`inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest text-white bg-gradient-to-r ${msg.color}`}
                                                >
                                                    {msg.role}
                                                </span>
                                            </div>

                                            {/* Name and Title */}
                                            <h2 className="text-3xl  text-slate-900 mb-2">{msg.name}</h2>
                                            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{msg.title}</p>
                                            <p className="text-xs text-slate-500 mt-2">{msg.organization}</p>

                                            {/* Experience */}
                                            <div className="mt-4 pt-4 border-t border-blue-100">
                                                <p className="text-xs text-blue-600 font-bold uppercase tracking-wide mb-2">
                                                    Professional Experience
                                                </p>
                                                <p className="text-sm text-slate-700 font-semibold">{msg.experience}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Message Preview / Full */}
                                    <div className="flex-grow mb-6">
                                        <div className="space-y-4 text-slate-700 leading-relaxed">
                                            {msg.message.split("\n\n").map((paragraph, idx) => (
                                                <p key={idx} className="text-sm text-justify lg:text-base whitespace-pre-wrap">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Read More / Collapse */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
            </div>
        </div>
    )
}
