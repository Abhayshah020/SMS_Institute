import { CheckCircle } from 'lucide-react'

const facilities = [
    "Fully equipped workshops",
    "Modern training labs",
    "Tools & machinery meeting global standards",
    "Practical workstations",
    "Safety training gear",
    "Smart classrooms",
    "Industry-standard equipment",
    "Comfortable learning environment",
    "Expert supervision and guidance"
]

const trainingFeatures = [
    "National & International Certification",
    "Practical-Focused Curriculum",
    "Job-Ready Skills for Overseas Market",
    "Industry Expert Trainers",
    "Real Work Environment Training",
    "Career Counselling & Job Pathway Support",
    "Safety, Ethics & Professional Conduct Training"
]

export default function TrainingFeatures() {
    return (
        <section id="facilities" className="w-full py-16 md:py-20 bg-background flex justify-center">
            <div className="w-full px-4 md:px-0 md:w-[70%]">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Facilities */}
                    <div
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-1 h-8 bg-accent rounded"></span>
                            Facilities & Resources
                        </h3>
                        <div
                            className="space-y-6"
                        >
                            {facilities.map((facility, index) => (
                                <div key={index} className="flex items-start gap-3 group">
                                    <div >
                                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                                        {facility}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Training Features */}
                    <div
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-1 h-8 bg-secondary rounded"></span>
                            Training Features
                        </h3>
                        <div
                            className="space-y-6"
                        >
                            {trainingFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 group">
                                    <div >
                                        <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
