"use client"
import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";
// import dashboard from "../../public/dashboard.jpg"
import { FaLocationArrow } from "react-icons/fa";
import { ProjectDetails } from "./projectDetails";
import { IProjects } from "@/interface";

interface IProps{
    data: IProjects
}
const ProjectCard = ({data}:IProps  ) => {
    console.log(data)
    const {description,icons,imageSrc,liveLink,technologies,title,smallDescription}=data

    return ( 
        <div className="h-full w-full mx-auto space-y-12 md:space-y-32 flex flex-col justify-between ">
            <PinContainer 
                className="w-full h-full space-y-4 md:space-y-6"
                href={liveLink}  
                title={title}  
            >
                <div className="w-full h-[200px] md:h-[300px] rounded-3xl overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={1000}
                        height={800}
                        className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
                        quality={100}
                    />
                </div>  
                <div className="w-full justify-end px-4 md:px-5 transition duration-200 transform group-hover:translate-x-2 space-y-2 md:space-y-3">
                    <h1 className="text-xl md:text-2xl font-bold text-purple-900/60 dark:text-purple-400/80">{title}</h1>              
                    <h2 className="text-sm md:text-base text-purple-900/60 dark:text-purple-100  line-clamp-2">{smallDescription}</h2>              
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-3 ">
                    <div className="flex items-center">
                        {
                            icons.map((icon,index) => (
                                <div 
                                    key={index} 
                                    className="border border-white/[.2] rounded-full bg-black-100 w-8 h-8 md:w-10 md:h-10 flex justify-center items-center"
                                    style={{
                                        transform: `translateX(-${8 * index + 2}px)`,
                                    }}
                                >
                                    <Image
                                        width={200}
                                        height={200}
                                        src={icon}
                                        alt={icon}
                                        className="w-4 h-4 md:w-6 md:h-6"
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="z-99 text-purple-900/60 dark:text-purple-300 space-x-2 flex items-center justify-center text-base md:text-base">
                        <p>Check the live site</p>
                        <FaLocationArrow className="w-4 h-4 md:w-4 md:h-4"/>
                    </div>
                </div>
            </PinContainer>
            <div className="flex items-center justify-center mt-4 md:mt-0">
                <ProjectDetails description={description} title={title} technologies={technologies}/>
            </div>
        </div>
     );
}

export  default ProjectCard;