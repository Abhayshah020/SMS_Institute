import { Globe, Hammer, BookOpen, Users, Plane, Briefcase } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-20 bg-white flex justify-center">
      <div className="w-full px-4 md:px-0 md:w-[70%]">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            style={{ letterSpacing: 0.1 }}
            className="text-3xl uppercase sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-balance text-center"
          >
            Why Choose SMS?
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We transform your skills into real career opportunities through
            high-quality training, expert guidance, and practical excellence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/40 backdrop-blur-md border border-gray-200 hover:border-blue-400 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-default group">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 shadow-md group-hover:shadow-blue-300/50 transition-all">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              Globally Recognized Training
            </h3>
            <p className="text-gray-600 leading-relaxed">
              CTEVT Nepal and Australian Standard certification recognized internationally
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/40 backdrop-blur-md border border-gray-200 hover:border-blue-400 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-default group">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 shadow-md group-hover:shadow-blue-300/50 transition-all">
              <Hammer size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              Fully Practical Workshops
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Hands-on training with industry-standard tools and equipment
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/40 backdrop-blur-md border border-gray-200 hover:border-blue-400 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-default group">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 shadow-md group-hover:shadow-blue-300/50 transition-all">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              Comprehensive Curriculum
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Job-focused programs aligned with market demands
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/40 backdrop-blur-md border border-gray-200 hover:border-blue-400 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-default group">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 shadow-md group-hover:shadow-blue-300/50 transition-all">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              Expert Trainers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Industry professionals with years of practical experience
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white/40 backdrop-blur-md border border-gray-200 hover:border-blue-400 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-default group">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 shadow-md group-hover:shadow-blue-300/50 transition-all">
              <Plane size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              Overseas Pathways
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Career opportunities for overseas employment in Gulf, Europe, Australia
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white/40 backdrop-blur-md border border-gray-200 hover:border-blue-400 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-default group">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 shadow-md group-hover:shadow-blue-300/50 transition-all">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              Job Ready Training
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Real-world skills that make you immediately employable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
