// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts"

function Skills() {

  const skillsData = [
    { skill: "React", level: 90 },
    { skill: "Node.js", level: 85 },
     { skill: "Next.js", level: 85 },
    { skill: "Flask", level: 80 },
     { skill: "Django", level: 85 },
    { skill: "Databases-mysql,postgresql", level: 88 },
    { skill: "Git & Version Control", level: 90 },
  ]

  return (
    <motion.div
      className="mt-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-success mb-4">Technical Skills</h3>

      <div className="row">

        {/* Radar Chart */}
        <div className="col-md-6">
          <div style={{ height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Skill Level"
                  dataKey="level"
                  stroke="#00ffff"
                  fill="#00ffff"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skill List */}
        <div className="col-md-6">
          <div className="card bg-dark text-light shadow p-3">
            <ul className="list-group list-group-flush">
              {skillsData.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item bg-dark text-light d-flex justify-content-between"
                >
                  {item.skill}
                  <span className="text-info">{item.level}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Skills
