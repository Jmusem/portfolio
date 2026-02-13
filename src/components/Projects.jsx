// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { projectsData } from "../data/projectsData"
import "../styles/Projects.css"
function Projects() {
  return (
    <motion.div
      className="mt-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="projects-title mb-4">Projects</h3>

      <div className="row g-4">
        {projectsData.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <motion.div
              className="project-card h-100 p-4"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,255,255,0.3)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h5 className="project-title">{project.title}</h5>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <strong>Tech:</strong> {project.tech}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
