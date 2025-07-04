import { useState } from 'react';
import Button from './ui/Button';
import SpotlightImage from './ui/Spotlight';
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Globe } from './canvas/Globe';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('99269dhruvpatel@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 group/translate">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            
            <div className='group-hover/translate:translate-x-2 transition duration-200'>
              <p className="grid-headtext">Hi, I’m Dhruv Patel</p>
              <p className="grid-subtext">
                I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 group/translate">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain opacity-50" />

            <div className='group-hover/translate:translate-x-2 transition duration-200'>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4 group/translate">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe />
            </div>
            <div className='group-hover/translate:translate-x-2 transition duration-200'>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Pune,India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 group/translate">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div className='group-hover/translate:translate-x-2 transition duration-200'>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext text-xs">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 group/translate">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className={cn("space-y-2 group-hover/translate:translate-x-2 transition duration-200")}>
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="text-xs lg:text-xl md:text-lg font-medium text-gray_gradient text-white">99269dhruvpatel@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
