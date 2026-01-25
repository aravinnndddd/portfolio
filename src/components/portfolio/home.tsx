import { Github, Instagram, Linkedin } from "lucide-react";
import { Projects } from "./projects";
import { Skills } from "./skills";

// Sub-components for better organization
const SectionHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="text-2xl font-extrabold mb-4 inline-block border-b-4 border-black pb-1 uppercase tracking-tight">
    {children}
  </h2>
);

const ExpertiseTag: React.FC<{ text: string; rotation: string }> = ({
  text,
  rotation,
}) => (
  <div
    className={`bg-yellow-400 px-4 py-2 sticky-note inline-block font-handwriting text-lg font-bold border-2 border-yellow-500/20 ${rotation} hover:scale-110 transition-transform cursor-default`}
  >
    {text}
  </div>
);

type EducationItemProps = {
  title: string;
  subtitle: string;
  year?: string;
};

const EducationItem: React.FC<EducationItemProps> = ({
  title,
  subtitle,
  year,
}) => (
  <div className="mb-6">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold leading-tight">{title}</h3>

      {year && <span className="text-sm font-medium opacity-60">{year}</span>}
    </div>

    <p className="text-sm font-semibold opacity-70 ml-2">{subtitle}</p>
  </div>
);
export function Home() {
  return (
    <div className="  bg-[url(/assets/bgGrid.avif)] flex justify-center p-4 md:p-8 lg:p-12 selection:bg-yellow-200">
      <div className="max-w-5xl w-full md:bg-[url(/assets/bg.webp)] bg-white/40 shadow-2xl  p-6 md:p-12 relative overflow-hidden drop-shadow-2xl drop-shadow-black/30">
        <header className="bg-[#4a4a4a] md:bg-[url(/assets/bg.webp)] md:text-black text-white p-6 md:p-10 mb-12 rough-border relative overflow-hidden md:w-[80%] md:rotate-3 md:-top-8 drop-shadow-2xl drop-shadow-black/30">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-40 md:w-50 md:h-72 bg-yellow-400 p-2 rough-border">
                <img
                  src="/assets/me.jpeg"
                  alt="Aravind P"
                  className="w-full h-full object-cover rough-border grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Bio Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Aravind P
              </h1>
              <p className="font-handwriting text-xl leading-relaxed max-w-md">
                A developer who loves coding, drawing, gaming, and learning new
                skills. Currently diving deep into web development. Let's build
                something amazing!
              </p>

              {/* Social Icons Placeholder (Circles from image) */}
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a
                  href="https://github.com/aravinnndddd"
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all text-[#4a4a4a]"
                >
                  <Github className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aravind-p-832849331/"
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all text-[#4a4a4a]"
                >
                  <Linkedin className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://www.instagram.com/aravinnndddd/"
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all text-[#4a4a4a]"
                >
                  <Instagram className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://discord.com/users/754961569858846770"
                  className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all text-[#4a4a4a]"
                >
                  {/* Discord Icon */}
                  <svg
                    fill="Black"
                    className="w-4 h-6 md:w-5 "
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    stroke-width="0.00032"
                  >
                    {" "}
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>{" "}
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.704"
                    ></g>{" "}
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M 12.65625 4.90625 L 11.875 5 C 11.875 5 8.371094 5.382813 5.8125 7.4375 L 5.78125 7.4375 L 5.75 7.46875 C 5.175781 7.996094 4.925781 8.644531 4.53125 9.59375 C 4.136719 10.542969 3.714844 11.753906 3.34375 13.09375 C 2.601563 15.777344 2 19.027344 2 22 L 2 22.25 L 2.125 22.5 C 3.050781 24.125 4.695313 25.160156 6.21875 25.875 C 7.742188 26.589844 9.058594 26.96875 9.96875 27 L 10.5625 27.03125 L 10.875 26.5 L 11.96875 24.5625 C 13.128906 24.824219 14.464844 25 16 25 C 17.535156 25 18.871094 24.824219 20.03125 24.5625 L 21.125 26.5 L 21.4375 27.03125 L 22.03125 27 C 22.941406 26.96875 24.257813 26.589844 25.78125 25.875 C 27.304688 25.160156 28.949219 24.125 29.875 22.5 L 30 22.25 L 30 22 C 30 19.027344 29.398438 15.777344 28.65625 13.09375 C 28.285156 11.753906 27.863281 10.542969 27.46875 9.59375 C 27.074219 8.644531 26.824219 7.996094 26.25 7.46875 L 26.21875 7.4375 L 26.1875 7.4375 C 23.628906 5.382813 20.125 5 20.125 5 L 19.34375 4.90625 L 19.0625 5.625 C 19.0625 5.625 18.773438 6.355469 18.59375 7.1875 C 17.460938 7.035156 16.535156 7 16 7 C 15.464844 7 14.539063 7.035156 13.40625 7.1875 C 13.226563 6.355469 12.9375 5.625 12.9375 5.625 Z M 11.28125 7.1875 C 11.324219 7.328125 11.367188 7.449219 11.40625 7.5625 C 10.113281 7.882813 8.734375 8.371094 7.46875 9.15625 L 8.53125 10.84375 C 11.125 9.234375 14.851563 9 16 9 C 17.148438 9 20.875 9.234375 23.46875 10.84375 L 24.53125 9.15625 C 23.265625 8.371094 21.886719 7.882813 20.59375 7.5625 C 20.632813 7.449219 20.675781 7.328125 20.71875 7.1875 C 21.652344 7.375 23.433594 7.804688 24.90625 8.96875 C 24.898438 8.972656 25.28125 9.550781 25.625 10.375 C 25.976563 11.222656 26.367188 12.351563 26.71875 13.625 C 27.394531 16.066406 27.925781 19.039063 27.96875 21.65625 C 27.339844 22.617188 26.171875 23.484375 24.9375 24.0625 C 23.859375 24.566406 23.007813 24.75 22.5 24.84375 L 22 24 C 22.296875 23.890625 22.589844 23.769531 22.84375 23.65625 C 24.382813 22.980469 25.21875 22.25 25.21875 22.25 L 23.90625 20.75 C 23.90625 20.75 23.34375 21.265625 22.03125 21.84375 C 20.71875 22.421875 18.714844 23 16 23 C 13.285156 23 11.28125 22.421875 9.96875 21.84375 C 8.65625 21.265625 8.09375 20.75 8.09375 20.75 L 6.78125 22.25 C 6.78125 22.25 7.617188 22.980469 9.15625 23.65625 C 9.410156 23.769531 9.703125 23.890625 10 24 L 9.5 24.84375 C 8.992188 24.75 8.140625 24.566406 7.0625 24.0625 C 5.828125 23.484375 4.660156 22.617188 4.03125 21.65625 C 4.074219 19.039063 4.605469 16.066406 5.28125 13.625 C 5.632813 12.351563 6.023438 11.222656 6.375 10.375 C 6.71875 9.550781 7.101563 8.972656 7.09375 8.96875 C 8.566406 7.804688 10.347656 7.375 11.28125 7.1875 Z M 12.5 14 C 11.726563 14 11.042969 14.441406 10.625 15 C 10.207031 15.558594 10 16.246094 10 17 C 10 17.753906 10.207031 18.441406 10.625 19 C 11.042969 19.558594 11.726563 20 12.5 20 C 13.273438 20 13.957031 19.558594 14.375 19 C 14.792969 18.441406 15 17.753906 15 17 C 15 16.246094 14.792969 15.558594 14.375 15 C 13.957031 14.441406 13.273438 14 12.5 14 Z M 19.5 14 C 18.726563 14 18.042969 14.441406 17.625 15 C 17.207031 15.558594 17 16.246094 17 17 C 17 17.753906 17.207031 18.441406 17.625 19 C 18.042969 19.558594 18.726563 20 19.5 20 C 20.273438 20 20.957031 19.558594 21.375 19 C 21.792969 18.441406 22 17.753906 22 17 C 22 16.246094 21.792969 15.558594 21.375 15 C 20.957031 14.441406 20.273438 14 19.5 14 Z M 12.5 16 C 12.554688 16 12.625 16.019531 12.75 16.1875 C 12.875 16.355469 13 16.648438 13 17 C 13 17.351563 12.875 17.644531 12.75 17.8125 C 12.625 17.980469 12.554688 18 12.5 18 C 12.445313 18 12.375 17.980469 12.25 17.8125 C 12.125 17.644531 12 17.351563 12 17 C 12 16.648438 12.125 16.355469 12.25 16.1875 C 12.375 16.019531 12.445313 16 12.5 16 Z M 19.5 16 C 19.554688 16 19.625 16.019531 19.75 16.1875 C 19.875 16.355469 20 16.648438 20 17 C 20 17.351563 19.875 17.644531 19.75 17.8125 C 19.625 17.980469 19.554688 18 19.5 18 C 19.445313 18 19.375 17.980469 19.25 17.8125 C 19.125 17.644531 19 17.351563 19 17 C 19 16.648438 19.125 16.355469 19.25 16.1875 C 19.375 16.019531 19.445313 16 19.5 16 Z"></path>{" "}
                    </g>{" "}
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-5xl gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            <section>
              <SectionHeader>Works</SectionHeader>
              <div className="space-y-4">
                <Projects />
              </div>
            </section>

            <section>
              <SectionHeader>Education</SectionHeader>

              <div className="mt-4 space-y-3">
                <EducationItem
                  title="B.Tech in Computer Science "
                  subtitle="College of Engineering Perumon"
                  year="2024 – Present"
                />

                <EducationItem
                  title="Higher Secondary – Science"
                  subtitle="GVHSS Kottankulangara, Chavara"
                  year="2022 – 2024"
                />

                <EducationItem
                  title="SSLC"
                  subtitle="GVHSS Kottankulangara, Chavara"
                  year="2022"
                />
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <section>
              <SectionHeader>Area Of Expertise</SectionHeader>
              <div className="flex flex-wrap gap-4 mt-6">
                <ExpertiseTag text="Web dev" rotation="-rotate-3" />
                <ExpertiseTag text="Drawing" rotation="rotate-2" />
                <ExpertiseTag text="Design" rotation="-rotate-1" />
              </div>
            </section>

            <section>
              <SectionHeader>Skills</SectionHeader>
              <Skills />
            </section>
          </div>
        </div>

        {/* Decorative elements to enhance the paper feel */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
}
