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

    // const iconLists= ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"]
    return ( 
        <div className="max-w-md mx-auto space-y-24 md:space-y-32 flex flex-col justify-between">
            <PinContainer 
                className="w-full h-full space-y-10"
                href={liveLink}  
                title={title}  
            >
                <div className="w-full h-full rounded-full flex items-center transition duration-200 transform group-hover:translate-x-2">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={500}
                    height={500}
                    className="rounded-3xl max-w-sm md:max-w-md"
                />
                </div>  
                <div className="  max-w-xs md:max-w-lg justify-end px-5 transition duration-200 transform group-hover:translate-x-2 space-y-5">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-400/80">{title}</h1>              
                    <h2 className="text-sm  lg:text-base text-purple-100 ">{smallDescription}</h2>              
                </div>
                <div className="flex items-center justify-between my-3">
                    <div className="flex items-center">
                        {
                            icons.map((icon,index) => (
                                <div 
                                    key={index} 
                                    className=" border border-white/[.2] rounded-full bg-black-100 w-10 h-10 flex justify-center items-center "
                                    style={{
                                        transform: `translateX(-${8 * index + 2}px)`,
                                      }}
                                >
                                    <Image
                                    width={200}
                                    height={200}
                                        src={icon}
                                        alt={icon}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="z-99 text-purple-300  space-x-2 flex items-center justify-center"
                    >
                        <p>Check the live site</p>
                        <FaLocationArrow/>
                    </div>
                </div>
            </PinContainer>
            <div className=" flex items-center justify-center">
                <ProjectDetails description={description} title={title} technologies={technologies}/>
            </div>
        </div>
     );
}

export  default ProjectCard;