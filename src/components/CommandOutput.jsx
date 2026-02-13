import About from "./About"
import Contact from "./Contact"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"

function CommandOutput({ command }) {

  switch (command.toLowerCase()) {
    case "about":
      return <About />

    case "experience":
      return <Experience />

      case "projects":
      return <Projects />

    case "skills":
      return <Skills />
    
    case "contact":
        return <Contact />
    case "help":
      return (
        <div className="mt-3 text-info">
          Available commands:
          <ul>
            <li>about</li>
            <li>skills</li>
            <li>experience</li>
            <li>projects</li>
            <li>contact</li>
            <li>clear</li>
          </ul>
        </div>
      )

    default:
      return <p className="text-danger mt-2">Command not found.</p>
  }
}

export default CommandOutput
