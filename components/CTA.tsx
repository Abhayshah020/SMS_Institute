export default function CTA({ mode }: { mode: number }) {

    const ctaPresets = [
        // 0 — SIMPLE, CALM, PROFESSIONAL
        {
            title: "Start Your Skill Journey Today",
            description:
                "Gain the practical skills and certification you need to build a stable and rewarding career. Our training programs are designed for beginners and professionals looking to upgrade their abilities.",
            buttonLabel: "Enroll Now",
        },

        // 1 — EXCITED, MOTIVATIONAL, ENERGY BOOST
        {
            title: "Your Career Transformation Begins Here!",
            description:
                "This is your moment! Learn real-world skills, train with experts, and unlock opportunities across Nepal and abroad. Thousands have already started—your journey starts with one click!",
            buttonLabel: "Enroll Now",
        },

        // 2 — FUNNY, SLIGHTLY FORCEFUL, PLAYFUL
        {
            title: "Stop Scrolling. Start Skilling.",
            description:
                "Still thinking? Skills won’t magically appear—you’ve got to earn them! Join the training, touch the tools, and level up your future. Don’t wait until your friends go abroad before you decide!",
            buttonLabel: "Enroll Now",
        }
    ];
    const index = Number(mode);
    const data = ctaPresets[index] ?? ctaPresets[0];

    return (
        <section className="w-full py-16 bg-primary text-primary-foreground flex justify-center">
            <div className="w-full px-4 md:px-0 md:w-[70%] text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">{data.title}</h2>
                <p className="text-lg opacity-90 max-w-xl mx-auto">
                    {data.description}
                </p>

                <a
                    href="/enroll-now"
                    className="bg-gradient-to-r cursor-pointer from-blue-400 md:text-xl to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full shadow-xl font-bold transition-all"
                >
                    Enroll Now
                </a>
            </div>
        </section>
    );
}
