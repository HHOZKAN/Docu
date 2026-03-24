import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import navigation from '../data/navigation'
import './Sidebar.css'

function sectionContainsActive(section, pathname) {
  if (!section.children) return false
  return section.children.some((child) => child.path === pathname)
}

export default function Sidebar() {
  const location = useLocation()
  const [search, setSearch] = useState('')
  const [openSections, setOpenSections] = useState({})

  // Auto-open section that contains the active route
  useEffect(() => {
    const next = {}
    navigation.forEach((item) => {
      if (item.id && sectionContainsActive(item, location.pathname)) {
        next[item.id] = true
      }
    })
    setOpenSections((prev) => ({ ...prev, ...next }))
  }, [location.pathname])

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const query = search.toLowerCase().trim()

  const filtered = navigation
    .map((item) => {
      if (!item.children) {
        if (!query || item.label.toLowerCase().includes(query)) return item
        return null
      }
      const matchedChildren = item.children.filter((c) =>
        !query || c.label.toLowerCase().includes(query) || item.label.toLowerCase().includes(query)
      )
      if (matchedChildren.length === 0) return null
      return { ...item, children: matchedChildren, _forceOpen: query.length > 0 }
    })
    .filter(Boolean)

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">📄 Docu</span>
      </div>

      <div className="sidebar-search">
        <input
          type="text"
          placeholder="Rechercher…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Recherche dans la navigation"
        />
      </div>

      <ul className="nav-list">
        {filtered.map((item) => {
          if (!item.children) {
            return (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                  end
                >
                  {item.label}
                </NavLink>
              </li>
            )
          }

          const isOpen = item._forceOpen || openSections[item.id]

          return (
            <li key={item.id} className="nav-section">
              <button
                className={`nav-section-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => toggleSection(item.id)}
                aria-expanded={isOpen}
              >
                <span className="toggle-arrow">{isOpen ? '▾' : '▸'}</span>
                {item.label}
              </button>
              {isOpen && (
                <ul className="nav-children">
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <NavLink
                        to={child.path}
                        className={({ isActive }) => 'nav-link nav-child-link' + (isActive ? ' active' : '')}
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
