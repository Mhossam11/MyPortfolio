// import { ScrollArea } from "@radix-ui/react-scroll-area";
// import ProjectCard from "./projectCard";

import * as React from "react"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "./projectCard";
import { projects } from "@/data";
 
const ProjectsSection = (  ) => {
    return ( 
        <div id="projects" className="my-14 md:my-28">
            <h1 className="my-12 md:my-24 text-purple-300 dark:text-white text-xl md:text-4xl   font-bold tracking-wide text-center  uppercase">
                A small selection of 
                <span className="text-purple-800 dark:text-purple-400"> recent projects</span>
            </h1>

            <Carousel className="mx-auto max-w-lg md:max-w-7xl px-4 md:px-0 ">
                <CarouselContent className="gap-4 md:gap-2">
                  {projects.map((project) => (
                    <CarouselItem key={project.id} className="pl-2 md:pl-0 basis-full md:basis-1/2">
                          <ProjectCard data={project}/>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>            
        </div>
     );
}

export  default ProjectsSection;