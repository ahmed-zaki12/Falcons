import Hero from "../Components/Hero";
import HomeAbout from "../Components/HomeAbout";
import { animated, useScroll } from "@react-spring/web";
import { useRef } from "react";

const HomePage = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="flex flex-col min-h-screen">
      <ScrollProgressBar containerRef={containerRef} />
      <Hero />
      <HomeAbout/>
    </section>
  );
};
export default HomePage;

function ScrollProgressBar({ containerRef }) {
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <animated.div
        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
        style={{
          width: scrollYProgress.to((val) => `${val * 100}%`),
        }}
      />
    </div>
  );
}