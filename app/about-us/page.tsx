import CTA from "@/components/CTA";
import Footer from "@/components/footer/Footer";
import AboutUs from "@/components/homePage/AboutUs";
import FaqSection from "@/components/homePage/FaqSection";
import MissionAndVision from "@/components/homePage/MissionAndVision";
import Testimonials from "@/components/homePage/Testimonials";
import WhyChoose from "@/components/homePage/WhyChoose";
import LeadershipMessages from "@/components/LeadershipMessages";
import NavMenu from "@/components/NavMenu";

export default function Home() {
    return (
        <div className="w-full h-full overflow-hidden">

            <section className="flex flex-col items-center justify-center overflow-hidden bg-white">
                <NavMenu mode="dark" />
            </section>
            <div className="pt-20">
                <LeadershipMessages />
            </div>
            <AboutUs />
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
