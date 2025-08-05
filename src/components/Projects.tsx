import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export function ProjectsComponent() {
const projects = [
        {
            imageUrl: "https:www.google.com",
            title: "Project Title",
            description: "Project description goes here.",
            githubLink: "https://www.google.com"
        },
        {
            imageUrl: "https:www.google.com",
            title: "Project Title",
            description: "Project description goes here.",
            githubLink: "https://www.google.com"
        },
        {
            imageUrl: "https:www.google.com",
            title: "Project Title",
            description: "Project description goes here.",
            githubLink: "https://www.google.com"
        },
        {
            imageUrl: "https:www.google.com",
            title: "Project Title",
            description: "Project description goes here.",
            githubLink: "https://www.google.com"
        }

    ];




    return (
        <section className="py-10 w-full min-h-screen bg-black">
        <h2 className="text-4xl font-bold mb-10 text-[#e7ecef] text-center">Projects</h2>
        {projects.map ((item,index) => (
                <div className="rounded-xl p-6 w-full max-w-4xl mx-auto flex items-center gap-6 border border-[#8b8c89] mb-8" key={index}>
                    <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                        <img src={item.imageUrl} alt="Project Preview" className="w-full h-full object-cover"  />
                    </div>
                <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-[#a3cef1] mb-1">{item.title}</h3>
                    <p className="text-[#e7ecef] text-sm">{item.description}</p>
                </div>
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="ml-auto">
                    <InteractiveHoverButton className="text-[#e7ecef]">View Project</InteractiveHoverButton>
                </a>
                </div>
        ))}
    </section>
    ); 

    
}
