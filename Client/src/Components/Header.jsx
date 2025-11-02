import { useState } from "react";
import Falcon from "../assets/Falcon3.png";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navContainerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4,
        },
    },
};

const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const mobileNavContainerVariants = {
    hidden: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    visible: {
        transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
};

const mobileNavItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.div
            className="bg-[#162032] flex justify-between items-center fixed top-0 left-0 z-50 w-full border-b-2 border-[#3874a2] px-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >

            <div className="flex items-center">
                <div className="p-3 rounded-full">
                    <img
                        src={Falcon}
                        alt="falcon logo"
                        className="h-12 w-12 bg-transparent animate-scale-grow"
                    />
                </div>
                <Link to={"/"} className="text-[#04c8d4] text-xl orbitron2">
                    FALCONS
                </Link>
            </div>

            <motion.nav
                className="hidden lg:flex gap-7 p-2 mx-4 items-center"
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
            >
                {[
                    { path: "/", label: "Home" },
                    { path: "/About", label: "About" },
                    { path: "/Events", label: "Events" },
                    { path: "/Resources", label: "Resources" },
                    { path: "/Blog", label: "Blog" },
                ].map(({ path, label }) => (
                    <motion.div key={path} variants={navItemVariants}>
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                `orbitron hover:scale-105 transition ease-in-out relative inline-block 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-[#7e3ce4] 
               after:origin-left after:scale-x-0 after:transition-transform after:duration-300 
               hover:after:scale-x-100 ${isActive ? "text-[#01e8f2]" : "text-white hover:text-[#01effa]"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    </motion.div>
                ))}
                <motion.div variants={navItemVariants}>
                    <NavLink
                        to={"/JoinUs"}
                        className={({ isActive }) =>
                            `${isActive
                                ? "orbitron hover:scale-105 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-[#7e3ce4] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 text-[#01e8f2] transition-all duration-300 ease-in"
                                : "text-white p-3 bg-gradient-to-r from-[#17d6fb] to-[#814bed] rounded-3xl px-6 orbitron hover:shadow-[0_0_20px_#2dd0fc] transition-all duration-300 ease-in"
                            }`
                        }
                    >
                        Join Us
                    </NavLink>
                </motion.div>
            </motion.nav>
            <button
                className="lg:hidden text-white text-2xl focus:outline-none"
                onClick={toggleMenu}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-full left-0 w-full bg-[#162032] flex flex-col items-center gap-6 py-6 border-t border-[#3874a2] lg:hidden"
                        variants={mobileNavContainerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {[
                            { path: "/", label: "Home" },
                            { path: "/About", label: "About" },
                            { path: "/Events", label: "Events" },
                            { path: "/Blog", label: "Blog" },
                            { path: "/Resources", label: "Resources" },
                            { path: "/JoinUs", label: "Join Us" },
                        ].map(({ path, label }) => (
                            <motion.div key={path} variants={mobileNavItemVariants}>
                                <NavLink
                                    to={path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `orbitron text-lg transition duration-200 ${isActive
                                            ? "text-[#01e8f2]"
                                            : "text-white hover:text-[#01effa]"
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Header;
