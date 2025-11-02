import falcon from "../assets/Falcon3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
    return (
        <motion.footer
            className="flex flex-col w-full bg-[#121b2e] text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-12 py-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>

                <motion.div className="space-y-4" variants={itemVariants}>
                    <div className="flex justify-center md:justify-start items-center gap-3">
                        <img src={falcon} alt="falcon" className="h-12 w-12" />
                        <h1 className="text-[#04c8d4] font-bold text-xl orbitron">
                            FALCONS
                        </h1>
                    </div>
                    <p className="text-[#acb2ba] exo text-sm sm:text-base">
                        The premier cybersecurity student community at Canadian International
                        College.
                    </p>
                </motion.div>

                <motion.div className="space-y-4" variants={itemVariants}>
                    <h1 className="text-[#04c8d4] font-bold text-lg sm:text-xl orbitron">
                        Quick Links
                    </h1>
                    <div className="flex flex-col gap-2">
                        <Link to="/About" className="text-[#acb2ba] exo hover:text-white">
                            About Us
                        </Link>
                        <Link to="/Events" className="text-[#acb2ba] exo hover:text-white">
                            Events
                        </Link>
                        <Link to="/Blog" className="text-[#acb2ba] exo hover:text-white">
                            Blog
                        </Link>
                        <Link to="/Resources" className="text-[#acb2ba] exo hover:text-white">
                            Resources
                        </Link>
                    </div>
                </motion.div>

                {/* Community */}
                <motion.div className="space-y-4" variants={itemVariants}>
                    <h1 className="text-[#04c8d4] font-bold text-lg sm:text-xl orbitron">
                        Community
                    </h1>
                    <div className="flex flex-col gap-2">
                        <Link to="/JoinUs" className="text-[#acb2ba] exo hover:text-white">
                            Join Us
                        </Link>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://discord.gg/twCvsQa4C"
                            className="text-[#acb2ba] exo hover:text-white">
                            Discord
                        </a>
                    </div>
                </motion.div>

                {/* Contact */}
                <motion.div className="space-y-2 flex flex-col " variants={itemVariants}>
                    <h1 className="text-[#04c8d4] font-bold text-lg sm:text-xl orbitron">
                        Contact
                    </h1>
                    <a
                        href="mailto:info@falcons-eg.tech"
                        className="text-blue-400 hover:underline"
                    >
                        info@falcons-eg.tech
                    </a>
                    <a
                        href="mailto:info@falcons-eg.tech"
                        className="text-blue-400 hover:underline"
                    >
                        support@falcons-eg.tech
                    </a>
                </motion.div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-[#1c3446]"></div>

            <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 py-6 gap-4">
                <p className="text-[#acb2ba] exo text-sm sm:text-base">
                    &copy; 2025 Falcons CIC. All rights reserved.
                </p>
                <div className="flex gap-6 text-xl">
                    <motion.a
                        href=""
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="exo text-[#acb2ba] hover:text-[#de524c] transition-colors"
                    >
                        <FaInstagram />
                    </motion.a>
                    <motion.a
                        href=""
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="exo text-[#acb2ba] hover:text-blue-300 transition-colors"
                    >
                        <FaFacebook />
                    </motion.a>
                    <motion.a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/company/falconscic/posts/?feedView=all"
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="exo text-[#acb2ba] hover:text-[#007ab5] transition-colors"
                    >
                        <FaLinkedin />
                    </motion.a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
