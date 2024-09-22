"use client";

import { TypewriterEffect } from "./ui/typewriter-effect";

export const TypewriterEffectDemo = ({ className = "" }) => {
  const words = [
    {
      text: "Choisir",
    },
    {
      text: "un",
    },
    {
        text: "livre",
      },
      {
        text: ",",
      },
    {
      text: "choisir",
    },
    {
      text: "un",
    },
    {
        text: "libraire",
      },
    {
      text: "ePagine.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className={`${className} flex flex-col items-center justify-center m-10`}>
    
      <TypewriterEffect words={words} />
      
      
    </div>
  );
};
