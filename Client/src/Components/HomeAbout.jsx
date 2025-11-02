import { GrWorkshop } from "react-icons/gr";
import { FaFlag } from "react-icons/fa";
import { RiTeamFill, RiUserCommunityFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
    },
};

const HomeAbout = () => {
    return (
        <section className="px-4" id="/">
            <div className="flex flex-col items-center gap-16 mt-16 lg:mt-24">
                <motion.div
                    className="text-white flex flex-col gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb]">
                        About Falcons
                    </h1>
                    <p className="text-[#acb2ba] text-base sm:text-lg lg:text-xl text-center max-w-2xl exo">
                        We are a community of cyber guardians born to protect and build the future of cybersecurity.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className=" flex flex-col justify-center items-center h-72 gap-6 bg-[#141823] border border-[#1c3446] p-8 text-center rounded-3xl hover:border-[#00f5ff] transition-colors duration-300 ease-in-out"
                    >
                        <div className="text-blue-600 text-5xl"><GrWorkshop /></div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#00f5ff] orbitron">Workshops</h3>
                            <p className="text-[#acb2ba] text-sm sm:text-base exo">Hands-on training in penetration testing, forensics, and secure coding with expert instructors.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="flex flex-col justify-center items-center h-72 gap-6 bg-[#141823] border border-[#1c3446] p-8 text-center rounded-3xl hover:border-[#00f5ff] transition-colors duration-300 ease-in-out"
                    >
                        <div className="text-red-600 text-5xl"><FaFlag /></div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#00f5ff] orbitron">CTF Competitions</h3>
                            <p className="text-[#acb2ba] text-sm sm:text-base exo">Challenge yourself in Capture-the-Flag events and hackathons. Compete and climb the leaderboard.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="flex flex-col justify-center items-center h-72 gap-6 bg-[#141823] border border-[#1c3446] p-8 text-center rounded-3xl hover:border-[#00f5ff] transition-colors duration-300 ease-in-out"
                    >
                        <div className="text-green-500 text-5xl"><RiTeamFill /></div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#00f5ff] orbitron">Mentorship</h3>
                            <p className="text-[#acb2ba] text-sm sm:text-base exo">Connect with experienced Falcons who guide your journey with advice and support.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="flex flex-col justify-center items-center h-72 gap-6 bg-[#141823] border border-[#1c3446] p-8 text-center rounded-3xl hover:border-[#00f5ff] transition-colors duration-300 ease-in-out"
                    >
                        <div className="text-orange-500 text-5xl"><RiUserCommunityFill /></div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#00f5ff] orbitron">Community</h3>
                            <p className="text-[#acb2ba] text-sm sm:text-base exo">Share knowledge and experiences in a vibrant environment where collaboration fuels growth.</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-col justify-center items-center max-w-3xl gap-8 bg-[#1a1b30]/50 border border-[#1c3446] rounded-3xl p-8 sm:p-12 my-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="flex flex-col gap-4 text-white text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#2dd0fc] orbitron">
                            Ready t<span className="orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb]">o Soar?</span>
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-[#acb2ba] exo">
                            Join our elite community of cybersecurity enthusiasts and take your skills to new heights. The sky is not the limit—it's just the beginning.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto justify-center">
                        <Link to={"/JoinUs"} className="exo text-white py-3 px-6 bg-gradient-to-r from-[#17d6fb] to-[#814bed] shadow-[0_0_20px_5px_#17d6fb] rounded-3xl animate-shadow-pulse text-lg text-center">
                            Join Falcons Today
                        </Link>
                        <Link to={"/About"} className="exo text-white py-3 px-6 border-2 border-[#2dd0fc] rounded-3xl text-lg font-bold text-center hover:bg-[#2dd0fc] hover:text-black transition-all duration-300 hover:scale-105">
                            Learn More About Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeAbout;
