import { useState, useRef, useEffect } from "react"
import CommandOutput from "./CommandOutput"

function Terminal() {

  const [command, setCommand] = useState("")
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  // Auto scroll to bottom
  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight
  }, [history])

  const shortcuts = {
    a: "about",
    e: "experience",
    p: "projects",
    s: "skills",
    ct: "contact",
    h: "help",
    c: "clear"
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!command.trim()) return

    const lowerCommand = command.toLowerCase()

    // Replace shortcut with full command
    const finalCommand = shortcuts[lowerCommand] || lowerCommand

    if (finalCommand === "clear") {
      setHistory([])
      setCommand("")
      return
    }

    setHistory([...history, finalCommand])
    setCommand("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      if (history.length === 0) return

      const newIndex =
        historyIndex < history.length - 1
          ? historyIndex + 1
          : historyIndex

      setHistoryIndex(newIndex)
      setCommand(history[history.length - 1 - newIndex])
    }

    if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCommand(history[history.length - 1 - newIndex])
      } else {
        setHistoryIndex(-1)
        setCommand("")
      }
    }
  }

  return (
    <div className="terminal-window" ref={terminalRef}>
      
      {/* Welcome message */}
      {history.length === 0 && (
        <div className="welcome-message mb-3">
          <p className="accent-glow">
            Welcome to Joshua Musembi Portfolio  🚀
          </p>
          <p>Type <span className="text-info">help</span> to see commands.</p>
          
        
        </div>
      )}

      {history.map((cmd, index) => (
        <div key={index} className="command-block">
          <div>
            <span className="prompt">Joshua@portfolio:~$ </span>
            <span className="command-text">{cmd}</span>
          </div>
          <CommandOutput command={cmd} />
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <span className="prompt">Joshua@portfolio:~$ </span>
        <input
          ref={inputRef}
          className="terminal-input"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </form>
    </div>
  )
}

export default Terminal
