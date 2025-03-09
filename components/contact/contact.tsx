
import WhatsappButton from "./whatsappButton";

const Contact = () => {
  return (
    <div id="contact" className="pb-20 pt-36 my-32 md:mb-10">
                {/* background grid */}
        <div className="absolute bottom-0 left-0  h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.3]  flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        {/* content on the background */}
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-8">
                <h1 className="text-white font-bold text-center text-3xl md:text-5xl lg:text-6xl " 
                >
                    Ready to take 
                    <span className="text-purple-400"> your </span>
                    digital presence to next level
                </h1>
                <p className="text-center text-purple-200 md:my-4 md:tracking-wider text-sm md:text-lg lg-text-2xl">
                    Reach out to me today and let&apos;s discuss how i can help you achieve your goals.
                </p>
                <WhatsappButton/>
            </div>
        </div>
    </div>
  );
};

export default Contact;
