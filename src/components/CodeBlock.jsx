import { useEffect, useRef, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-nginx'
import './CodeBlock.css'

export default function CodeBlock({ language = 'bash', children }) {
  const codeRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const code = typeof children === 'string' ? children.trim() : ''

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code, language])

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-lang">{language}</span>
        <button className="copy-btn" onClick={handleCopy} title="Copier le code">
          {copied ? 'Copié !' : 'Copier'}
        </button>
      </div>
      <pre className={`language-${language}`}>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}
