import { skills } from "@/data";
import Clock from "../ui/clock";
import { Meteors } from "../ui/meteors";
import { Cover } from "../ui/cover";

import CopyMyEmail from "./copyMyEmail";
import Image from "next/image";
import me from "../../public/me.jpg"
import { BackgroundLines } from "../ui/background-lines";

const Grid = ( ) => {
    return ( 
    <div id="about" className="relative grid grid-cols-12  md:grid-cols-12 md:grid-rows-4 gap-4 lg:gap-8 mx-auto  max-h-[200vh] md:max-h-[100vh] ">
            {/* the large div in the first row*/}
            <div className="col-span-12 row-span-1 h-44 md:h-full md:col-span-7  md:row-span-2 rounded-3xl bg-blue-900/10 group hover:shadow-xl transition duration-200 ">
                <div className="w-full h-full relative ">
                    <Image
                        alt="Picture of the author"
                        src="b1.svg"
                        className=" object-cover object-center  rounded-3xl h-full w-full overflow-hidden"
                        width={200}
                        height={200}
                        />
                    <div className="absolute bottom-5 left-0  max-w-xs md:max-w-lg justify-end text-white  px-5 transition duration-200 transform group-hover:translate-x-2">
                         <div className="text-xl md:text-2xl lg:text-3xl font-bold">I prioritize client collaboration, fostering open communication</div>              
                    </div>
                </div>
            </div>
        {/* the two small divs in the first row */}
            <div className="col-span-12 md:col-span-5 h-44 md:h-full row-span-1  rounded-3xl bg-blue-900/10 overflow-hidden group hover:shadow-xl transition duration-2000">
                <div className="w-full h-full relative transition duration-200 transform group-hover:translate-x-2">
                    
                    <Meteors number={25} />
                    <div className="absolute top-2  w-full text-center text-white px-5 ">
                         <div className="text-3xl font-bold  ">I&apos;m very flexible with time zone communications</div>              
                    </div>
                    <div className="absolute bottom-0 right-0  max-w-xs md:max-w-lg justify-end text-white px-5 ">
                        <Clock/>
                    </div>
                </div>
            </div>

            <div className="col-span-12 md:col-span-5 h-44 md:h-full row-span-1 rounded-3xl bg-blue-900/10 group">
                <div className="w-full h-full relative flex transition duration-200 transform group-hover:translate-x-1">
                    <div className="  px-5 flex flex-col justify-center h-full w-[40%] ">
                        <div className="text-purple-100 text-sm font-extralight">I constantly try to improve</div>
                        <div className="text-purple-300 text-xl md:text-2xl font-bold  uppercase">My stack in</div>              
                    </div>

                    <div className="w-[60%] p-2 space-y-5 flex flex-col justify-center  items-center ">
                    {skills.map((group, index) => (
                        <div key={index} className="space-x-3">
                        {group.map((skill) => (
                            <span
                            key={skill}
                            className="text-sm font-bold text-purple-300 rounded-full p-1 md:p-2 bg-purple-500/50"
                            >
                            {skill}
                            </span>
                        ))}
                        </div>
                    ))}
                    </div>
                </div>
            </div>

{/* 2nd row */}

        {/* the large div in the second row*/}
        <div className="col-span-12 md:col-span-5 h-44 md:h-full row-span-1  rounded-3xl bg-blue-900/10 overflow-hidden ">
                <div className="w-full h-full relative">
                        <div className="text-purple-300 text-base  uppercase flex flex-col items-center h-full justify-center space-y-2 overflow-hidden ">
                            <h1>I write code that works, designs that flow, </h1>
                            <Cover className="font-bold text-2xl md:text-3xl p-2"> and experiences that stick.</Cover>
                        </div>              
                </div>
        </div>
        {/* the two small divs in the first row */}
        <div className="col-span-12 row-span-1 h-44 md:h-full md:col-span-7  md:row-span-2 rounded-3xl   group overflow-hidden flex flex-col justify-center">
                    <BackgroundLines className="rounded-3xl relative w-full h-full  flex p-5 space-x-5 items-center group ">
                        <div className="text-purple-300 text-[10px] md:text-base  uppercase max-w-[60%] md:max-w-md overflow-hidden h-full flex items-center transition duration-200 transform group-hover:translate-x-2">
                            <p className=" text-justify">I specialize in creating visually stunning and highly functional digital experiences, transforming complex ideas into intuitive interfaces. By understanding your brand, audience, and goals, I craft solutions that are both beautiful and strategically aligned, ensuring your digital presence stands out and resonates with your users.</p>
                        </div>   
                        <div className="w-full h-full rounded-full flex items-center transition duration-200 transform group-hover:translate-x-2">
                            <Image
                                src={me}
                                alt="PP"
                                width={200}
                                height={300}
                                className="rounded-3xl max-w-[xs] md:max-w-md"
                            />
                        </div>                   
                    </BackgroundLines>
        </div>
        
        <div className="col-span-12 md:col-span-5 h-44 md:h-full row-span-1 rounded-3xl bg-blue-900/10 group">
                <div className="w-full h-full relative">
                    <CopyMyEmail/>
                </div>
        </div>        
    </div>
     );
}

export  default Grid;