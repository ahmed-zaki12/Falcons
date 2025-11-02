import { motion } from "framer-motion";
import zaki from "../Assets/zaki.jpg";
import shawky from "../Assets/shawky.jpg";
import abdelrahman from "../assets/Abdelrahman3.jpg";
import hossam from "../assets/hossam.jpg";
import abdo from "../assets/abdo.jpg";
import maram from "../assets/Maram.jpg";
import mero from "../assets/mero.jpg";
import ali from "../assets/ali.jpg";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaMedium } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const leadershipTeam = [
    {
        name: "Shawky Mohamed",
        role: "Founder",
        image: shawky,
        socials: [
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/shawky-mohamed-303944289/", hoverColor: "hover:text-[#007ab5]" },
            { icon: FaFacebook, href: "https://www.facebook.com/falcons", hoverColor: "hover:text-blue-300" }
        ]
    },
    {
        name: "Abdelrahman Ahmed",
        role: "Co-Founder",
        image: abdelrahman,
        socials: [
            { icon: FaMedium, href: "https://medium.com/@2FACE_", hoverColor: "hover:text-[#e5e9ef]" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdelrahman-ahmed-9476b7305/", hoverColor: "hover:text-[#007ab5]" },
            { icon: FaFacebook, href: "https://www.facebook.com/share/1CL2cJgdMG/", hoverColor: "hover:text-blue-300" }
        ]
    },
    {
        name: "Ahmed Zaki",
        role: "Technical Director",
        image: zaki,
        socials: [
            { icon: IoLogoGithub, href: "https://github.com/ahmed-zaki12", hoverColor: "hover:text-gray-700" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahmed-zaki-8995152b6/", hoverColor: "hover:text-[#007ab5]" },
        ]
    }
];

const falconsTeam = [
    {
        name: "Ahmed Hossam",
        role: "CyberSecurity Mentor",
        image: hossam,
        socials: [
            { icon: IoLogoGithub, href: "https://github.com/Ahmed-Ahmed16", hoverColor: "hover:text-gray-700" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/ahmedhossamahmed", hoverColor: "hover:text-[#007ab5]" },
            { icon: FaXTwitter, href: "https://x.com/Bo7meeed?t=wGZgIGgzvl71IkFSypOicw&s=09", hoverColor: "hover:text-gray-950" }
        ]
    },
    {
        name: "Abdelrahman El Taher",
        role: "PR Head",
        image: abdo,
        socials: [
            { icon: FaFacebook, href: "https://www.facebook.com/share/1ZBBFKAs4D/?mibextid=wwXIfr", hoverColor: "hover:text-blue-300" }
        ]
    },
    {
        name: "Maram Mohammad",
        role: "HR head",
        image: maram,
        socials: [
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/maram-mohammad-3565232a6/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", hoverColor: "hover:text-[#007ab5]" }
        ]
    },
    {
        name: "Amir Azzam",
        role: "Devops Engineer",
        image: mero,
        socials: [
            { icon: IoLogoGithub, href: "https://github.com/amir-azzam", hoverColor: "hover:text-gray-700" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/amir-azzam-1a4a42278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", hoverColor: "hover:text-[#007ab5]" }
        ]
    },
    {
        name: "Ali Hikel",
        role: "Network Engineer",
        image: ali,
        socials: [
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/ali-hikel-456405261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", hoverColor: "hover:text-[#007ab5]" }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const TeamMemberCard = ({ member, widthClass }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, scale: 1.03 }}
        className={`${widthClass} bg-[#141823] border-2 border-[#1c3446] rounded-2xl overflow-hidden hover:border-[#00f5ff] transition-colors duration-300`}
    >
        <img
            src={member.image}
            alt={`${member.name} photo`}
            className="w-full h-[20rem] object-cover"
        />
        <div className="h-2/5 flex flex-col items-center p-3">
            <div className="text-center">
                <h3 className="text-lg font-bold text-white orbitron">{member.name}</h3>
                <p className="text-sm text-[#acb2ba] exo">{member.role}</p>
            </div>
            <div className="mt-8 flex gap-4">
                {member.socials.map((social, index) => (
                    <a
                        key={index}
                        rel="noopener noreferrer"
                        target="_blank"
                        href={social.href}
                        className={`hover:scale-110 text-[#acb2ba] text-3xl ${social.hoverColor} transition-all duration-300`}
                    >
                        <social.icon />
                    </a>
                ))}
            </div>
        </div>
    </motion.div>
);

const Teams = () => {
    return (
        <section>
            <div className="flex flex-col gap-6">

                <div className="flex flex-col gap-8 items-center justify-center">
                    <h1 className='text-5xl text-[#2dd0fc] orbitron text-center'>
                        Leade<span className="bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb] orbitron">rship Team</span>
                    </h1>
                    <p className="text-[#acb2ba] text-2xl text-center exo max-w-4xl mx-auto">
                        Meet the founding directors who are leading Falcons CIC into the future of cybersecurity education.
                    </p>
                </div>


                <motion.div
                    className="flex flex-wrap justify-center items-center gap-12 mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {leadershipTeam.map(member => (
                        <TeamMemberCard key={member.name} member={member} widthClass="w-72" />
                    ))}
                </motion.div>

                <div className="flex flex-col gap-8 items-center justify-center mt-50">
                    <h1 className='text-5xl text-[#2dd0fc] orbitron text-center'>
                        Fa<span className="bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb] orbitron">lcon's Team</span>
                    </h1>
                    <p className="text-[#acb2ba] text-2xl text-center exo max-w-4xl mx-auto">They are more than a team, they are the wings that make it possible for us to soar and Own the Sky.</p>

                    <motion.div
                        className="flex flex-wrap justify-center items-center gap-12 mt-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {falconsTeam.map(member => (
                            <TeamMemberCard key={member.name} member={member} widthClass="w-64" />
                        ))}
                    </motion.div>
                </div>


                <div className="flex justify-center items-center">
                    <div className='flex flex-col items-center w-full max-w-3xl gap-10 bg-[#1a1b30]/50 border-2 border-[#1c3446] rounded-3xl p-12 my-40 '>
                        <div className='flex flex-col gap-4 text-white text-center'>
                            <h1 className='text-5xl text-[#2dd0fc] orbitron'>
                                Join O<span className='bg-gradient-to-r bg-clip-text text-transparent from-[#2dd0fc] to-[#869dfb] orbitron'>ur Mission</span>
                            </h1>
                            <p className='text-lg text-[#acb2ba] exo'>
                                Be part of building the future of cybersecurity education at CIC. Together, we're creating a community where innovation meets expertise.
                            </p>
                        </div>
                        <div className='flex gap-8'>
                            <Link to={"/JoinUs"} className='exo text-white p-5 px-6 bg-gradient-to-r from-[#17d6fb] to-[#814bed] shadow-[0_0_20px_5px_#17d6fb] rounded-4xl animate-shadow-pulse text-md sm:text-xl text-center'>
                                Join Falcons Today
                            </Link>
                            <Link to={"/"} className="exo text-white p-5 px-6 sm:px-16 border-2 border-[#2dd0fc] rounded-4xl text-md sm:text-xl font-bold text-center hover:bg-[#2dd0fc] hover:text-black transition-all duration-300 hover:scale-105">
                                Back Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teams
