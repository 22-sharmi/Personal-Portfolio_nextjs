import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
export const Footer = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/22-sharmi" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sharmila_kumaravel22",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sharmila-sri-k-112a251ba",
    },
    { name: "WhatsApp", url: "https://wa.me/918248873523" },
  ];

  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; {new Date().getFullYear()}. All Rights Reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.name}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
