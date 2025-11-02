import Falcon from "../assets/Falcon3.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogPage = () => {
  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={Falcon}
        alt="falcon logo"
        className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 bg-transparent mb-4"
        variants={itemVariants}
      />
      <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#00f5ff] orbitron" variants={itemVariants}>
        No Blogs Available
      </motion.h2>
      <motion.p className="text-[#acb2ba] text-sm sm:text-base md:text-lg lg:text-xl mt-3 max-w-md sm:max-w-lg md:max-w-2xl exo" variants={itemVariants}>
        We are working on exciting articles and insights for you. Stay tuned!
      </motion.p>
    </motion.section>
  );
};

export default BlogPage;
