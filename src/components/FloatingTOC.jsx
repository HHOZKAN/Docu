import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Draggable from 'react-draggable'
import navigation from '../data/navigation'

export default function FloatingTOC() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const nodeRef = useRef(null)

  return (
    <>
      {/* 1. LE BOUTON BURGER (Fixe en haut à gauche, visible seulement si le sommaire est fermé) */}
      <div className={`fixed left-6 top-6 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button
          onClick={() => {
            setIsOpen(true)
            setIsMinimized(false)
          }}
          className="w-10 h-10 bg-white border border-gray-200 text-gray-600 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 flex items-center justify-center transition-all"
          aria-label="Ouvrir le sommaire"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* 2. LE SOMMAIRE FLOTTANT ET DÉPLAÇABLE */}
      <Draggable
        nodeRef={nodeRef}
        handle=".drag-handle"
        bounds="parent"
        defaultPosition={{ x: 24, y: 24 }} // S'ouvre pile à la place du bouton burger
      >
        <div
          ref={nodeRef}
          className={`fixed z-50 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl overflow-hidden w-72 flex flex-col transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {/* En-tête (Zone pour attraper et déplacer) */}
          <div className="drag-handle flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-gray-50/50 cursor-grab active:cursor-grabbing">
            <h2 className="text-sm font-semibold text-gray-800 m-0">Navigation</h2>

            <div className="flex items-center gap-1">
              {/* Bouton Réduire / Agrandir */}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-400 hover:text-gray-900 transition-colors p-1.5 rounded-md hover:bg-gray-200"
                title={isMinimized ? "Agrandir" : "Réduire"}
              >
                {isMinimized ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                )}
              </button>

              {/* Bouton Fermer */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-red-600 transition-colors p-1.5 rounded-md hover:bg-red-50"
                title="Fermer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>

          {/* Contenu (Caché si réduit) */}
          <div className={`overflow-y-auto transition-all duration-300 ease-in-out ${isMinimized ? 'max-h-0' : 'max-h-[70vh] p-4'}`}>
            <ul className="space-y-6 m-0 p-0 list-none">
              {navigation.map((section, idx) => {
                if (!section.children) {
                  return (
                    <li key={section.path || idx} className="m-0">
                      <NavLink
                        to={section.path}
                        className={({ isActive }) =>
                          `block font-medium text-sm transition-colors ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`
                        }
                      >
                        {section.label}
                      </NavLink>
                    </li>
                  )
                }

                return (
                  <li key={section.id} className="m-0">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-0">
                      {section.label}
                    </h3>
                    <ul className="space-y-1 border-l-2 border-gray-100 ml-1.5 pl-3 list-none m-0">
                      {section.children.map((child) => (
                        <li key={child.path} className="m-0">
                          <NavLink
                            to={child.path}
                            className={({ isActive }) =>
                              `block py-1 text-sm transition-colors ${
                                isActive
                                  ? 'text-blue-600 font-medium'
                                  : 'text-gray-500 hover:text-gray-900'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Draggable>
    </>
  )
}