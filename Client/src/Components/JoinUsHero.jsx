import { motion } from "framer-motion";

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

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const JoinUsHero = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-12 sm:gap-20 items-center w-full max-w-6xl">

        <motion.div
          className="flex flex-col items-center gap-4"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl py-2 orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb] titleGlow">
            Join the Hunt
          </h1>
          <p className="text-[#acb2ba] text-lg sm:text-xl max-w-2xl exo">
            Ready to soar with the Falcons? Become part of CIC's premier
            cybersecurity community and unlock your potential in the digital
            frontier.
          </p>
        </motion.div>

        <motion.div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-8 lg:gap-12 [@media(min-width:1440px)]:gap-6 
            w-full
          "
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              num: 1,
              title: "Apply",
              text: "Submit your application form with your details and motivation",
            },
            {
              num: 2,
              title: "Review",
              text: "Our team reviews your application and experience",
            },
            {
              num: 3,
              title: "Interview",
              text: "Meet with our team for a friendly conversation",
            },
            {
              num: 4,
              title: "Welcome",
              text: "Join the Falcons family and start your journey",
            },
          ].map((step) => (
            <motion.div
              key={step.num}
              className="flex flex-col p-6 items-center gap-4 max-w-xs mx-auto text-center"
              variants={stepVariants}
            >
              <div className="text-white text-3xl p-4 w-16 h-16 bg-gradient-to-r from-[#5fc1dc] to-[#4f19c5] rounded-full flex items-center justify-center">
                {step.num}
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-white text-lg sm:text-xl exo">
                  {step.title}
                </h3>
                <p className="text-[#acb2ba] exo">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default JoinUsHero;
