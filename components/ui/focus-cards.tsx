"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { IApproachCards } from "@/interface";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: IApproachCards;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-[600px] md:h-96 w-full transition-all duration-300 ease-out px-4 md:px-0 ",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0 rounded-2xl"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 space-y-5">
          <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
          <h1 className="text-sm md:text-base text-gray-300">{card.Description}</h1>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium opacity-100 transition-opacity duration-300">
        Hover on me
  </div>
    </div>
  )
);

Card.displayName = "Card";

// type Card = {
//   title: string;
//   src: string;
// };

export function FocusCards({ cards }: { cards: IApproachCards[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full px-4 ">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
