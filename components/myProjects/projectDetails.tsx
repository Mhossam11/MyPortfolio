"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface IProps{
  title : string
  description : string
  technologies : string
}

export function ProjectDetails({description,title}:IProps) {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="link" className="text-purple-400/50 hover:text-purple-300 font-bold tracking-wider underline">Project Details</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm ">
          <DrawerHeader>
            <DrawerTitle className="text-bold tracking-wide uppercase text-2xl text-purple-400/70">{title}</DrawerTitle>
            <DrawerDescription className="text-md text-justify">{description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">

          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="text-bold uppercase tracking-widest rounded-3xl hover:bg-purple-400/20">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
