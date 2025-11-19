import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experience = {
    title: "Software Developer Engineer Intern",
    company: "funcBind",
    duration: "May 03' - Nov 04'",
    responsibilities: [
      "Developed backend file management features using Java and Spring Boot, implementing REST API endpoints for secure file upload and download.",
      "Designed and built a new responsive UI dashboard using Flutter, enabling users to consume the backend API and manage file operations."
    ],
    tags: ["Java", "Spring Boot", "Flutter", "REST API"]
  };

  return (
    <section className="py-10 min-h-screen w-full bg-black px-4 sm:px-6 lg:px-12 relative" id="experience">
  

      <div className="relative z-10 max-w-5xl mx-auto">
      
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience
          </h2>

        </div>

  
        <div className="relative">
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#d397fa] via-[#8364e8] to-transparent"></div>
          
          {/* Experience card */}
          <div className="relative pl-8 sm:pl-20">
            {/* Timeline dot */}
          <div className="absolute left-[-4px] sm:left-[28px] top-8 w-3 h-3 bg-white rounded-full ring-2 ring-[#d397fa] ring-offset-2 ring-offset-black"></div>
            
            <div className="group  rounded-2xl border border-neutral-800/50 p-8">
              {/* Header section */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-3 text-neutral-300 mb-2">
                    <Briefcase className="w-5 h-5 text-purple-800" />
                    <span className="text-lg font-medium">{experience.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
                  <Calendar className="w-4 h-4 text-grey-400" />
                  <span className="text-sm font-medium text-neutral-300 whitespace-nowrap">{experience.duration}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {experience.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex gap-4 group/item items-start">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-800 flex-shrink-0 group-hover/item:bg-white transition-colors"></div>
                    <p className=" text-neutral-300 leading-relaxed text-base">{responsibility}</p>
                  </div>
                ))}
              </div>

              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/50">
                {experience.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}