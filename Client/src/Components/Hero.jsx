import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section
            className="min-h-screen flex items-center justify-center px-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.3,
                    },
                },
            }}
        >
            <div className="flex flex-col items-center text-center gap-6">
                <motion.h1
                    className="text-4xl sm:text-6xl lg:text-8xl py-2 text-[#2dd0fc] orbitron titleGlow"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    FA<span className="bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb] orbitron">LCO</span>NS
                </motion.h1>
                <motion.h5
                    className="orbitron text-2xl sm:text-3xl lg:text-4xl text-[#04c8d4] font-bold"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    Own the Sky
                </motion.h5>
                <motion.p
                    className="text-[#acb2ba] text-base sm:text-lg lg:text-xl max-w-2xl exo"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    Join the premier cybersecurity student community at Canadian International College. Master ethical hacking, compete in CTF challenges, and soar to new heights in cybersecurity.
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto justify-center"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <Link
                        to={"/JoinUs"}
                        className="exo text-white py-3 sm:py-5 px-8 sm:px-16 bg-gradient-to-r from-[#17d6fb] to-[#814bed] shadow-[0_0_20px_5px_#17d6fb] rounded-3xl animate-shadow-pulse text-lg sm:text-xl flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Join Us
                    </Link>
                    <a
                        href="#/"
                        className="exo bg-[#1a1b30] text-white py-3 sm:py-5 px-8 sm:px-16 text-lg sm:text-xl rounded-3xl flex items-center justify-center gap-2 border-2 border-[#2dd0fc] font-bold hover:bg-[#2dd0fc] hover:text-black transition-all duration-300 hover:scale-105"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Learn More
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};
export default Hero;
