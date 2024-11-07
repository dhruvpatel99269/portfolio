import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import { GlareCard } from "./glare-card";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <section className="c-space my-20">
      <div
        ref={containerRef}
        className={`scroller relative h-1/2 z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
      >
        <ul
          ref={scrollerRef}
          className={`flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap ${start && "animate-scroll"
            } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="max-w-full relative rounded-2xl flex-shrink-0"
            >
              <div className="flex justify-center items-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer p-2"
                >
                  <GlareCard className="flex justify-center items-center">
                    <div className="flex flex-col justify-start items-center text-white">
                      <div className="text-[#219ebc] text-2xl">
                        {item.name}
                      </div>

                      <div className="text-xl">
                        Certificate By: {item.issuedby}
                      </div>
                    </div>
                  </GlareCard>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Add prop types for validation

// Updated prop types to make `quote` and `title` optional
InfiniteMovingCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
      link: PropTypes.string.isRequired,
      issuedby: PropTypes.string, // Add issuedby as optional for testimonials
    })
  ).isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  speed: PropTypes.oneOf(["fast", "normal", "slow"]),
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
};