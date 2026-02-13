// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts"
import { experienceData } from "../data/experienceData"

function Experience() {
  return (
    <motion.div
      className="experience-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="experience-title">Technical Experience</h3>

      {/* Work Experience Card */}
      <div className="mb-5">
        <div className="card bg-dark text-light shadow experience-card p-3">
          <h5 className="card-title text-info">Cyfras Technologies</h5>
          <p className="card-text">Full-Stack Developer  5th May 2025 – 12th Jan 2026</p>
      
        </div>
      </div>

      {/* Cards */}
      <div className="row mb-5">
        {experienceData.map((exp, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card bg-dark text-light shadow experience-card">
              <div className="card-body">
                <h5 className="card-title text-info">{exp.tech}</h5>
                <p className="card-text">Experience: {exp.duration}</p>
                <div className="experience-bar">
                  <div
                    className="experience-fill"
                    style={{ width: `${exp.level * 10}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={experienceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="tech" stroke="#00ffff" />
            <YAxis stroke="#00ffff" />
            <Tooltip contentStyle={{ backgroundColor: "#111827", border: "none" }} />
            <Bar dataKey="level" fill="#00ffff" radius={[5,5,0,0]}>
              <LabelList dataKey="duration" position="top" fill="#22c55e" fontWeight="bold" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default Experience
