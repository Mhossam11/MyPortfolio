import { FocusCards } from "@/components/ui/focus-cards";

export function MyServices() {
  const cards = [
    {
      title: "Planning & Strategy",
      Description:"We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
      src: "/planing.jpg",
    },
    {
      title: "Development & Progress Update",
      Description:"Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
      src: "/developement.jpg",
    },
    {
      title: "Development & Launch",
      Description:"This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
      src: "/launch.jpg",
    },
  ];

  return(
    <>
            <h1 className="my-12 md:my-24 text-white text-xl md:text-4xl   font-bold tracking-wide text-center  uppercase">
                My
                <span className="text-purple-900/60 dark:text-purple-400"> Approach</span>
            </h1>
            <FocusCards cards={cards} />
    </>
  ) ;
}
