import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export function ProjectsComponent() {
  const projects = [
    {
      imageUrl: "/assets/ziwwgy_fullstack.png",
      title: "Zwiggy",
      description:
        "Full-stack app with Spring Boot backend and Flutter frontend to scrape and compare food deals from Swiggy & Zomato, offering the best value to users.",
      githubLink: "https://github.com/invictus04/Zwiggy",
    },
    {
      imageUrl: "/assets/price_comparison.png",
      title: "Restaurant Price Comparison API – Swiggy & Zomato Scraper",
      description:
        "Built a Spring Boot app with web scrapers for Swiggy & Zomato to compare prices, ratings, and delivery times, helping users find the best food deals.",
      githubLink: "https://github.com/invictus04/Zwiggy",
    },
    {
      imageUrl: "/assets/short_news.png",
      title: "Short News App",
      description:
        "Flutter app fetching bite-sized news from Inshorts API with category filtering, smooth UI, and external article access.",
      githubLink: "https://github.com/invictus04/Short-News",
    },
    {
      imageUrl: "/assets/spend_wise.png",
      title: "SpendWise – Personal Finance Management App",
      description:
        "Kotlin-based finance app with MVVM and Room DB for tracking expenses, featuring data visualization and intuitive UI.",
      githubLink: "http://github.com/invictus04/SpendWise",
    },
    {
      imageUrl: "/assets/short_urlpng.png",
      title: "ShortyURL – URL Shortener Backend API",
      description:
        "Spring Boot API for URL shortening with PostgreSQL, built with TDD and optimized for performance and security.",
      githubLink: "https://github.com/invictus04/ShortyURL",
    },
  ];

  return (
    <section className="py-10 w-full min-h-screen bg-black px-4">
      <h2 className="text-4xl font-bold mb-10 text-[#e7ecef] text-center">
        Projects
      </h2>
      {projects.map((item, index) => (
        <div
          key={index}
          className="rounded-xl p-6 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 shadow-lg"
        >
    
          <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden">
            <img
              src={item.imageUrl}
              alt="Project Preview"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col text-center md:text-left flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-[#a3cef1] mb-2">
              {item.title}
            </h3>
            <p className="text-[#e7ecef] text-sm sm:text-base leading-relaxed mb-4">
              {item.description}
            </p>
            <div className="mt-auto">
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <InteractiveHoverButton className="text-[#e7ecef] w-full sm:w-auto">
                  Project
                </InteractiveHoverButton>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
