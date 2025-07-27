import { IconCloud } from "./magicui/icon-cloud";
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
        title: "Languages",
        description: "Java, Python, C, Kotlin, Dart",
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
        title: "Frameworks",
        description: "Spring, Spring Boot, Hibernate, Maven, Flutter",
        className: "row-span-1 col-span-1"
    },
];


    return (
        <section className="relative py-20 bg-black">
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, index) =>
                    <BentoGridItem 
                    key={index} 
                    title={item.title} 
                    description={item.description} 
                    className={item.className} 
                    />
                )}
            </BentoGrid>
        </section>
    );
}
