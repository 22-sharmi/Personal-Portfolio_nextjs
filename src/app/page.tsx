import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { ExperienceSection } from "@/sections/Experience";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <ExperienceSection/>
    </div>
  );
}
