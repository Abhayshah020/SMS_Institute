import CTA from "@/components/CTA";
import Footer from "@/components/footer/Footer";
import FaqSection from "@/components/homePage/FaqSection";
import KeepInTouch from "@/components/homePage/KeepInTouch";
import NavMenu from "@/components/NavMenu";

export default function Home() {
    return (
        <div className="w-full h-full overflow-hidden">
            <section className="flex flex-col items-center justify-center overflow-hidden bg-white">
                <NavMenu mode="dark" />
            </section>
            <div className="pt-20">
                <KeepInTouch />
            </div>
            <CTA mode={1} />
            <FaqSection />
            <Footer />
        </div>
    );
}
