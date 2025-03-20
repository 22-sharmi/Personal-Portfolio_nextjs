import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import appleWebsite from "../assets/images/Apple website.png";
import resumeWebsite from "@/assets/images/Resume website.png";
import gameWebsite from "@/assets/images/Game Website.png";
import Link from "next/link";
import Image from "next/image";
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Apple 3D Animated Website",
    results: [
      { title: "Implemented smooth 3D animations with GSAP" },
      { title: "Optimized performance for seamless scrolling" },
      { title: "Enhanced UI/UX with interactive elements" },
    ],
    link: "https://apple-website-opal-nu.vercel.app/",
    image: appleWebsite,
  },
  {
    company: "Zidio Development",
    year: "2024",
    title: "Resume Builder",
    results: [
      { title: "Developed a full-stack MERN application" },
      { title: "Implemented dynamic resume templates" },
      { title: "Enabled real-time preview and editing" },
    ],
    link: "https://github.com/22-sharmi/Resume_Bulider-Frontend",
    image: resumeWebsite,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Zentry Game Website",
    results: [
      { title: "Designed an interactive gaming experience" },
      { title: "Integrated smooth animations and effects" },
      { title: "Optimized for performance and responsiveness" },
    ],
    link: "https://animated-game-website.vercel.app",
    image: gameWebsite,
  },
];

export const ProjectsSection = (): JSX.Element => {

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences"/>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
              <div className="flex ">
                <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result, index) => (
                  <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <Link href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Live Site</span>
                  <ArrowUpRightIcon className="size-4"/>
                </button>
              </Link>
              </div>
              <div className="relative">
              <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
