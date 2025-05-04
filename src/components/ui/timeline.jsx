"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { textVariant } from "../../lib/motion";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full font-sans md:px-10"
            ref={containerRef}
        >
            <motion.div variants={textVariant()}>
                <div className='flex justify-center items-center flex-row'>
                    <span className='waving-hand text-4xl'>📖</span> <span className="head-text">Education</span> <span className='waving-hand text-4xl'>📖</span>
                </div>
            </motion.div>
            <div ref={ref} className="relative max-w-lg mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-center pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center justify-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-[-50px] md:left-[-50px] w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>

                            <div className="pl-20 pr-4 md:pl-4 w-full justify-center items-center">
                                <h3 className="hidden md:block text-lg md:pl-20 md:text-xl font-bold text-white">
                                    {item.education} ({item.year})
                                </h3>
                                <p className="hidden md:block text-md md:pl-20 md:text-lg dark:text-neutral-400">
                                    {item.institute}
                                </p>
                                <p className="hidden md:block text-md md:pl-20 md:text-lg dark:text-neutral-400">
                                    {item.percentage}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

Timeline.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            education: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            institute: PropTypes.node.isRequired,
            percentage: PropTypes.string.isRequired, // added to match data structure
        })
    ).isRequired,
};
