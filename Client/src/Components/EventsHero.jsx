import { motion } from "framer-motion";

const EventsHero = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center px-6"
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
      <div className="flex flex-col justify-center items-center w-full gap-6 text-center">
        <div className="flex flex-col gap-4 items-center">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl py-2 orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb] titleGlow"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Events
          </motion.h1>
          <motion.h5
            className="orbitron text-xl sm:text-2xl text-[#04c8d4] font-bold"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Learn. Compete. Network.
          </motion.h5>
        </div>
        <motion.p
          className="text-[#acb2ba] text-base sm:text-lg lg:text-xl max-w-3xl exo"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Join our cybersecurity workshops, CTF competitions, industry talks, and networking events. Build your skills, meet professionals, and advance your cybersecurity career.
        </motion.p>
      </div>
    </motion.section>
  );
};
export default EventsHero;
