import AlertBar from "@/components/AlertBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BoardSection from "@/components/BoardSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AlertBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BoardSection /> 
        {/*<EventsSection />*/}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
