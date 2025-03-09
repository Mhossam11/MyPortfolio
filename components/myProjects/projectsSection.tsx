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
        <div id="projects" className="my-28">
            <h1 className="my-24 text-white text-xl md:text-4xl   font-bold tracking-wide text-center  uppercase">
                A small selection of 
                <span className="text-purple-400"> recent projects</span>
            </h1>

            <Carousel className="mx-auto max-w-lg">
                <CarouselContent>
                  {projects.map((project) => (
                    
                    <CarouselItem key={project.id}>
                          <ProjectCard data={project}/>
                    </CarouselItem>
                  ))
                   }
                </CarouselContent>
                
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>            
        </div>
     );
}

export  default ProjectsSection;