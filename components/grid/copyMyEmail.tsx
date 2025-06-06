"use client";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import MagicButton from "../ui/magicButton";
import { useState } from "react";
const CopyMyEmail = ( ) => {
    const [copied,setCopied] = useState(false)
    const handleClick=()=>{
        navigator.clipboard.writeText('mhossam572000@gmail.com');
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        },5000)
    }
    return ( 
        <>
            <BackgroundGradientAnimation/>
            <div className="absolute top-5 md:top-2  w-full text-center text-white px-5 z-10 transition duration-200 transform group-hover:translate-x-2">
                         <h1 className="text-xl md:text-3xl font-bold  z-50 ">Let&apos;s build something great together</h1>              
             </div>
             <div className="absolute bottom-0 w-full justify-center flex p-5 transition duration-200 transform group-hover:translate-x-2">
                    <MagicButton 
                        title={copied?"Copied ✔️" : "Copy my Email"}
                        handleClick={handleClick}
                        />
            </div>
        </>
     );
}

export  default CopyMyEmail;