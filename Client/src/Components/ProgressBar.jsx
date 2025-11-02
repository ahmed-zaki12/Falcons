"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#2dd0fc", "#7e3ce4", "#814bed"]
  );

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[9999] pointer-events-none"
      style={{
        scaleX,
        backgroundColor,
        transformOrigin: "0%",
      }}
    />
  );
};

export default ProgressBar;