import Github from "./link/github";
import CorporateSocial from "./link/CorporateSocial";
import Twitter from "./link/twitter";
import LeetCode from "./link/leetcode";

export function AboutMe() {
  return (
    <section className="py-10 min-h-screen w-full bg-black px-4 sm:px-6 lg:px-12" id="about-me">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-neutral-200 text-center">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
    
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <img
            src="/man.png"
            alt="About Me"
            className="w-36 sm:w-48 md:w-60 lg:w-72 xl:w-80 h-auto object-cover rounded-lg"
          />
        </div>

        <div className="max-w-2xl text-neutral-200 text-center lg:text-left">
          <p className="text-base sm:text-lg leading-relaxed">
            Hi!👋, I'm Rajvardhan, a Flutter and Java developer skilled in building Android apps,
            REST APIs, and full-stack projects.
            <br /><br />
            I’m passionate about crafting scalable, user-friendly software and always eager to
            learn and take on new challenges that make a real impact through technology.
            <br /><br />
            Let's connect and explore how we can collaborate to create innovative solutions together!!
          </p>

    
          <div className="flex justify-center lg:justify-start gap-6 mt-8">
            <a
              href="https://x.com/Rajvard098270?t=by45GT4YboJb8W6hD6wQsQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://github.com/invictus04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/rajvardhan-singh-gangwar-b404831b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CorporateSocial />
            </a>
            <a href="https://leetcode.com/u/DynamicGuy04/" target="_blank" rel="noopener noreferrer">
              <LeetCode/>
            </a>


          </div>
        </div>
      </div>
    </section>
  );
}
