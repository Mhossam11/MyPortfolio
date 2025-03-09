import { MailPlus, ScrollText } from "lucide-react";

const MyData = (  ) => {
    
    return ( 
        <div className=" space-x-7 backdrop-blur-sm fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-5 max-w-lg flex justify-around rounded-full px-5 py-2 border-white/20 border-[1px] bg-black/30 z-10 items-center shadow-lg">
            <div className="flex space-x-4 items-center">
                <a 
                    href="mailto:mhossam572000@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MailPlus/>
                </a>
                <span className="text-white border-l-2 block h-5"></span>
                <a 
                    href="https://drive.google.com/uc?export=download&id=1hUriglXRNzPEuu2gAlQaGevfl0LYwP0_"
                    download={"Mohamed_Hossam_cv.pdf"}
                >                    
                    <ScrollText/>
                </a>
            </div>
        </div>
     );
}

export  default MyData;