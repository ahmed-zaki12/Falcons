import { motion } from "framer-motion";
import vision2 from "../Assets/vision.gif";

const AboutVision = () => {
    return (
        <motion.section
            className="min-h-screen flex justify-center px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="flex flex-col justify-center items-center gap-6 sm:gap-10 bg-[#1a1b30]/40 border-2 border-[#2985cc] rounded-3xl p-6 sm:p-10 md:p-12 my-20 sm:my-24 lg:my-32 w-full max-w-4xl">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={vision2}
                        alt="Vision"
                        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-r from-[#d1e3e8] to-[#869dfb] rounded-full p-3 sm:p-4"
                    />
                    <h1 className="text-2xl sm:text-3xl text-[#2dd0fc] orbitron text-center">
                        Our <span className="orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb]">Vision</span>
                    </h1>
                </div>
                <p className="text-[#acb2ba] text-sm sm:text-base md:text-lg text-center exo max-w-3xl ">
                    Our vision is to build a strong cybersecurity culture at CIC, uniting students from all backgrounds and empowering them to learn, grow, and proudly represent the college in national and international competitions.
                </p>
            </div>
        </motion.section>
    );
};
export default AboutVision;
