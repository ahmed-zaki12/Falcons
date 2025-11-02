import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Resources = () => {
  return (
    <section className="py-20 px-4" id="learn">
      <div className="flex flex-col gap-12 items-center max-w-6xl mx-auto">
        <motion.h1
          className="text-white orbitron text-center text-3xl md:text-4xl hover-text-glow duration-300 transition-all ease-in-out"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Learning Paths
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
    
          <motion.div
            className="flex flex-col gap-6 bg-[#141823] border-2 border-[#1c3446] p-8 rounded-3xl feature-card hover:border-[#00f5ff] transition-colors duration-300"
            variants={itemVariants}
          >
            <div className="flex justify-between items-center w-full">
              <h1 className="orbitron text-xl md:text-2xl text-white">Beginner</h1>
              <p className="exo text-[#49da7e] bg-[#1e463e] px-4 py-1 rounded-full">Start Here</p>
            </div>
            <p className="text-[#acb2ba] exo text-base md:text-lg text-center">
              Perfect for students new to cybersecurity. Build fundamental knowledge and practical skills.
            </p>
            <ul className="list-disc marker:text-[#00f5ff] text-[#acb2ba] exo text-sm md:text-lg pl-6 space-y-2 text-left">
              <li>Week 1: Network</li>
              <li>Week 2: Linux </li>
              <li>Week 3: Programming Essentials</li>
              <li>Week 4: Cryptography </li>
              <li>Week 5: Entry-Level-CTF</li>
            </ul>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 bg-[#141823] border-2 border-[#1c3446] p-8 rounded-3xl feature-card hover:border-[#00f5ff] transition-colors duration-300"
            variants={itemVariants}
          >
            <div className="flex justify-between items-center w-full">
              <h1 className="orbitron text-xl md:text-2xl text-white">Advanced</h1>
              <p className="exo text-[#af7ae8] bg-[#3e3662] px-4 py-1 rounded-full">Expert</p>
            </div>
            <p className="text-[#acb2ba] exo text-base md:text-lg text-center">
              Master advanced techniques and specialize in cutting-edge cybersecurity domains.
            </p>
            <ul className="list-disc marker:text-[#00f5ff] text-[#acb2ba] exo text-sm md:text-lg pl-6 space-y-2 text-left">
              <li>Penetration Testing</li>
              <li>Reverse Engineering & Malware Analysis</li>
              <li>Network Security (defensive)</li>
              <li>SOC Analyst & DFIR</li>
              <li>Cryptography</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
