import EnrollNow from "@/components/enrollNowPage/EnrollNowForm";
import Footer from "@/components/footer/Footer";
import FaqSection from "@/components/homePage/FaqSection";
import NavMenu from "@/components/NavMenu";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      {/* <IntroLoader /> */}
      <section className="flex flex-col items-center justify-center overflow-hidden bg-white">
        <NavMenu mode="dark" />
      </section>
      <EnrollNow />
      <FaqSection />
      <Footer />
    </div>
  );
}
