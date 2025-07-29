import { RainbowButton } from "./magicui/rainbow-button";
import { FlipWords } from "./ui/flip-words";
import { Spotlight } from "./ui/spotlight-new";

export function MainScreen() {
    const words = ["Flutter" ,"Java" , "Kotlin"];
    return(
        <div className="flex items-center justify-center min-h-screen w-full bg-black/[0.96] antialiased relative overflow-hidden">
            <Spotlight />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
                <h1 className="leading-tight text-5xl md:text-6xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Raj Vardhan <span className="block">Singh Gangwar</span>
                </h1>
                <h2 className="mt-6 text-lg md:text-xl text-center font-medium text-neutral-400 tracking-wide">
                    Crafting Seamless Mobile Experiences with
                    <span className="text-sky-100">
                        <FlipWords words={words} />
                    </span> <br />
                    Bringing Digital Visions to Life
                </h2>
                <div className="flex justify-center mt-16 space-x-13">
                    <RainbowButton size="lg" variant="outline" className="text-neutral-300 transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer">About me</RainbowButton>
                    <RainbowButton size="lg" variant="outline" className="text-neutral-300 transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg cursor-pointer">Resume</RainbowButton>
                </div>
            </div>
        </div>
    );
}
