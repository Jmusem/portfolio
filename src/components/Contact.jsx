// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import "../styles/Contact.css"

function Contact() {
  return (
    <motion.div
      className="contact-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h3
        className="contact-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Contact Me
      </motion.h3>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I’d love to hear from you! Reach out via email or phone.
      </motion.p>

      <div className="contact-info mt-3">
        <motion.div whileHover={{ scale: 1.05 }}>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:joshuamusembi499@gmail.com" className="contact-link">
              joshuamusembi499@gmail.com
            </a>
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+254714509575" className="contact-link">
              +254 714 509 575
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
