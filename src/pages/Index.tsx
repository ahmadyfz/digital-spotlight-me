import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurTeam from "@/components/OurTeam";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <OurTeam />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
