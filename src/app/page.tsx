import Hero from "@/components/hero";
import SkillsSection from "@/components/skills-section";
import AboutSection from "@/components/about-section";
import FavouriteProjects from "@/components/favourite-projects";
import Footer from "@/components/footer";

const Home = () => {
    return (
        <div className={'max-w-7xl w-full px-4 md:px-8 mx-auto mb-20'}>
            <Hero />
            <SkillsSection />
            <AboutSection />
            <FavouriteProjects />
            <Footer />
        </div>
    );
}

export default Home