import CTA from "@/components/CTA";
import Footer from "@/components/footer/Footer";
import CoursesProgram from "@/components/homePage/CoursesProgram";
import FaqSection from "@/components/homePage/FaqSection";
import TrainingFeatures from "@/components/homePage/TrainingFeatures";
import NavMenu from "@/components/NavMenu";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden bg-white">
      {/* <IntroLoader /> */}
      <section className="flex flex-col items-center justify-center overflow-hidden bg-white">
        <NavMenu mode="dark" />
      </section>

      <div className="pt-5">
        <CoursesProgram />
      </div>
      <CTA mode={1} />

      <TrainingFeatures />
      <CTA mode={2} />
      <FaqSection />
      <Footer />
    </div>
  );
}
