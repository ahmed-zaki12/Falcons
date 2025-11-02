
import { MdOutlineStar, MdMonitor } from "react-icons/md";
import { BsInfoLg } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
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

const EventsCategories = () => {
  return (
    <section className="px-6 py-20">
      <div className="flex flex-col justify-center gap-12 items-center">
        <motion.div
          className="flex flex-col gap-6 items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb]">
            Event Categories
          </h1>
          <p className="text-[#acb2ba] text-base sm:text-lg lg:text-xl max-w-2xl exo">
            We host diverse cybersecurity events to cater to all skill levels and interests.
          </p>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Workshop */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center gap-6 bg-[#141823] border-2 border-[#1c3446] p-6 rounded-3xl hover:border-[#00f5ff] transition-colors duration-300 text-center"
          >
            <div className="text-white text-2xl sm:text-3xl p-4 bg-gradient-to-r from-[#22c461] to-[#388be2] rounded-full">
              <MdMonitor />
            </div>
            <h3 className="text-[#00f5ff] orbitron text-lg sm:text-xl">
              Workshops
            </h3>
            <p className="text-[#acb2ba] exo text-sm sm:text-base">
              Hands-on technical workshops covering penetration testing, digital forensics, and secure coding.
            </p>
          </motion.div>

          {/* CTF */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center gap-6 bg-[#141823] border-2 border-[#1c3446] p-6 rounded-3xl hover:border-[#00f5ff] transition-colors duration-300 text-center"
          >
            <div className="text-white text-2xl sm:text-3xl p-4 bg-gradient-to-r from-[#5fc1dc] to-[#4f19c5] rounded-full">
              <MdOutlineStar />
            </div>
            <h3 className="text-[#00f5ff] orbitron text-lg sm:text-xl">
              CTF Competitions
            </h3>
            <p className="text-[#acb2ba] exo text-sm sm:text-base">
              Capture The Flag challenges in web security, cryptography, reverse engineering, and forensics.
            </p>
          </motion.div>

          {/* Talks */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center gap-6 bg-[#141823] border-2 border-[#1c3446] p-6 rounded-3xl hover:border-[#00f5ff] transition-colors duration-300 text-center"
          >
            <div className="text-white text-2xl sm:text-3xl p-4 bg-gradient-to-r from-[#9734e6] to-[#e446a0] rounded-full">
              <BsInfoLg />
            </div>
            <h3 className="text-[#00f5ff] orbitron text-lg sm:text-xl">
              Industry Talks
            </h3>
            <p className="text-[#acb2ba] exo text-sm sm:text-base">
              Expert presentations on industry trends, career guidance, and cutting-edge cybersecurity topics.
            </p>
          </motion.div>

          {/* Networking */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center gap-6 bg-[#141823] border-2 border-[#1c3446] p-6 rounded-3xl hover:border-[#00f5ff] transition-colors duration-300 text-center"
          >
            <div className="text-white text-2xl sm:text-3xl p-4 bg-gradient-to-r from-[#f6701b] to-[#db5850] rounded-full">
              <IoPersonAdd />
            </div>
            <h3 className="text-[#00f5ff] orbitron text-lg sm:text-xl">
              Networking
            </h3>
            <p className="text-[#acb2ba] exo text-sm sm:text-base">
              Connect with cybersecurity professionals, alumni, and fellow students in informal settings.
            </p>
          </motion.div>
        </motion.div>

        <div className="flex justify-center items-center w-full px-4">
          <motion.div
            className="flex flex-col items-center gap-8 bg-[#1a1b30]/50 border-2 border-[#1c3446] rounded-3xl p-8 sm:p-12 max-w-4xl w-full text-center mt-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-4 text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb] orbitron">
                Stay Updated
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#acb2ba] exo">
                Don't miss out on our upcoming events. Join our community to get notified about new workshops, competitions, and networking opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to={"/JoinUs"}
                className="exo text-white py-4 px-6 bg-gradient-to-r from-[#17d6fb] to-[#814bed] shadow-[0_0_20px_5px_#17d6fb] rounded-3xl animate-shadow-pulse text-lg sm:text-xl text-center"
              >
                Join Falcons Today
              </Link>
              <a
                href="#Events"
                className="exo text-white py-4 px-6 border-2 border-[#2dd0fc] rounded-3xl text-lg sm:text-xl font-bold text-center hover:bg-[#2dd0fc] hover:text-black transition-all duration-300 hover:scale-105"
              >
                View Upcoming Events
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default EventsCategories;
