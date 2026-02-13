// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import Typewriter from "./Typewriter"
import "../styles/about.css"

function About() {
  return (
    <motion.div
      className="about-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h3
        className="about-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        About Me
      </motion.h3>

      <Typewriter
        text="I am a Full-Stack Developer specializing in React, Next.js, Node.js, Angular, and Python (Django & Flask) focused on building web applications that solve real-world problems and drive business growth."
        speed={15}
        className="about-text"
      />

      <Typewriter
        text="I build high-performance fintech systems, AI-powered platforms and business automation solutions."
        speed={15}
        className="about-text"
      />

      <Typewriter
        text="Focused on scalability, security, and creating digital products that deliver measurable business impact."
        speed={15}
        className="about-highlight"
      />

      {/* Download CV Button */}
      <motion.div
        className="mt-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <a
          href="/Mutisya_Joshua_Musembi_CV_softwaredev.pdf"
          download
          className="btn btn-outline-info btn-lg"
        >
          Download CV
        </a>
      </motion.div>
    </motion.div>
  )
}

export default About
