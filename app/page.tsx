import Contact from "@/components/contact/contact";
import MyData from "@/components/contact/myData";
import Grid from "@/components/grid/Grid";
import Hero from "@/components/hero";
import ProjectsSection from "@/components/myProjects/projectsSection";
import {  MyServices } from "@/components/myServices/myServices";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CircleUser, Code, PhoneCall } from "lucide-react";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-md md:max-w-7xl w-full">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <FaHome/> },
            { name: "About", link: "#about", icon: <CircleUser/> },
            { name: "Projects", link: "#projects", icon: <Code/> },
            { name: "Contact", link: "#contact", icon: <PhoneCall/> },
          ]}/>
        <Hero/>
        <Grid/>
        <ProjectsSection/>
        <MyServices/>
        <Contact/>
        <MyData/>
      </div>
    </main>
  );
}
