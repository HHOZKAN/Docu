import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import navigation from '../data/navigation'

// On "aplatit" ton menu de navigation pour faciliter la recherche
const allLinks = navigation.flatMap(item =>
  item.children
    ? item.children.map(child => ({ ...child, section: item.label }))
    : item.path !== '/' ? [{ ...item, section: 'Général' }] : []
)

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  // Écouter le raccourci Ctrl+K ou Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Focus automatique quand on ouvre
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Filtrer les résultats
  const filteredLinks = query === ''
    ? allLinks
    : allLinks.filter(link =>
        link.label.toLowerCase().includes(query.toLowerCase()) ||
        link.section.toLowerCase().includes(query.toLowerCase())
      )

  // Navigation au clavier dans la liste
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filteredLinks.length)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredLinks.length) % filteredLinks.length)
    }
    if (e.key === 'Enter' && filteredLinks[selectedIndex]) {
      e.preventDefault()
      navigate(filteredLinks[selectedIndex].path)
      setIsOpen(false)
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform z-50 group"
      >
        <span className="text-xl">🚀</span>
        <span className="font-medium pr-2">Menu</span>
        <kbd className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300 font-mono group-hover:bg-gray-600">Ctrl K</kbd>
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      {/* Overlay sombre qui floute l'arrière-plan */}
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Fenêtre principale */}
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden ring-1 ring-gray-200 animate-in fade-in zoom-in-95 duration-200">

        {/* Input de recherche façon Terminal */}
        <div className="flex items-center px-4 py-4 border-b border-gray-100">
          <span className="text-green-500 font-mono font-bold mr-3 text-lg">~$</span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-lg text-gray-800 placeholder-gray-400 font-mono"
            placeholder="Où voulez-vous aller ? (ex: vim, nginx...)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            onKeyDown={handleKeyDown}
          />
          <kbd className="bg-gray-100 text-gray-400 px-2 py-1 rounded text-xs font-mono border border-gray-200">ESC</kbd>
        </div>

        {/* Liste des résultats */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredLinks.length === 0 ? (
            <p className="p-4 text-center text-gray-500 font-mono text-sm">bash: {query}: command not found</p>
          ) : (
            filteredLinks.map((link, index) => {
              const isSelected = index === selectedIndex
              return (
                <div
                  key={link.path}
                  onClick={() => {
                    navigate(link.path)
                    setIsOpen(false)
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className={`font-medium ${isSelected ? 'text-blue-700' : 'text-gray-900'}`}>
                      {link.label}
                    </span>
                    <span className="text-xs text-gray-400">{link.section}</span>
                  </div>
                  {isSelected && <span className="text-blue-500 text-sm">⏎</span>}
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}