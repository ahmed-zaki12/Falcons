import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineStar, MdMonitor } from "react-icons/md";
import Falcon from "../assets/Falcon3.png";
import { PiEyesFill } from "react-icons/pi";
import { FaFlag } from "react-icons/fa";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <section className="min-h-screen px-6 py-16 relative" id="Events">
      <div className="flex flex-col justify-center gap-12 items-center">
        <motion.div
          className="flex flex-col gap-6 items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb]">
            Upcoming Events
          </h1>
          <p className="text-[#acb2ba] text-base sm:text-lg lg:text-xl max-w-2xl exo">
            Don't miss these exciting cybersecurity events coming up this semester.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl relative">
          <motion.div
            className="absolute inset-0 flex gap-2 justify-center items-center bg-black/30 border border-[#2dd0fc] backdrop-blur-md rounded-3xl z-10"
            animate={{ opacity: [7] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={Falcon}
              alt="falcon logo"
              className="h-20 w-20 bg-transparent"
            />
            <h2 className="text-3xl sm:text-5xl font-bold orbitron bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb]">
              Coming Soon
            </h2>
          </motion.div>

          <div className="flex flex-col justify-between h-full gap-6 bg-[#141823] border-2 border-[#1c3446] p-6 sm:p-8 rounded-3xl">
            <div className="flex justify-between items-center">
              <div className="text-white text-2xl sm:text-3xl p-4 bg-gradient-to-r from-[#5fc1dc] to-[#4f19c5] rounded-full">
                <MdOutlineStar />
              </div>
              <p className="text-[#03d6e1] exo px-3 py-1 bg-[#0f4759] rounded-full text-sm sm:text-base">
                CTF
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center flex-grow">
              <h2 className="text-[#00f5ff] orbitron text-lg sm:text-xl">
                What are you looking for?
              </h2>

              <div className="flex justify-center items-center gap-2">
                <p className="text-[#acb2ba] exo text-sm sm:text-base">
                  We see you
                </p>
                <div className="text-white text-3xl"><PiEyesFill /></div>
              </div>

            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base">
              <div className="flex gap-2 items-center">
                <SlCalender className="text-[#acb2ba]" />
                <p className="text-[#7c8187] exo">December 15, 2025</p>
              </div>
              <div className="flex gap-2 items-center">
                <CiLocationOn className="text-[#acb2ba]" />
                <p className="text-[#7c8187] exo">CIC Main Lab</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoTimeOutline className="text-[#acb2ba]" />
                <p className="text-[#7c8187] exo">10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full gap-6 bg-[#141823] border-2 border-[#1c3446] p-6 sm:p-8 rounded-3xl">
            <div className="flex justify-between items-center">
              <div className="text-white text-2xl sm:text-3xl p-4 bg-gradient-to-r from-[#22c461] to-[#388be2] rounded-full">
                <MdMonitor />
              </div>
              <p className="text-[#41d585] exo px-3 py-1 bg-[#15433f] rounded-full text-sm sm:text-base">
                Workshop
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center flex-grow">
              <h2 className="text-[#00f5ff] orbitron text-lg sm:text-xl">
                Looking for flag?
              </h2>

              <div className="flex justify-center items-center gap-2">
                <p className="text-[#acb2ba] exo text-sm sm:text-base">
                  There is no flags
                </p>
                <div className="text-red-700 text-3xl"><FaFlag /></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base">
              <div className="flex gap-2 items-center">
                <SlCalender className="text-[#acb2ba]" />
                <p className="text-[#7c8187] exo">December 15, 2025</p>
              </div>
              <div className="flex gap-2 items-center">
                <CiLocationOn className="text-[#acb2ba]" />
                <p className="text-[#7c8187] exo">CIC Main Lab</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoTimeOutline className="text-[#acb2ba]" />
                <p className="text-[#7c8187] exo">10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full gap-6 bg-[#141823] border-2 border-[#1c3446] p-6 sm:p-8 rounded-3xl">
            <div className="flex justify-between items-center">
              <div className="text-white text-2xl sm:text-3xl p-4 bg-gradient-to-r from-[#9734e6] to-[#e446a0] rounded-full">
                <MdOutlineStar />
              </div>
              <p className="text-[#9b73d8] exo px-3 py-1 bg-[#312756] rounded-full text-sm sm:text-base">
                CTF
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center flex-grow">
              <h2 className="text-[#00f5ff] orbitron text-lg sm:text-xl">
                Why are you still here?
              </h2>
              <p className="text-[#acb2ba] exo text-sm sm:text-base">
                I told you no Flags here, close inspect!
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:text-base">
              <div className="flex gap-2 items-center">
                <SlCalender className="text-[#acb2ba]" />
                <p className="text-[#7c8187] exo">December 15, 2025</p>
              </div>
              <div className="flex gap-2 items-center">
                <CiLocationOn className="text-[#acb2ba]" />
                <p className="text-[#7c8187] exo">CIC Main Lab</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoTimeOutline className="text-[#acb2ba]" />
                <p className="text-[#7c8187] exo">10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Events;
