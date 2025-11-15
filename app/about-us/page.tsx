import CTA from "@/components/CTA";
import Footer from "@/components/footer/Footer";
import AboutUs from "@/components/homePage/AboutUs";
import CoursesProgram from "@/components/homePage/CoursesProgram";
import FaqSection from "@/components/homePage/FaqSection";
import HeroSection from "@/components/homePage/heroSection/HeroSection";
import KeepInTouch from "@/components/homePage/KeepInTouch";
import MissionAndVision from "@/components/homePage/MissionAndVision";
import StatsSection from "@/components/homePage/StatsSection";
import Testimonials from "@/components/homePage/Testimonials";
import TrainingFeatures from "@/components/homePage/TrainingFeatures";
import WhyChoose from "@/components/homePage/WhyChoose";
import NavMenu from "@/components/NavMenu";

export default function Home() {
    return (
        <div className="w-full h-full overflow-hidden">

            <section className="flex flex-col items-center justify-center overflow-hidden bg-white">
                <NavMenu mode="dark" />
            </section>

            <div className="pt-20">
                <AboutUs />
            </div>
            <CTA mode={0} />
            <Testimonials />
            <MissionAndVision />
            <WhyChoose />
            <CTA mode={2} />
            <FaqSection />
            <Footer />
        </div>
    );
}
