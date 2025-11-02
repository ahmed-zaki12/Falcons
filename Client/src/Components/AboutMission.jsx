
import { motion } from "framer-motion";
import { GoGoal } from "react-icons/go";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const AboutMission = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <motion.div
                className="flex flex-col gap-12 items-center max-w-6xl w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="flex flex-col gap-6 items-center text-center" variants={itemVariants}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb]">
                        Who Are We
                    </h1>
                    <p className="text-[#acb2ba] text-base sm:text-lg md:text-xl exo max-w-3xl">
                        Falcon’s CIC is a student-led club at Canadian International College, created to build a strong cybersecurity community. We help students learn by doing, support each other through mentorship, and connect with experts in the field.
                    </p>
                </motion.div>

                <motion.div className="flex flex-col justify-center items-center gap-8 bg-[#141823] border border-[#1c3446] p-6 sm:p-10 rounded-3xl feature-card hover:border-[#00f5ff] w-full" variants={itemVariants}>
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-[#c8fafc] text-5xl sm:text-6xl">
                            <GoGoal />
                        </div>
                        <h1 className="text-2xl sm:text-3xl text-[#00f5ff] orbitron">Our Mission</h1>
                    </div>
                    <p className="text-[#acb2ba] text-sm sm:text-base md:text-lg text-center exo max-w-4xl mx-auto">
                        We bring together students who are passionate about cybersecurity, no matter their level. Beginners get clear learning paths, guidance, and mentorship, while advanced members lead workshops and support others. We focus on learning by solving real challenges and encourage a culture of ethical hacking, digital awareness, and innovation.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};
export default AboutMission;
