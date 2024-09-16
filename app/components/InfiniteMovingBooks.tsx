/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingBooks() {
  return (
    <div className="flex flex-col md:flex-row gap-2"> {/* Changé en flex-col pour mobile, flex-row pour desktop */}
      <div className="h-[40rem] w-full md:w-1/3 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="down"
          speed="slow"
        />
      </div>
      <div className="h-[40rem] w-full md:w-1/3 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="up"
          speed="slow"
        />
      </div>
      <div className="h-[40rem] w-full md:w-1/3 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="down"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "",
    name: "",
    title: "",
    image: <img src='https://babelio.wordpress.com/wp-content/uploads/2019/12/sauvages.jpg?w=275&h=433' alt='Couverture du livre' className='w-full h-auto' />
  },
  {
    quote:
      "",
    name: "",
    title: "",
    image: <img src='https://babelio.wordpress.com/wp-content/uploads/2019/12/la-fracture.jpg?w=272&h=417' alt='Couverture du livre' className='w-full h-auto' />,
  },
  {
    quote: "",
    name: "",
    title: "",
    image:<img src='https://babelio.wordpress.com/wp-content/uploads/2019/12/sauvage.jpg?w=306&h=447' alt='Couverture du livre' className='w-full h-auto' />,

  },
  {
    quote:
      "",
    name: "",
    title: "",
    image:<img src='https://babelio.wordpress.com/wp-content/uploads/2019/12/civilizations.jpg?w=277&h=410' alt='Couverture du livre' className='w-full h-auto' />,

  },
  {
    quote:
      "",
    name: "",
    title: "",
    image:<img src='https://babelio.wordpress.com/wp-content/uploads/2019/12/la-maison-des-oiseaux.jpg?w=313&h=465' alt='Couverture du livre' className='w-full h-auto' />,

  },
];
