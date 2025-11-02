
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCircleArrowDown } from "react-icons/fa6";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ResourcesHero = () => {
    return (
        <motion.section
            className="min-h-screen flex flex-col justify-center items-center px-4 py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col gap-16 items-center w-full max-w-6xl">
        
                <motion.div className="flex flex-col items-center gap-6 text-center" variants={itemVariants}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl py-2 orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb] titleGlow">
                        Cybersecurity Hub
                    </h1>
                    <p className="text-[#acb2ba] text-lg sm:text-xl md:text-2xl max-w-3xl exo">
                        Comprehensive resources to elevate your cybersecurity skills from beginner to expert
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 md:gap-4 w-full justify-center items-center"
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex flex-col p-6 items-center gap-6 bg-[#1d346d]/40 rounded-3xl w-72 sm:w-80 md:w-84 hover:border hover:border-[#5fc1dc] transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-white text-3xl p-4 bg-gradient-to-r from-[#5fc1dc] to-[#4f19c5] rounded-full">
                            <FaGraduationCap />
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h1 className="text-white orbitron">Learning Paths</h1>
                            <p className="text-[#acb2ba] exo">Structured roadmaps</p>
                        </div>
                        <motion.a
                            href="#learn"
                            className="text-[#acb2ba] text-2xl hover:translate-y-1 duration-300 hover:text-[#5fc1dc] transition-all"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaCircleArrowDown />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="flex flex-col p-6 items-center gap-6 bg-purple-900/40 rounded-3xl w-72 sm:w-80 md:w-84 hover:border hover:border-[#bc7dfb] transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-white text-3xl p-4 bg-gradient-to-r from-[#bc7dfb] to-[#9a40ed] rounded-full">
                            <IoSettingsSharp />
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h1 className="text-white orbitron">Essential Software</h1>
                            <p className="text-[#acb2ba] exo">Essential toolkits</p>
                        </div>
                        <motion.a
                            href="#software"
                            className="text-[#acb2ba] text-2xl hover:translate-y-1 duration-300 hover:text-[#bc7dfb] transition-all"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaCircleArrowDown />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ResourcesHero;