"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Heart, BookOpen, Award, Users, CheckCircle } from "lucide-react"
import Footer from "@/components/footer/Footer"
import NavMenu from "@/components/NavMenu"

export default function NursingPrepPage() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
    const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null)

    const toggleAccordion = (id: string) => {
        setExpandedAccordion(expandedAccordion === id ? null : id)
    }

    return (
        <div className="w-full h-full overflow-hidden">
            {/* <IntroLoader /> */}
            <section className="flex flex-col items-center justify-center overflow-hidden bg-white">
                <NavMenu mode="dark" />
            </section>
            <main className="min-h-screen bg-white">
                {/* Hero Section - Premium & Calm */}
                <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-teal-50">
                    {/* Soft background shapes */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 right-10 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Content */}
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                                        ✨ For Nurses, By Nurses
                                    </div>
                                    <h1 className="text-6xl sm:text-7xl  font-bold text-slate-900 leading-tight">
                                        Master Your Nursing Exam
                                    </h1>
                                    <p className="text-xl text-slate-700 leading-relaxed max-w-xl font-light">
                                        Transform your nursing career with SMS Skills & Trades Institute. Expert-led, compassionate education
                                        designed specifically for nursing excellence. Join 500+ nurses who trusted us.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button
                                        size="lg"
                                        className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all px-8 py-6 text-base"
                                    >
                                        Start Your Journey
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-teal-200 text-teal-700 hover:bg-teal-50 rounded-lg px-8 py-6 text-base bg-transparent"
                                    >
                                        Learn More
                                    </Button>
                                </div>

                                {/* Trust Stats */}
                                <div className="pt-8 grid grid-cols-3 gap-8 border-t border-slate-200">
                                    <div>
                                        <p className="text-4xl font-bold text-teal-600">6</p>
                                        <p className="text-sm text-slate-600 font-medium mt-2">Week Intensive</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-teal-600">500+</p>
                                        <p className="text-sm text-slate-600 font-medium mt-2">Students Trained</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-teal-600">95%</p>
                                        <p className="text-sm text-slate-600 font-medium mt-2">Success Rate</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="relative h-96 sm:h-full">
                                <img
                                    src="/1.jpg"
                                    alt="Nurse caring for patient with compassion"
                                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent rounded-3xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust & Values Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { icon: Heart, label: "Compassionate Care", desc: "Patient-centered approach" },
                                { icon: Users, label: "Community Focused", desc: "Supporting each other" },
                                { icon: Award, label: "Excellence Driven", desc: "Quality in all we do" },
                                { icon: BookOpen, label: "Evidence-Based", desc: "Latest research & practice" },
                            ].map((item, idx) => (
                                <div key={idx} className="text-center space-y-3 group">
                                    <div className="flex justify-center">
                                        <div className="bg-teal-100 p-4 rounded-2xl group-hover:bg-teal-200 transition-colors">
                                            <item.icon className="w-8 h-8 text-teal-700" />
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-slate-900">{item.label}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Exam Programs Section - Cards */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-teal-50 to-amber-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl  font-bold text-slate-900 mb-4">Exam Programs We Master</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                                Comprehensive preparation for Nepal's most important nursing examinations
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* NLEN Program */}
                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                                <div className="relative h-72 bg-teal-100 overflow-hidden">
                                    <img
                                        src="/4.jpg"
                                        alt="Nursing student studying"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                                </div>
                                <div className="p-10 space-y-6">
                                    <div>
                                        <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                            PCL Level
                                        </span>
                                        <h3 className="text-3xl  font-bold text-slate-900">NLEN Exam</h3>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed font-light">
                                        PCL Nursing License Examination - Computer-based multiple choice format with approximately 150 MCQs
                                        over 3 hours.
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "Latest exam pattern alignment",
                                            "Official NNC syllabus coverage",
                                            "Daily CBT mock tests included",
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-slate-700">
                                                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                                <span className="font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium">
                                        Learn More
                                    </Button>
                                </div>
                            </Card>

                            {/* MEC-CEE Program */}
                            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                                <div className="relative h-72 bg-amber-100 overflow-hidden">
                                    <img
                                        src="/3.jpg"
                                        alt="Nursing team collaboration"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                                </div>
                                <div className="p-10 space-y-6">
                                    <div>
                                        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                            BNS Level
                                        </span>
                                        <h3 className="text-3xl  font-bold text-slate-900">MEC-CEE Exam</h3>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed font-light">
                                        BNS Entrance Examination - Targeted preparation strictly aligned with the latest exam pattern and
                                        curriculum.
                                    </p>
                                    <ul className="space-y-3">
                                        {["Regular syllabus updates", "CBT format training", "Subject weightage analysis"].map(
                                            (item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-slate-700">
                                                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                                    <span className="font-light">{item}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium">
                                        Learn More
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Choose SMS - Feature Cards */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl  font-bold text-slate-900 mb-4">Why Choose SMS?</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                                Seven core reasons nurses trust us for their exam preparation
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    num: "01",
                                    title: "Nurses Training Nurses",
                                    desc: "Experienced faculty with strong academic backgrounds",
                                },
                                { num: "02", title: "6-Week Intensive Focus", desc: "Carefully structured comprehensive coverage" },
                                { num: "03", title: "Daily CBT Mock Tests", desc: "Real exam-pattern practice and familiarity" },
                                { num: "04", title: "Performance Analysis", desc: "Detailed topic-wise evaluation reports" },
                                { num: "05", title: "Time Management", desc: "Expert strategies for efficient exam completion" },
                                { num: "06", title: "Mental Preparation", desc: "Reduce anxiety through realistic practice" },
                            ].map((item, idx) => (
                                <Card
                                    key={idx}
                                    className="p-8 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all bg-gradient-to-br from-white to-teal-50"
                                >
                                    <div className="text-5xl  font-bold text-teal-200 mb-4">{item.num}</div>
                                    <h3 className="text-xl  font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Subjects - Grid with Icons */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-amber-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl  font-bold text-slate-900 mb-4">Comprehensive Subject Coverage</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                                All major nursing subjects required for NLEN and MEC-CEE examinations
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {[
                                "Fundamentals of Nursing",
                                "Medical–Surgical Nursing",
                                "Community Health Nursing",
                                "Child Health Nursing",
                                "Midwifery & Gynecology",
                                "Mental Health Nursing",
                                "Nursing Ethics & Professional Practice",
                                "Exam Strategy & Time Management",
                            ].map((subject, idx) => (
                                <Card
                                    key={idx}
                                    className="p-6 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all bg-white"
                                >
                                    <div className="text-3xl mb-3">{"🏥"}</div>
                                    <p className=" font-semibold text-slate-900">{subject}</p>
                                </Card>
                            ))}
                        </div>

                        {/* Subject Learning Highlight */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16 border-t border-slate-200">
                            <div className="space-y-6">
                                <h3 className="text-4xl  font-bold text-slate-900">Deep Dive Learning</h3>
                                <p className="text-slate-700 leading-relaxed font-light">
                                    Each subject is taught with real-world clinical scenarios and practical applications. Our nurse
                                    educators bring their bedside experience directly into the classroom.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Clinical case studies and real-world applications",
                                        "Latest research and evidence-based practice",
                                        "Interactive group discussions and Q&A sessions",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                                            <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/2.jpg"
                                    alt="Professional nursing educator"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Features - Accordion Style */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl  font-bold text-slate-900 mb-4">What's Included</h2>
                            <p className="text-xl text-slate-600 font-light">
                                Everything you need to excel in your nursing examination
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    id: "materials",
                                    title: "📚 Premium Study Materials",
                                    items: [
                                        "Updated MCQ booklets",
                                        "Notes aligned with NNC syllabus",
                                        "Practice questions & revision materials",
                                        "Digital access to all resources",
                                    ],
                                },
                                {
                                    id: "cbt",
                                    title: "💻 Daily CBT Mock Tests",
                                    items: [
                                        "Real exam-pattern practice",
                                        "Familiarize with CBT environment",
                                        "Track progress daily",
                                        "Timed full-length simulations",
                                    ],
                                },
                                {
                                    id: "feedback",
                                    title: "📊 Performance Feedback & Support",
                                    items: [
                                        "Detailed performance analysis",
                                        "Topic-wise evaluation reports",
                                        "Personalised guidance from faculty",
                                        "Continuous improvement tracking",
                                    ],
                                },
                                {
                                    id: "modes",
                                    title: "🎓 Flexible Learning Modes",
                                    items: [
                                        "Face-to-Face Classes at Koteshwor, Kathmandu",
                                        "Online Classes for remote learners",
                                        "Work-friendly scheduling options",
                                        "Choose the mode that fits your schedule",
                                    ],
                                },
                            ].map((accordion) => (
                                <Card
                                    key={accordion.id}
                                    className="border border-slate-200 overflow-hidden hover:border-teal-300 transition-colors"
                                >
                                    <button
                                        onClick={() => toggleAccordion(accordion.id)}
                                        className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-white to-teal-50 hover:from-teal-50 hover:to-amber-50 transition-colors"
                                    >
                                        <h3 className="text-lg  font-bold text-slate-900">{accordion.title}</h3>
                                        <ChevronDown
                                            className={`w-5 h-5 text-teal-600 transition-transform ${expandedAccordion === accordion.id ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {expandedAccordion === accordion.id && (
                                        <div className="p-6 border-t border-slate-200 bg-white">
                                            <ul className="space-y-3">
                                                {accordion.items.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                                                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                                        <span className="font-light">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Program Timeline */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-teal-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl  font-bold text-slate-900 mb-4">6-Week Intensive Journey</h2>
                            <p className="text-xl text-slate-600 font-light">Your structured path to nursing exam success</p>
                        </div>

                        <div className="space-y-8">
                            {[
                                {
                                    week: "Week 1",
                                    title: "Foundation & Orientation",
                                    desc: "Introduction to exam pattern, syllabus overview, and classroom orientation",
                                },
                                {
                                    week: "Week 2-3",
                                    title: "Core Subject Mastery",
                                    desc: "In-depth coverage of all major nursing subjects with clinical case studies",
                                },
                                {
                                    week: "Week 4-5",
                                    title: "Practice & Performance",
                                    desc: "Daily full-length CBT mock tests with detailed performance analysis",
                                },
                                {
                                    week: "Week 6",
                                    title: "Final Review & Confidence",
                                    desc: "Revision, weak area improvement, and exam strategies",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center  font-bold text-lg">
                                            {idx + 1}
                                        </div>
                                        {idx < 3 && <div className="w-1 h-16 bg-teal-200 mt-2"></div>}
                                    </div>
                                    <Card className="flex-1 p-8 border border-slate-200 hover:border-teal-300 transition-colors bg-white">
                                        <span className="inline-block text-sm font-medium text-teal-600 mb-2">{item.week}</span>
                                        <h3 className="text-xl  font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 font-light">{item.desc}</p>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section - Accordion */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl  font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-xl text-slate-600 font-light">Everything you need to know about our program</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "Who can enroll in this program?",
                                    a: "PCL graduates, BNS aspirants, repeat candidates, and working nurses/interns seeking structured, exam-focused preparation are welcome to enroll.",
                                },
                                {
                                    q: "What is the exam pattern for NLEN?",
                                    a: "NLEN is a computer-based multiple-choice examination with approximately 150 MCQs spread over 3 hours, covering all major nursing subjects as per Nepal Nursing Council guidelines.",
                                },
                                {
                                    q: "Do you offer online classes?",
                                    a: "Yes, we offer both face-to-face classes at Koteshwor, Kathmandu and online classes for students outside Kathmandu or with work commitments.",
                                },
                                {
                                    q: "How are the daily CBT tests structured?",
                                    a: "Our daily CBT mock tests follow the actual exam structure, help improve speed and accuracy, familiarize you with the CBT environment, and reduce exam anxiety through realistic practice.",
                                },
                                {
                                    q: "What kind of feedback do students receive?",
                                    a: "Every student receives detailed performance analysis, topic-wise evaluation reports, and personalised guidance from our experienced nursing faculty.",
                                },
                                {
                                    q: "Are study materials provided?",
                                    a: "Yes, students receive updated MCQ booklets, notes aligned with NNC syllabus, practice questions, revision materials, and digital access to all resources.",
                                },
                            ].map((faq, idx) => (
                                <Card
                                    key={idx}
                                    className="border border-slate-200 overflow-hidden hover:border-teal-300 transition-colors"
                                >
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                        className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-white to-teal-50 hover:from-teal-50 hover:to-amber-50 transition-colors"
                                    >
                                        <h3 className="text-lg  font-bold text-slate-900 text-left">{faq.q}</h3>
                                        <ChevronDown
                                            className={`w-5 h-5 text-teal-600 transition-transform flex-shrink-0 ml-4 ${expandedFaq === idx ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {expandedFaq === idx && (
                                        <div className="p-6 border-t border-slate-200 bg-white">
                                            <p className="text-slate-700 font-light leading-relaxed">{faq.a}</p>
                                        </div>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enrollment Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-amber-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl  font-bold text-slate-900 mb-6">Ready to Begin Your Journey?</h2>
                        <p className="text-xl text-slate-700 mb-8 font-light leading-relaxed">
                            Seats are limited. Early enrollment is strongly recommended. Contact us today to secure your spot in the
                            next cohort.
                        </p>

                        <div className="bg-white rounded-2xl p-10 shadow-lg space-y-6 text-center">
                            <div>
                                <p className="text-sm text-slate-600 mb-2 font-medium">📞 Call or WhatsApp</p>
                                <a href="tel:+977-9744435902" className="text-3xl font-bold text-teal-600 hover:text-teal-700">
                                    +977 9744435902
                                </a>
                            </div>
                            <div className="border-t border-slate-200"></div>
                            <div>
                                <p className="text-sm text-slate-600 mb-2 font-medium">📍 Visit Us</p>
                                <p className="text-lg text-slate-900 font-medium">
                                    SMS House, Koteshwor (Opposite Bhatbhateni)
                                    <br />
                                    Kathmandu, Nepal
                                </p>
                            </div>
                            <div className="border-t border-slate-200"></div>
                            <Button
                                size="lg"
                                className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-12 py-6 text-lg font-medium"
                            >
                                Request Enrollment Information
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Trust Statement */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-slate-700 font-light text-lg leading-relaxed">
                            <span className=" font-bold text-slate-900">SMS Skills & Trades Institute</span> is committed to
                            professional nursing education, exam-oriented training, ethical guidance, and measurable results. We are not
                            just a coaching institute — we are your trusted academic partner in professional nursing success.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
