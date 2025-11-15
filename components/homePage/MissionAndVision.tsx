'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const missionPoints = [
    "Deliver high-quality, practical, and competency-based training",
    "Provide certification recognized in Nepal and internationally",
    "Strengthen Nepal's workforce and support overseas career pathways"
]

export default function MissionAndVision() {
    return (
        <section className="w-full py-20 bg-white flex justify-center overflow-hidden relative">

            <div className="w-full px-4 md:px-0 md:w-[70%] px-6 md:px-0 relative z-10">
                <div className="relative grid md:grid-cols-2 gap-10 md:gap-14">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="
                            bg-gradient-to-br from-primary/90 to-primary rounded-xl 
                             p-8 shadow-md relative overflow-hidden
                        "
                    >
                        {/* Angled overlay top */}
                        <div
                            className="absolute top-0 left-0 right-0 h-24 opacity-15"
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 70%)",
                                background: "rgba(255,255,255,0.15)",
                            }}
                        />

                        <h3 className="text-2xl font-bold mb-5">Our Mission</h3>
                        <ul className="space-y-4 text-lg">
                            {missionPoints.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="text-accent flex-shrink-0" />
                                    <span>{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="
                            bg-gradient-to-br from-secondary to-secondary/80 
                            text-secondary-foreground rounded-xl p-8 shadow-md relative overflow-hidden
                        "
                    >
                        <h3 className="text-2xl font-bold mb-5">Our Vision</h3>
                        <p className="text-lg leading-relaxed font-light">
                            To be Nepal's leading center for skill development, empowering the youth to
                            achieve professional success across global job markets.
                        </p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-6 italic font-semibold text-sm opacity-80"
                        >
                            "Transforming Skills Into Success."
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
