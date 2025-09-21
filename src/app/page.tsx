import { MainScreen } from "@/components/MainScreen";
import { AboutMe } from "@/components/AboutMe";
import { TechStack } from "@/components/TechStack";
import { ProjectsComponent } from "@/components/Projects";
import { ContactMe } from "@/components/ContactMe";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return ( 
    <>
      <MainScreen/>
      <AboutMe/>
      <TechStack/>
      <ProjectsComponent/>
      <ContactMe/> 
      <Analytics />
    </>
  );
}
