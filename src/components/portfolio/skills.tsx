const SectionHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="text-xl font-bold mb-4 inline-block border-b-2 border-black pb-1 uppercase tracking-tight">
    {children}
  </h2>
);
export function Skills() {
  const frontend = [
    {
      id: 1,
      name: "react",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 70,
    },
    {
      id: 2,
      name: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      level: 40,
    },
    {
      id: 3,
      name: "html5",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 100,
    },
    {
      id: 4,
      name: "css3",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: 95,
    },
    {
      id: 5,
      name: "tailwind",
      img: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      level: 90,
    },
  ];
  const backend = [
    {
      id: 1,
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 40,
    },
    {
      id: 2,
      name: "Rest API",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
      level: 50,
    },
    {
      id: 3,
      name: "express",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      level: 30,
    },
  ];
  const tools = [
    {
      id: 1,
      name: "VS Code",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      level: 90,
    },
    {
      id: 2,
      name: "Github",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      level: 70,
    },
    {
      id: 3,
      name: "Figma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      level: 80,
    },
    {
      id: 4,
      name: "Vercel",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      level: 60,
    },
  ];
  const Db = [
    {
      id: 1,
      name: "firebase",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      level: 60,
    },
    {
      id: 2,
      name: "supabase",
      img: "https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000",
      level: 50,
    },
    {
      id: 3,
      name: "sql",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: 50,
    },
  ];
  return (
    <div className="">
      <SectionHeader>Frontend</SectionHeader>
      <div className="grid grid-cols-5 gap-5 mb-8 max-w-[350px]">
        {frontend.map((skill) => (
          <div className="hover:scale-105 transition-all">
            <div
              key={skill.id}
              className="w-12 h-12 md:w-16 md:h-16  rounded-full 
                 border-2 border-yellow-500/20 shadow-inner 
                 flex items-center justify-center text-[10px] md:text-xs 
                 font-semibold text-black text-center px-1 "
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>{" "}
            <div className="border-2 border-black h-2 mt-2 ">
              <div
                className="bg-yellow-500 h-1"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-center"> {skill.name}</p>
          </div>
        ))}
      </div>

      <SectionHeader>Backend</SectionHeader>
      <div className="grid grid-cols-4 gap-4 mb-8 max-w-[300px]">
        {backend.map((skill) => (
          <div className="hover:scale-105 transition-all">
            <div
              key={skill.id}
              className="w-12 h-12 md:w-16 md:h-16  rounded-full 
                 border-2 border-yellow-500/20 shadow-inner 
                 flex items-center justify-center text-[10px] md:text-xs 
                 font-semibold text-black text-center px-1 "
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>{" "}
            <div className="border-2 border-black h-2 mt-2 ">
              <div
                className="bg-yellow-500 h-1"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-center"> {skill.name}</p>
          </div>
        ))}
      </div>
      <SectionHeader>Tools</SectionHeader>
      <div className="grid grid-cols-4 gap-4 mb-8 max-w-[300px]">
        {tools.map((skill) => (
          <div className="hover:scale-105 transition-all">
            <div
              key={skill.id}
              className="w-12 h-12 md:w-16 md:h-16  rounded-full 
                 border-2 border-yellow-500/20 shadow-inner 
                 flex items-center justify-center text-[10px] md:text-xs 
                 font-semibold text-black text-center px-1 "
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>{" "}
            <div className="border-2 border-black h-2 mt-2 ">
              <div
                className="bg-yellow-500 h-1"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-center"> {skill.name}</p>
          </div>
        ))}
      </div>
      <SectionHeader>Database</SectionHeader>
      <div className="grid grid-cols-4 gap-4 mb-8 max-w-[300px]">
        {Db.map((skill) => (
          <div className="hover:scale-105 transition-all">
            <div
              key={skill.id}
              className="w-12 h-12 md:w-16 md:h-16  rounded-full 
                 border-2 border-yellow-500/20 shadow-inner 
                 flex items-center justify-center text-[10px] md:text-xs 
                 font-semibold text-black text-center px-1 "
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div className="border-2 border-black h-2 mt-2 ">
              <div
                className="bg-yellow-500 h-1"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-center"> {skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
