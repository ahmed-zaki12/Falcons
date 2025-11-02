import { Link, useNavigate } from "react-router"
import { useState } from "react"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import correct from "../assets/correct2.png"
import wrong from "../assets/wrong.png"
import { motion, AnimatePresence } from "framer-motion";

let fNameRegex = /^[A-Za-z]{3,15}$/;
let lNameRegex = /^[A-Za-z]{3,15}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let PhoneRegex = /^(010|011|012|015)[0-9]{8}$/;
let studentIdRegex = /^[0-9]{9,12}$/;

const JoinUsForm = () => {

    const navigate = useNavigate();

    // First Name
    const [fName, setFName] = useState("");
    const [fNameValid, setFNameValid] = useState(false);
    const [fNameTouched, setFNameTouched] = useState(false);

    // Last Name
    const [lName, setLName] = useState("");
    const [lNameValid, setLNameValid] = useState(false);
    const [lNameTouched, setLNameTouched] = useState(false);

    // Email
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);

    // Phone
    const [phone, setPhone] = useState("");
    const [phoneValid, setPhoneValid] = useState(false);
    const [phoneTouched, setPhoneTouched] = useState(false);

    // Student ID
    const [studentId, setStudentId] = useState("");
    const [studentIdValid, setStudentIdValid] = useState(false);
    const [studentIdTouched, setStudentIdTouched] = useState(false);

    // Submit Attempted
    const [submitAttempted, setSubmitAttempted] = useState(false);

    // GPA State
    const [gpa, setGpa] = useState("");

    const [interest, setInterest] = useState("");

    const [text, setText] = useState("");
    const [TextTouched, setTextTouched] = useState(false);
    const [textValid, setTextValid] = useState(false);

    // Faculty & Academic Year
    const [faculty, setFaculty] = useState("");
    const [academicYear, setAcademicYear] = useState("");

    // Experience
    const [experience, setExperience] = useState("");

    const [showTerms, setShowTerms] = useState(false); // modal visibility
    const [termsAccepted, setTermsAccepted] = useState(false); // unlock checkbox

    const [agreed, setAgreed] = useState(false);

    const [formMessage, setFormMessage] = useState(null); // {type: "success" | "error", text: string}

    // Technical Skills
    const [skills, setSkills] = useState("");
    const [skillsValid, setSkillsValid] = useState(true);

    // Career Goals
    const [goals, setGoals] = useState("");
    const [goalsValid, setGoalsValid] = useState(true);


    // Handlers
    const handleFNameChange = (e) => {
        setFName(e.target.value);
        setFNameValid(fNameRegex.test(e.target.value));
    };
    const handleFNameBlur = () => setFNameTouched(true);

    const handleLNameChange = (e) => {
        setLName(e.target.value);
        setLNameValid(lNameRegex.test(e.target.value));
    };
    const handleLNameBlur = () => setLNameTouched(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailValid(emailRegex.test(e.target.value));
    };
    const handleEmailBlur = () => setEmailTouched(true);

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        setPhoneValid(PhoneRegex.test(value));
    };

    const handlePhoneBlur = () => setPhoneTouched(true);

    const handleStudentIdChange = (e) => {
        setStudentId(e.target.value);
        setStudentIdValid(studentIdRegex.test(e.target.value));
    };
    const handleStudentIdBlur = () => setStudentIdTouched(true);


    const handleGpaChange = (e) => {
        let value = e.target.value;

        if (value === "") {
            setGpa("");
            return;
        }
        let num = parseFloat(value);
        if (num < 0) num = 0;
        if (num > 4) num = 4;
        setGpa(num.toString());
    };

    const handleTextChange = (e) => {
        const value = e.target.value;
        setText(value);
        const regex = /^[a-zA-Z0-9\s.,!?'-]{20,}$/;
        setTextValid(regex.test(value));
    };

    const handleTextBlur = () => setTextTouched(true);

    const handleSkillsChange = (e) => {
        const value = e.target.value;
        setSkills(value);

        if (value.trim() === "") {
            setSkillsValid(true);
        } else {
            const regex = /^[a-zA-Z0-9\s.,!?'-]{20,}$/;
            setSkillsValid(regex.test(value));
        }
    };

    const handleGoalsChange = (e) => {
        const value = e.target.value;
        setGoals(value);

        if (value.trim() === "") {
            setGoalsValid(true);
        } else {
            const regex = /^[a-zA-Z0-9\s.,!?'-]{20,}$/;
            setGoalsValid(regex.test(value));
        }
    };

    const handleLimitedAttemptedSubmit = () => {
        setFormMessage(null)
        navigate("/")
    }
    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitAttempted(true);

        const allValid =
            fNameValid &&
            lNameValid &&
            emailValid &&
            phoneValid &&
            studentIdValid &&
            faculty !== "" &&
            academicYear !== "" &&
            gpa !== "" &&
            experience !== "" &&
            interest !== "" &&
            textValid &&
            agreed;

        if (!allValid) {
            setFormMessage({
                type: "error",
                text: (
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <img src={wrong} className="w-12 h-12 " alt="wrong img" />
                        <ul className="text-white justify-center">
                            <li className="exo">Fill all the required fields.</li>
                            <li className="exo">Read the terms and conditions.</li>
                        </ul>
                    </div>
                ),
            });
            const formElement = document.getElementById("applicationForm");
            if (formElement) {
                formElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            return;
        }

        const formData = new FormData();
        formData.append("firstName", fName);
        formData.append("lastName", lName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("studentId", studentId);
        formData.append("faculty", faculty);
        formData.append("academicYear", academicYear);
        formData.append("gpa", gpa);
        formData.append("experience", experience);
        formData.append("interest", interest);
        formData.append("skills", skills);
        formData.append("reason", text);
        formData.append("goals", goals);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxMnBj2yxRN0oXEByQLww-WLLUtb5H4pT7AoV4u5xdO44A4rH7plTsvHAPF9TEll3DZBw/exec",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            // --- Handle backend response ---
            if (data.result === "error" && data.message === "Limit reached") {
                setFormMessage({
                    type: "error",
                    text: (
                        <div className="fixed inset-0 flex items-center justify-center bg-black/100 z-50">
                            <div className="bg-[#1a1b30] text-center p-6 rounded-2xl shadow-lg max-w-sm">
                                <h2 className="orbitron font-bold text-xl text-red-600 mb-4">
                                    Submission Limit Reached
                                </h2>
                                <p className="exo">
                                    You have already submitted 5 times. Further submissions are
                                    disabled.
                                </p>
                                <button
                                    onClick={handleLimitedAttemptedSubmit}
                                    className="mt-6 px-6 py-2 exo bg-[#2dd0fc] text-black font-semibold rounded-lg hover:bg-[#1bb8e6]"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ),
                });

                const submitBtn = document.getElementById("submitBtn");
                if (submitBtn) {
                    submitBtn.disabled = true;
                }
                return;
            }

            if (response.ok && data.result === "success") {
                // --- Send confirmation email ---
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                try {
                    const emailResponse = await fetch(`${apiUrl}/api/mail/send`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            template: 'join-us-confirmation',
                            recipient: {
                                name: fName,
                                email: email,
                            },
                            // Optional branding inputs
                            logoUrl: import.meta.env.VITE_EMAIL_LOGO_URL,
                            signatureHtml: import.meta.env.VITE_EMAIL_SIGNATURE_HTML,
                        }),
                    });

                    if (emailResponse.ok) {
                        console.log("Confirmation email sent successfully.");
                    } else {
                        const errorData = await emailResponse.json();
                        console.error("Failed to send confirmation email:", errorData.message);
                    }
                } catch (emailError) {
                    console.error("Error sending confirmation email:", emailError);
                }

                setFormMessage({
                    type: "success",
                    text: (
                        <div className="flex flex-col gap-2 items-center">
                            <img src={correct} className="w-12 h-12 " alt="correct gif" />
                            <h1 className="orbitron font-bold">Application Submitted!</h1>
                            <p className="exo">
                                Thank you for applying to join Falcons. We'll review your
                                application and get back to you soon.
                            </p>
                        </div>
                    ),
                });
                const formElement = document.getElementById("applicationForm");
                if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }

                // Reset all states
                setFName("");
                setFNameValid(false);
                setFNameTouched(false);

                setLName("");
                setLNameValid(false);
                setLNameTouched(false);

                setEmail("");
                setEmailValid(false);
                setEmailTouched(false);

                setPhone("");
                setPhoneValid(false);
                setPhoneTouched(false);

                setStudentId("");
                setStudentIdValid(false);
                setStudentIdTouched(false);

                setGpa("");

                setFaculty("");
                setAcademicYear("");
                setExperience("");
                setInterest("");

                setText("");
                setTextTouched(false);

                setAgreed(false);
                setTermsAccepted(false);

                setSkills("");
                setSkillsValid(true);

                setGoals("");
                setGoalsValid(true);

                setSubmitAttempted(false);
            } else {
                setFormMessage({
                    type: "error",
                    text: "Submission failed. Please try again later.",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setFormMessage({
                type: "error",
                text: "Something went wrong! Please try again.",
            });
        }
    };

    const yearOptions = faculty === "Engineering" ? ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"] : ["1st Year", "2nd Year", "3rd Year", "4th Year"];
    return (
        <section className="flex flex-col items-center mt-20 md:mt-40">
            <div className="flex flex-col justify-center items-center w-full">

                {/* ==== Modal Overlay ==== */}
                <AnimatePresence>
                    {showTerms && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-[#1a1b30] text-white p-6 md:p-8 rounded-2xl w-full max-w-lg md:max-w-xl shadow-lg border-2 border-[#2dd0fc]"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#2dd0fc]">Terms & Conditions</h2>
                                <ul className="list-disc pl-4 md:pl-6 space-y-2 text-[#acb2ba] text-sm md:text-base overflow-y-auto max-h-[60vh]">
                                    <li className="exo">you got only <span className="exo text-red-500">five</span> attempt for submission</li>
                                    <li className="exo">
                                        The challenges will be published on our <span className="text-green-500 font-bold">CTF</span> page.
                                        Any inappropriate activity affecting our website or the university portal will result in <span className="text-red-500 exo">removal from the program and may lead to disciplinary and legal action.</span>
                                    </li>
                                    <li className="exo">Active Participation: Members must actively participate in all Falcons activities and contribute to the community.</li>
                                    <li className="exo">Assignment Submission: All assigned tasks and projects must be completed and submitted on time.</li>
                                    <li className="exo">Meeting Attendance: Members are required to attend urgent and scheduled meetings unless a valid excuse is provided in advance.</li>
                                    <li className="exo">Professional Conduct: Members must maintain a respectful and polite attitude. Any form of misconduct, disrespect, or inappropriate behavior will result in <span className="text-red-500 exo">penalties</span> and may lead to <span className="text-red-500 exo">removal</span> from the activity.</li>
                                    <li className="exo">Commitment to Learning: Members are expected to continuously improve their skills and share knowledge with peers.</li>
                                    <li className="exo">Confidentiality: Any sensitive information, internal discussions, or shared resources must remain within the Falcons community.</li>
                                    <li className="exo">Academic Standards: Members must maintain good academic standing as part of their eligibility.</li>
                                    <li className="exo">Code of Ethics: Upholding honesty, integrity, and teamwork is mandatory.</li>
                                </ul>
                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={() => {
                                            setShowTerms(false);
                                            setTermsAccepted(true);
                                        }}
                                        className="px-6 py-2 bg-[#2dd0fc] text-black font-semibold rounded-lg hover:bg-[#1bb8e6] transition-colors duration-300"
                                    >
                                        I Agree
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.form
                    onSubmit={handleSubmit}
                    id="applicationForm"
                    className=" bg-[#1a1b30]/40 border-2 border-[#1c3446] p-6 md:p-12 w-full max-w-4xl rounded-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {formMessage && (
                        <div className="bg-black/40 fixed inset-0 flex flex-col items-center justify-center z-50 p-4">
                            <div
                                className={`bg-[#1a1b30] text-white p-6 md:p-8 rounded-2xl w-full max-w-md text-center shadow-lg border-2 ${formMessage.type === "success"
                                    ? "border-green-600"
                                    : "border-red-600"
                                    }`}
                            >
                                <p className="text-lg exo">{formMessage.text}</p>
                                <button
                                    onClick={() => setFormMessage(null)}
                                    className="mt-6 px-6 py-2 bg-[#2dd0fc] text-black font-semibold rounded-lg hover:bg-[#1bb8e6] transition-colors duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    <h1 className="text-white text-2xl md:text-3xl text-center orbitron hover-text-glow duration-300 transition-all ease-in-out">Application Form</h1>
                    <a href="#form"></a>
                    <div className="flex flex-col gap-6 mt-10">
                        <h1 className="text-[#2dd0fc] text-xl orbitron">Personal Information</h1>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label className="exo text-[#acb2ba] text-lg ml-2">First Name *</label>
                                <input
                                    value={fName}
                                    onChange={handleFNameChange}
                                    onBlur={handleFNameBlur}
                                    required
                                    type="text"
                                    placeholder="Enter First Name"
                                    className={`w-full p-4 bg-[#121224] rounded-lg text-white focus:outline-none ${fNameValid ?
                                        `border-green-500 border` : (fNameTouched || submitAttempted)
                                            ? `border-red-500 border` : `border-[#2dd0fc] border`
                                        }`} />
                                {((fNameTouched || submitAttempted) && !fNameValid) && (
                                    <div className="text-red-500 text-sm mt-1 ml-2">
                                        <h1>input is required please enter a valid name</h1>
                                        <h1>name between 3-15 characters</h1>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="exo text-[#acb2ba] text-lg ml-2">Last Name *</label>
                                <input
                                    value={lName}
                                    onChange={handleLNameChange}
                                    onBlur={handleLNameBlur}
                                    required
                                    type="text"
                                    placeholder="Enter Last Name"
                                    className={`w-full p-4 bg-[#121224] rounded-lg text-white focus:outline-none ${lNameValid
                                        ? "border-green-500 border"
                                        : (lNameTouched || submitAttempted)
                                            ? "border-red-500 border"
                                            : "border-[#2dd0fc] border"
                                        }`}
                                />
                                {((lNameTouched || submitAttempted) && !lNameValid) && (
                                    <div className="text-red-500 text-sm mt-1 ml-2">
                                        <h1>input is required please enter a valid name</h1>
                                        <h1>name between 3-15 characters</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label className="exo text-[#acb2ba] text-lg ml-2">Email Address *</label>
                                <input
                                    value={email}
                                    onChange={handleEmailChange}
                                    onBlur={handleEmailBlur}
                                    required
                                    type="text"
                                    placeholder="Enter Email Address"
                                    className={`w-full p-4 bg-[#121224] rounded-lg text-white focus:outline-none ${emailValid
                                        ? "border-green-500 border"
                                        : (emailTouched || submitAttempted)
                                            ? "border-red-500 border"
                                            : "border-[#2dd0fc] border"
                                        }`}
                                />
                                {((emailTouched || submitAttempted) && !emailValid) && (
                                    <div className="text-red-500 text-sm mt-1 ml-2">
                                        input is required please enter a valid email
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="exo text-[#acb2ba] text-lg ml-2">Phone Number *</label>
                                <input
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    onBlur={handlePhoneBlur}
                                    required
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className={`w-full p-4 bg-[#121224] rounded-lg text-white focus:outline-none ${phoneValid
                                        ? "border-green-500 border"
                                        : (phoneTouched || submitAttempted)
                                            ? "border-red-500 border"
                                            : "border-[#2dd0fc] border"
                                        }`}
                                />
                                {((phoneTouched || submitAttempted) && !phoneValid) && (
                                    <div className="text-red-500 text-sm mt-1 ml-2">
                                        <h1>input is required please enter a valid number</h1>
                                        <h1>number should start with 01 and be 11 digits</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 mt-10">
                        <h1 className="text-[#2dd0fc] text-xl orbitron">Academic Information</h1>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label className="exo text-[#acb2ba] text-lg ml-2">Student ID *</label>
                                <input
                                    value={studentId}
                                    onChange={handleStudentIdChange}
                                    onBlur={handleStudentIdBlur}
                                    required
                                    type="text"
                                    placeholder="Enter your Student ID"
                                    className={`w-full p-4 bg-[#121224] rounded-lg text-white focus:outline-none ${studentIdValid
                                        ? "border-green-500 border"
                                        : (studentIdTouched || submitAttempted)
                                            ? "border-red-500 border"
                                            : "border-[#2dd0fc] border"
                                        }`}
                                />
                                {((studentIdTouched || submitAttempted) && !studentIdValid) && (
                                    <div className="text-red-500 text-sm mt-1 ml-2">
                                        <h1>input is required please enter a valid Student ID</h1>
                                        <h1>must be more than 8 digits</h1>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="exo text-[#acb2ba] text-lg ml-2">Faculty *</label>
                                <select
                                    value={faculty}
                                    onChange={(e) => setFaculty(e.target.value)}
                                    required
                                    type="text"
                                    name="faculty"
                                    className="w-full p-4 bg-[#121224] border border-[#2dd0fc] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2dd0fc]"
                                >
                                    <option value="" disabled>Select your Faculty</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Business Technology">Business Technology</option>
                                    <option value="Business Adminstration">Business Adminstration</option>
                                    <option value="Mass Communication">Mass Communication</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col gap-2 w-full">
                                <label className="exo text-[#acb2ba] text-lg ml-2">Academic Year *</label>
                                <select
                                    disabled={faculty === ""}
                                    value={academicYear}
                                    onChange={(e) => setAcademicYear(e.target.value)}
                                    className="w-full p-4 bg-[#121224] border border-[#2dd0fc] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2dd0fc]"
                                    required
                                    name="academicYear"
                                >
                                    <option value="" disabled>Select your Academic Year</option>
                                    {
                                        yearOptions.map((year, index) => (
                                            <option value={year} key={index}>
                                                {year}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="exo text-[#acb2ba] text-lg ml-2">GPA *</label>
                                <input
                                    value={gpa}
                                    onChange={handleGpaChange}
                                    required
                                    min={0}
                                    max={4}
                                    step={0.1}
                                    type="number"
                                    placeholder="Enter your GPA"
                                    className="w-full p-4 bg-[#121224] border border-[#2dd0fc] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2dd0fc]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 mt-10">
                        <h1 className="text-[#2dd0fc] text-xl orbitron">Experience & Skills</h1>
                        <div className="flex flex-col gap-2">
                            <h1 className="orbitron text-[#acb2ba] text-sm ">Previous Cybersecurity Experience</h1>
                            <select
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                required
                                className="w-full p-4 bg-[#121224] border border-[#2dd0fc] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#2dd0fc]"
                                name="experience"
                            >
                                <option value="" disabled>Pick your experience</option>
                                <option value="None">No experience</option>
                                <option value="Beginner">Beginner (Self-study, online courses)</option>
                                <option value="Intermediate">Intermediate (Some practical experience, CTFs)</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-4 mt-2">
                            <h1 className="orbitron text-[#acb2ba] text-sm">Areas of Interest (Select one)</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2 items-center">
                                    <input
                                        type="radio"
                                        name="interest"
                                        value="Red Teaming"
                                        checked={interest === "Red Teaming"}
                                        onChange={(e) => setInterest(e.target.value)}
                                    />
                                    <label className="text-[#acb2ba] exo mb-1">Red Teaming</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input
                                        required
                                        type="radio"
                                        name="interest"
                                        value="Blue Teaming"
                                        checked={interest === "Blue Teaming"}
                                        onChange={(e) => setInterest(e.target.value)}
                                    />
                                    <label className="text-[#acb2ba] exo mb-1">Blue Teaming</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="radio"
                                        name="interest"
                                        value="I don't know"
                                        checked={interest === "I don't know"}
                                        onChange={(e) => setInterest(e.target.value)}
                                    />
                                    <label className="text-[#acb2ba] exo mb-1">Not Sure Yet</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#acb2ba] exo">Technical Skills</h1>
                            <textarea
                                value={skills}
                                onChange={handleSkillsChange}
                                className={`w-full h-32 p-4 bg-[#121224] rounded-lg text-white focus:outline-none
                                     ${skills.trim() === ""
                                        ? "border-[#2dd0fc] border"
                                        : skillsValid
                                            ? "border-green-500 border"
                                            : "border-red-500 border"
                                    }`}

                                type="text"
                                placeholder="List your programming languages, tools, certifications, or relevant technical skills..."
                            />
                            {!skillsValid && skills !== "" && (
                                <div>
                                    <p className="text-red-500 text-sm mt-1 ml-2">Special characters are not allowed.</p>
                                    <p className="text-red-500 text-sm mt-1 ml-2">This field must contain at least 20 characters.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 mt-10">
                        <h1 className="text-[#2dd0fc] text-xl orbitron">Motivation</h1>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#acb2ba] exo ">Why do you want to join Falcons? *</h1>
                            <textarea
                                value={text}
                                onChange={handleTextChange}
                                onBlur={handleTextBlur}
                                required
                                placeholder="Tell us about your passion for cybersecurity, what you hope to achieve with Falcons, and how you can contribute to our community..."
                                className={`h-44 p-3 bg-[#121224] rounded-lg text-white focus:outline-none w-full
                                     ${text.trim() === ""
                                        ? "border-[#2dd0fc] border"
                                        : textValid
                                            ? "border-green-500 border"
                                            : "border-red-500 border"}
                                `}
                            />
                            {((TextTouched || submitAttempted) && !textValid) && (
                                <div>
                                    <p className="text-red-500 text-sm mt-1 ml-2">
                                        Special characters are not allowed..
                                    </p>
                                    <p className="text-red-500 text-sm mt-1 ml-2">
                                        Please enter at least 20 characters.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#acb2ba] exo ">Career Goals</h1>
                            <textarea
                                value={goals}
                                onChange={handleGoalsChange}
                                className={`w-full h-32 p-4 bg-[#121224] rounded-lg text-white focus:outline-none
                                     ${goals.trim() === ""
                                        ? "border-[#2dd0fc] border"
                                        : goalsValid
                                            ? "border-green-500 border"
                                            : "border-red-500 border"
                                    }`}
                                placeholder="Share your cybersecurity career aspirations and how Falcons can help you achieve them..."
                            />
                            {!goalsValid && goals !== "" && (
                                <div>
                                    <p className="text-red-500 text-sm mt-1 ml-2">Special characters are not allowed.</p>
                                    <p className="text-red-500 text-sm mt-1 ml-2">This field must contain at least 20 characters.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 mt-10">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <input
                                        required
                                        type="checkbox"
                                        disabled={!termsAccepted}
                                        id="termsCheckbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                    />
                                    <label htmlFor="termsCheckbox" className="text-[#acb2ba] exo mt-6 text-sm md:text-base">
                                        I agree to the{" "}
                                        <button
                                            type="button"
                                            onClick={() => setShowTerms(true)}
                                            className="text-[#2dd0fc] hover:underline mx-1"
                                        >
                                            terms and conditions
                                        </button>{" "}
                                        and understand that membership requires active participation in
                                        Falcons activities and maintaining academic standards. *
                                    </label>
                                </div>
                                {!termsAccepted && (
                                    <div>
                                        <p className="text-green-600 text-sm mt-2 ml-7 exo">
                                            You must read and accept the terms and conditions before proceeding.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        id="submitBtn"
                        className="mt-10 w-full md:w-64 bg-gradient-to-r from-[#2dd0fc] to-[#724ee7] text-white px-6 py-3 rounded-full hover:from-[#1bb8e6] hover:to-[#6a7ffb] duration-300 text-lg exo hover:scale-105 transition-all ">Submit Application
                    </button>
                </motion.form>

                <motion.div
                    className="flex flex-col mb-20 md:mb-40 gap-8 mt-20 md:mt-40 items-center w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex flex-col items-center gap-4 md:gap-8 text-center px-4">
                        <h1 className="text-white text-2xl md:text-3xl orbitron hover-text-glow duration-300 transition-all ease-in-out">Questions?</h1>
                        <p className="text-[#acb2ba] text-sm md:text-lg exo max-w-2xl">If you have any questions about the application process or Falcons in general, don't hesitate to reach out.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl px-4">
                        <div className='p-8 md:p-10 flex flex-col justify-center items-center gap-2 bg-[#1a1b30]/40 border-2 border-[#1c3446] rounded-3xl w-full h-80'>
                            <h1 className="text-xl md:text-2xl text-[#2dd0fc] orbitron mb-4">Contact Us</h1>
                            <div className="flex flex-col gap-4 items-center text-[#acb2ba] text-center">
                                <p className="exo text-lg">General Info: info@falcons-eg.tech</p>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/company/falconscic/posts/?feedView=all"
                                    className="exo text-[#acb2ba] text-4xl hover:text-[#007ab5] transition-colors duration-300"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href=""
                                    className="exo text-[#acb2ba] text-4xl hover:text-blue-300 transition-colors duration-300"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href=""
                                    className="exo text-[#acb2ba] text-4xl hover:text-[#de524c] transition-colors duration-300"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    )
}
export default JoinUsForm