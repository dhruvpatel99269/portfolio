"use client";

import { testimonials } from "../constants/index";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Certificates = () => {
  return (
    <section className="c-space my-20">    
      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] w-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>        
      </div>
    </section>
  )
}

export default Certificates;