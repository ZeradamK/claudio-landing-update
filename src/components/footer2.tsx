import React from "react";

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/claudio-logo.png",
    alt: "Claudio logo",
    title: "Claudio",
    url: "/",
  },
  tagline = "AI-native cloud assistant for modern DevOps and architecture.",
  copyright = "Claudio © 2025.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-32 relative w-full flex justify-center items-center">
      <div className="absolute inset-0 w-full h-full -z-10">
        {/* DotsBg should be rendered at the app/page level, but this ensures background if needed */}
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <footer className="w-full flex flex-col items-center justify-center">
          <div className="w-full grid grid-cols-2 gap-8 lg:grid-cols-6 justify-center items-center">
            <div className="col-span-2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2 lg:justify-start justify-center">
                <a href={logo.url}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <p className="text-xl font-semibold text-white text-center lg:text-left">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold text-white text-[14px] font-light text-center lg:text-left">{tagline}</p>
            </div>
          </div>
          <div className="mt-24 w-full flex flex-col justify-between gap-4 border-t border-white/20 pt-8 text-[14px] font-light text-white md:flex-row md:items-center items-center">
            <p className="text-center md:text-left">{copyright}</p>
            <ul className="flex gap-4 justify-center md:justify-end w-full md:w-auto">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
