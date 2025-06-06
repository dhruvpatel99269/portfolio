import { useRef, useEffect } from "react";
import createGlobe from "cobe";

export const Globe = ({
    className
  }) => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      let phi = 2.5;
  
      if (!canvasRef.current) return;
  
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 300 * 2,
        height: 300 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          { location: [15.7595, 74.2367], size: 0.03 },
          { location: [23.7128, 77.006], size: 0.1 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        },
      });
  
      return () => {
        globe.destroy();
      };
    }, []);
  
    return (
      (<canvas
        ref={canvasRef}
        style={{ width: 300, height: 300, maxWidth: "100%", aspectRatio: 1 }}
        className={className} />)
    );
  };
  