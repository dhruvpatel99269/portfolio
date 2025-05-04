"use client";

import { testimonials } from "../constants/index";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Certificates = () => {
  return (
    <section className="c-space my-20" id="certificate">
      <div className='flex justify-center items-center flex-row'>
        <span className='waving-hand text-4xl'>🎉</span> <span className="head-text">Certifications</span> <span className='waving-hand text-4xl'>🎉</span>
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[30vh] md:h-[30rem] w-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden pt-24 lg:pt-36 xl:pt-36"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

export default Certificates;