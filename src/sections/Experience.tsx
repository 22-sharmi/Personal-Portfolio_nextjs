import ZidioLogo from "@/assets/images/zidio_development_logo.jpg";
import StanLogo from "@/assets/images/stan-ventureLogo.jpg";
import YoutubeLogo from "@/assets/images/youtube-logo.png";
import AppleLogo from "@/assets/images/apple-logo-.png";
import ZentryLogo from "@/assets/images/zentry_logo.jpg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import CheckCircleIcon from "../assets/icons/check-circle.svg";

const experiences = [
  {
    company: "Zidio Development",
    position: "Full Stack Web Developer",
    duration: "June 2024 - August 2024",
    achievements: [
      "Developed a Job Portal with React, Node.js, and MongoDB.",
      "Integrated authentication and real-time updates for job postings.",
      "Implemented dynamic UI components using Tailwind CSS.",
      "Developed a Resume Builder with user authentication and PDF generation.",
    ],
    logo: ZidioLogo,
  },
  {
    company: "Stan Ventures",
    position: "Web Developer Intern",
    duration: "February 2024 - May 2024",
    achievements: [
      "Built Next.js frontend components for SEO-optimized websites.",
      "Enhanced website performance and user experience.",
      "Worked on Git-based version control for team collaboration.",
    ],
    logo: StanLogo,
  },
  {
    company: "Personal Project - YouTube Clone",
    position: "Full Stack Developer",
    duration: "2024",
    achievements: [
      "Developed a video streaming platform with React, Node.js, and MongoDB.",
      "Implemented user authentication and video upload functionality.",
      "Integrated video quality selection and gesture-based controls for an improved viewing experience.",
    ],
    logo: YoutubeLogo,
  },
  {
    company: "Personal Project - Apple Website",
    position: "Frontend Developer",
    duration: "2025",
    achievements: [
      "Developed an interactive Apple website with smooth 3D animations using GSAP.",
      "Implemented parallax scrolling effects for an engaging user experience.",
      "Optimized the website for high performance and responsiveness.",
    ],
    logo: AppleLogo,
  },
  {
    company: "Personal Project - Zentry Game Website",
    position: "Frontend Developer",
    duration: "2025",
    achievements: [
      "Built a visually immersive game website with 3D animations using React Three Fiber.",
      "Designed interactive UI elements and dynamic transitions for an engaging feel.",
      "Implemented a seamless user experience with optimized animations and layout.",
    ],
    logo: ZentryLogo,
  },
];

export const ExperienceSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Code & Create"
          title="My Growth as a Developer"
          description="A blend of professional experience and personal projects that showcase my skills, creativity, and passion for web development."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {experiences.map((experiences) => (
              <Card
                key={experiences.company}
                className="max-w-xs md:max-w-md md:p-8"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center flex-shrink-0">
                    <Image
                      src={experiences.logo}
                      alt={experiences.company}
                      className="size-12 rounded-full max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{experiences.company}</div>
                    <div className="text-sm text-white/50">
                      {experiences.position}
                      <br />
                      {experiences.duration}
                    </div>
                  </div>
                </div>
                <ul className="mt-4 md:mt-6 text-sm md:text-base list-disc list-inside text-white/50">
                  {experiences.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircleIcon className="size-4 md:size-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
