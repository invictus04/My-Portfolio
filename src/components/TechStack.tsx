import { IconCloud } from "./magicui/icon-cloud";
import { MagicCard } from "./magicui/magic-card";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function TechStack() {
    const slugs = [
  "dart",
  "java",
  "kotlin",
  "flutter",
  "android",
  "html5",
  "css3",
  "postgresql",
  "firebase",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "google",
  "C",
  "Python",
  "Spring",
  "springboot",
  "apachemaven",
  "hibernate",
  "postman",
  "sqlite",
  "selenium",


];
 const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );



const items = [
    {
        title: (
            <div>
                <h2 className="text-2xl sm:text-3xl px-2 py-2 font-semibold text-[#a3cef1]">Development Skills</h2>
            </div>
        ),
        description: (
            <div className="py-4 px-2 space-y-2">
               <p className="text-lg text-[#e7ecef]"><span className="font-semibold text-[#8b8c89]">Languages: </span>Java, Python, C, Kotlin, Dart</p>   
               <p className="text-lg text-[#e7ecef]"><span className="font-semibold text-[#8b8c89]">Frontend: </span>HTML, CSS, Flutter</p>   
               <p className="text-lg text-[#e7ecef]"><span className="font-semibold text-[#8b8c89]">Backend Frameworks: </span>Spring, Spring Boot, Hibernate, Maven</p>
            </div>
        ),
        className: "row-span-1 col-span-1"
    },
    {
        title: "",
        description: (
            <span className="h-full w-full flex items-center justify-center">
                <IconCloud images={images} />
            </span>
        ),
        className: "row-span-2 col-span-2 bg-black"
    },
    {
        title:( 
            <div>
                <h2 className="text-2xl sm:text-3xl px-2 font-semibold text-[#a3cef1]"> Database & Cloud Skills</h2>
            </div>
            ),
            description:(
                <div className="py-4 px-2 space-y-2">
                <p className="text-lg text-[#e7ecef]"><span className="font-semibold text-[#8b8c89]">Databases:</span> MySQL, SQLite, PostgreSQL </p>
                <p className="text-lg text-[#e7ecef]"><span className="font-semibold text-[#8b8c89]">Cloud:</span> Google Cloud Platform</p>
                <p className="text-lg text-[#e7ecef]"><span className="font-semibold text-[#8b8c89]">Tools & Platforms: </span>Git, GitHub, Postman, Figma, Firebase</p>
            </div>
        ),
        className: "row-span-1 col-span-1"
    },
];

    return (
        <section className="py-10 min-h-screen w-full bg-black">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-200 text-center">
                Tech Stack 
            </h2>
            <BentoGrid className="max-w-4xl px-2 py-4">
            {items.map((item, index) => (
            <MagicCard key={index} className={item.className} gradientFrom="#d397fa" gradientTo="#8364e8">
            <div className="py-2 px-2 flex flex-col items-left justify-center">
                {item.title}
                {item.description}
            </div>
            </MagicCard>
            ))}
            </BentoGrid>
        </section>
    );
}


