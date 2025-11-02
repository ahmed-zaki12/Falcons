import { motion } from "framer-motion";

const AboutHero = () => {
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
            <div className="flex flex-col justify-center items-center gap-6 max-w-5xl text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-7xl py-2 text-[#2dd0fc] orbitron titleGlow"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    Abou<span className="bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb] orbitron">t Falc</span>ons
                </motion.h1>
                <motion.h5
                    className="orbitron text-lg sm:text-xl md:text-2xl text-[#04c8d4] font-bold"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    More Than a Club → It’s a Movement
                </motion.h5>
                <motion.p
                    className="text-[#acb2ba] text-base sm:text-lg md:text-xl exo"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    We dreamed of creating a cybersecurity community at CIC, a place where passionate students come together to learn, share knowledge, and support each other. Falcon’s CIC was born to connect future cybersecurity professionals, exchange benefits, and inspire growth through collaboration and real-world challenges.
                </motion.p>
            </div>
        </motion.section>
    );
};
export default AboutHero;
