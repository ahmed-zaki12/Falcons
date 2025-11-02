import { motion } from "framer-motion";

const ResourcesSoftware = () => {
  const softwareData = [
    { name: "Nmap", links: ["https://nmap.org/download"] },
    { name: "Kali Linux ISO", links: ["https://www.kali.org/get-kali/#kali-installer-images"] },
    { name: "VMware", links: ["https://knowledge.broadcom.com/external/article/344595/downloading-and-installing-vmware-workst.html"] },
    { name: "VirtualBox", links: ["https://www.virtualbox.org/wiki/Downloads"] },
    { name: "Nessus", links: ["https://www.tenable.com/downloads/nessus?loginAttempted=true"] },
    { name: "Wireshark", links: ["https://www.wireshark.org/download.html"] },
    { name: "Burp Suite", links: ["https://portswigger.net/burp/communitydownload"] },
    { name: "Ghidra", links: ["https://ghidralite.com/"] },
    { name: "IDA", links: ["https://hex-rays.com/ida-free"] },
  ];

  const col1 = softwareData.slice(0, 3);
  const col2 = softwareData.slice(3, 6);
  const col3 = softwareData.slice(6, 9);

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const renderLinks = (links) => {
    return (
      <div className="flex items-center gap-3">
        {links.slice(0, 3).map((link, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="exo text-blue-400 hover:text-white transition ease-in-out relative inline-block
               after:content-[''] after:absolute after:left-0 after:bottom-0
               after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-[#7e3ce4]
               after:origin-left after:scale-x-0 after:transition-transform after:duration-300
               hover:after:scale-x-100 px-2 py-1 rounded-md border border-transparent hover:border-white/10"
          >
            {links.length > 1 ? `DL ${i + 1}` : "Download"}
          </a>
        ))}
      </div>
    );
  };

  return (
    <section id="software" className="py-20 px-4">
      <div className="flex flex-col items-center gap-12 max-w-7xl mx-auto">
        <motion.h1
          className="text-white orbitron text-center text-3xl md:text-4xl hover-text-glow duration-300 transition-all ease-in-out"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Essential Software
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="p-6 md:p-8 flex flex-col gap-6 bg-[#141823]/50 border-2 border-[#1c3446] rounded-2xl hover:border-[#00f5ff] transition-colors duration-300"
            variants={columnVariants}
          >
            {col1.map((tool) => (
              <motion.div
                key={tool.name}
                className="hover:scale-105 transition-all duration-300 flex justify-between items-center bg-blue-800/30 hover:bg-blue-600/40 p-4 md:p-6 space-x-4 md:space-x-8 rounded-xl"
                variants={itemVariants}
              >
                <h1 className="text-white orbitron">{tool.name}</h1>
                {renderLinks(tool.links)}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="p-6 md:p-8 flex flex-col gap-6 bg-[#141823]/50 border-2 border-[#1c3446] rounded-2xl hover:border-[#00f5ff] transition-colors duration-300"
            variants={columnVariants}
          >
            {col2.map((tool) => (
              <motion.div
                key={tool.name}
                className="hover:scale-105 flex justify-between items-center bg-blue-800/30 hover:bg-blue-600/40 transition-all duration-300 p-4 md:p-6 space-x-4 md:space-x-8 rounded-xl"
                variants={itemVariants}
              >
                <h1 className="text-white orbitron">{tool.name}</h1>
                {renderLinks(tool.links)}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="p-6 md:p-8 flex flex-col gap-6 bg-[#141823]/50 border-2 border-[#1c3446] rounded-2xl hover:border-[#00f5ff] transition-colors duration-300"
            variants={columnVariants}
          >
            {col3.map((tool) => (
              <motion.div
                key={tool.name}
                className="hover:scale-105 flex justify-between items-center bg-blue-800/30 hover:bg-blue-600/40 transition-all duration-300 p-4 md:p-6 space-x-4 md:space-x-8 rounded-xl"
                variants={itemVariants}
              >
                <h1 className="text-white orbitron">{tool.name}</h1>
                {renderLinks(tool.links)}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSoftware;
