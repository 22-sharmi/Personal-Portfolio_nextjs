"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const handleEmailClick = () => {
    const email = "sharmilakumaravel22@gmail.com";
    const subject = encodeURIComponent("Project Collaboration Inquiry");
    const body = encodeURIComponent(
      `Hello Sharmila,\n\nI came across your portfolio and I'm interested in collaborating on a project. Let's discuss further!\n\nLooking forward to your response.\n\nBest regards,`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-balance mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you bring your vision to life.
              </p>
            </div>
            <button
              onClick={handleEmailClick}
              className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 whitespace-nowrap border border-gray-900"
            >
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
