import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation

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
        className={`scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
      >
        <ul
          ref={scrollerRef}
          className={`flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap ${start && "animate-scroll"
            } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-[70vw] max-w-full relative rounded-2xl border border-b-0 bg-black-200 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <div className="me-3">
                    <img src="/profile.svg" alt="profile" />
                  </div>
                  <span className="flex flex-col gap-1">
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-white-200 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Add prop types for validation
InfiniteMovingCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  speed: PropTypes.oneOf(["fast", "normal", "slow"]),
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
};