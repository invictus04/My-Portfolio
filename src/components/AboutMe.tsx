import Github from "./link/github";
import CorporateSocial from "./link/CorporateSocial";
import Twitter from "./link/twitter";

export function AboutMe() {
    return (
        <section className="py-10 min-h-screen w-full bg-black">
    <h2 className="text-4xl font-bold mb-10 text-neutral-200 text-center">
        About Me
    </h2>

    <div className="flex flex-col lg:flex-row items-center justify-center px-8 gap-10">
        <div className="flex-shrink-0 pr-8">
            <img 
                src="/man.png" 
                alt="About Me" 
                className="w-45 sm:w-60 md:w-70 lg:w-75 xl:w-86 2xl:w-100 h-auto object-cover"
            />
        </div>

        <div className="max-w-2xl text-neutral-200">
            <p className="text-lg text-justify pt-10">
                Hi!👋, I'm Rajvardhan, a Flutter and Java developer skilled in building Android apps, REST APIs, and full-stack projects.
                <br /><br />
                I’m passionate about crafting scalable, user-friendly software and always eager to learn and take on new challenges that make a real impact through technology.
                <br /><br />
                Let's connect and explore how we can collaborate to create innovative solutions together!!
            </p>
            <div className="flex justify-center gap-6 mt-8 pt-10">
                <a href="https://x.com/Rajvard098270?t=by45GT4YboJb8W6hD6wQsQ&s=09" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                </a>
                <a href="https://github.com/invictus04" target="_blank" rel="noopener noreferrer">
                    <Github />
                </a>
                <a href="https://www.linkedin.com/in/rajvardhan-singh-gangwar-b404831b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <CorporateSocial/>
                </a>
            </div>
        </div>
    </div>
</section>

    );
}
