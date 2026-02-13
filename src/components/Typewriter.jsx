import { useState, useEffect } from "react"

function Typewriter({ text, speed = 20, className = "" }) {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex(index + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [index, text, speed])

  return <p className={className}>{displayedText}</p>
}

export default Typewriter
