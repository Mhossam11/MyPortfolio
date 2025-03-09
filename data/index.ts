import { IProjects } from "@/interface";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const skills = [
  ["NextJs", "ReactJs", "TypeScript", "JS"],
  ["CSS", "MongoDB", "Patterns", "Testing"],
  ["Responsive", "Optimization"],
];

export const projects:IProjects[] = [
  {
    id: 1,
    title: "UniLink - University Portal",
    description:
      "A comprehensive university portal enhancing academic and administrative processes. It provides a centralized platform for students, professors, advisors, and staff to streamline tasks like course management, academic tracking, and communication.",
    smallDescription: "A centralized platform for course management, academic tracking, and communication.",
    technologies: "Next.js, Express.js, TailwindCSS, TypeScript, Redux, Shadcn",
    imageSrc: "/dashboard.jpg",
    icons: ["/next.svg", "/tail.svg", "/ts.svg", "/redux.svg", "/express.svg", "/sql.svg"],
    liveLink: "", // Update with actual live link
  },   
  {
    id: 2,
    title: "Full-Stack To-Do App",
    description:
      "A full-stack task management application built with Next.js and MongoDB. It provides user authentication with Clerk, allowing users to add, edit, and delete their todos. The app also includes a dark mode/light mode switch using Shadcn for UI components.",
    smallDescription: "A task management app with authentication, CRUD functionality, and dark mode.",
    technologies: "Next.js, MongoDB, TailwindCSS, TypeScript, Clerk, Shadcn",
    imageSrc: "/fullStackTodo.png", // Update with an actual image
    icons: ["/next.svg", "/mongo.svg", "/ts.svg", "/redux.svg"],
    liveLink: "", // Update with actual live link
  },
  
];
