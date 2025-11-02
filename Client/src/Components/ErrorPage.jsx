import { useNavigate } from "react-router-dom";
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

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="flex items-center justify-center min-h-screen px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-center items-center gap-6 max-w-2xl text-center">
        <motion.img
          src={Falcon}
          alt="falcon logo"
          className="h-20 w-20 sm:h-24 sm:w-24 bg-transparent"
          variants={itemVariants}
        />
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h1 className="orbitron text-[#65e3f4] text-2xl sm:text-3xl md:text-4xl">
            Oops… Page not found
          </h1>
          <p className="text-[#c7cdd6] text-base sm:text-lg md:text-xl exo px-2">
            The page you are looking for doesn’t exist or has been moved.  
            Please check the URL or go back to the homepage.
          </p>
        </motion.div>

        <motion.button
          onClick={() => navigate("/")}
          className="exo bg-[#1a1b30] text-white py-2 sm:py-3 px-6 sm:px-10 text-sm sm:text-lg rounded-3xl flex items-center justify-center gap-2 border-2 border-[#2dd0fc] font-bold hover:bg-[#2dd0fc] hover:text-black transition-all duration-300 hover:scale-105"
          variants={itemVariants}
        >
          Back to Home
        </motion.button>
      </div>
    </motion.section>
  );
};

export default ErrorPage;
