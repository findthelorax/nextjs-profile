"use client";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact/ContactSection";
import SideSocials from "@/components/Contact/SideSocials";
import Name from "@/components/Name";
import VerticalEmail from "@/components/Contact/VerticalEmail";
import SkillsScroll from "@/components/SkillsScroll";
import ContactMeCircle from "@/components/Contact/ContactCircle";
import Projects from "@/components/Projects/Projects";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SideSocials />
            <VerticalEmail />
            <main className="flex-grow main rounded-xl">
                <Name />
                <ContactMeCircle />
                <SkillsScroll />
                <Projects />
            </main>
            <footer className="footer">
                <ContactSection />
                <Footer />
            </footer>
        </div>
    );
}
