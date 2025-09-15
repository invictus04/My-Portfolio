import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import ZwiigyImage from "../../public/assets/ziwwgy_fullstack.png";
import ShortNewsImage from "../../public/assets/short_news.png";
import SpendWiseImage from "../../public/assets/spend_wise.png";
import ShortyURLImage from "../../public/assets/short_urlpng.png";
import PriceComparisonImage from "../../public/assets/price_comparison.png";
import { s } from "motion/react-client";


export function ProjectsComponent() {
const projects = [
        {
            imageUrl: ZwiigyImage,
            title: "Zwiggy",
            description: "Full-stack app with Spring Boot backend and Flutter frontend to scrape and compare food deals from Swiggy & Zomato, offering the best value to users.",
            githubLink: "https://github.com/invictus04/Zwiggy"
        },
        {
            imageUrl: PriceComparisonImage,
            title: "Restaurant Price Comparison API – Swiggy & Zomato Scraper",
            description: "Built a Spring Boot app with web scrapers for Swiggy & Zomato to compare prices, ratings, and delivery times, helping users find the best food deals.",
            githubLink: "https://www.google.com"
        },
        {
            imageUrl: ShortNewsImage,
            title: "Short News App",
            description: "Flutter app fetching bite-sized news from Inshorts API with category filtering, smooth UI, and external article access.",
            githubLink: "https://github.com/invictus04/Short-News"
        },
        {
            imageUrl: SpendWiseImage,
            title: "SpendWise – Personal Finance Management App",
            description: "Kotlin-based finance app with MVVM and Room DB for tracking expenses, featuring data visualization and intuitive UI.",
            githubLink: "http://github.com/invictus04/SpendWise"
        },
        {
            imageUrl: ShortyURLImage,
            title: "ShortyURL – URL Shortener Backend API",
            description: "Spring Boot API for URL shortening with PostgreSQL, built with TDD and optimized for performance and security.",
            githubLink: "https://github.com/invictus04/ShortyURL"
        },


    ];




    return (
        <section className="py-10 w-full min-h-screen bg-black">
        <h2 className="text-4xl font-bold mb-10 text-[#e7ecef] text-center">Projects</h2>
        {projects.map ((item,index) => (
                <div className="rounded-xl p-6 w-full max-w-4xl mx-auto flex items-center gap-6 mb-8" key={index}>
                    <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                        <img src={typeof item.imageUrl === "string" ? item.imageUrl : item.imageUrl.src} alt="Project Preview" className="w-full h-full object-cover"  />
                    </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-[#a3cef1] mb-1">{item.title}</h3>
                    <p className="text-[#e7ecef] text-base leading-relaxed">{item.description}</p>
                </div>
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="ml-auto">
                    <InteractiveHoverButton className="text-[#e7ecef]">Project</InteractiveHoverButton>
                </a>
                </div>
        ))}
    </section>
    ); 

    
}
