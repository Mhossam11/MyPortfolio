import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="pb-20 pt-36 mb-32 md:mb-10">

        {/* spotlight */}
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue"/>
            <Spotlight className="top-28 left-80 h-[100vh] w-[100vw]" fill="purple"/>
            <Spotlight className="top-80 left-10 h-[80vh] w-[50vw]" fill="pink"/>
        </div>

        {/* background grid */}
        <div className="absolute top-0 left-0  h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.3]  flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        {/* content on the background */}
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest text-2xl  text-center dark:text-purple-200 text-purple-500  max-w-3xl">Welcome to my portfolio</h1>
                <TextGenerateEffect 
                    className="text-purple-100 text-center text-2xl md:text-5xl lg:text-6xl " 
                    words="Transforming concepts into seamless User Experiences"
                />
                <p className="text-center dark:text-purple-200 text-purple-500 md:my-4 md:tracking-wider text-sm md:text-lg lg-text-2xl">
                    Hello, I&apos;m Mohamed Hossam , a frontend developer with a passion for crafting exceptional digital experiences.
                </p>
                <a href="#about" className="mt-5 md:m-0">
                    <MagicButton 
                        title="show my work"
                        icon={<FaLocationArrow/>}
                        position="right"
                        
                    />
                </a>
            </div>
        </div>
    </div>
  );
};

export default Hero;
