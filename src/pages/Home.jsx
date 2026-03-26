import { Link } from 'react-router-dom'
import navigation from '../data/navigation'

export default function Home() {
  // Extraction ultra-sécurisée (on met un objet vide {} si la section n'est pas trouvée)
  const djangoSection = navigation.find(n => n.id === 'django') || {}
  const linuxSection = navigation.find(n => n.id === 'linux') || {}
  const adminSection = navigation.find(n => n.id === 'administration') || {}
  const toolsSections = navigation.filter(n => ['editeurs', 'traitement'].includes(n?.id)) || []

  // Date du jour
  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div className="pb-12">

      {/* HEADER DU JOURNAL */}
      <header className="border-b-4 border-gray-900 mb-10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-3">
            Notes de formation & Déploiement
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter m-0 border-none pb-0 leading-none">
            SysAdmin Times.
          </h1>
        </div>
        <div className="text-gray-500 font-mono text-sm border-t border-gray-200 md:border-none pt-2 md:pt-0 capitalize">
          Édition du {today}
        </div>
      </header>

      {/* GRILLE PRINCIPALE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* COLONNE GAUCHE (8 colonnes) */}
        <div className="lg:col-span-8 flex flex-col gap-10">

          <article className="group">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                À la une
              </span>
              <span className="text-gray-400 text-sm font-mono">Dossier Spécial</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-0 leading-tight group-hover:text-blue-600 transition-colors">
              <Link to="/django/architecture">Maîtriser le Déploiement Django de A à Z</Link>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Découvrez l'architecture complète pour mettre en production une application web. De la configuration de la machine virtuelle à la gestion du reverse proxy avec Nginx.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border-t border-gray-200 pt-5">
              {djangoSection.children?.map(child => (
                <Link key={child.path} to={child.path} className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2 transition-colors">
                  <span className="text-gray-300 text-xs">▶</span> {child.label}
                </Link>
              ))}
            </div>
          </article>

          <hr className="border-gray-200" />

          <article>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 mt-0">Fondations</h3>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-0">
              <Link to="/linux/commandes" className="hover:text-blue-600 transition-colors">
                Linux : Les bases indispensables du shell
              </Link>
            </h2>
            <p className="text-gray-600 mb-5">
              Comprendre l'architecture du système, maîtriser les commandes de navigation, et manipuler les flux avec les redirections et les variables d'environnement.
            </p>
            <div className="flex flex-wrap gap-2">
              {linuxSection.children?.map(child => (
                <Link key={child.path} to={child.path} className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full transition-colors">
                  {child.label}
                </Link>
              ))}
            </div>
          </article>
        </div>

        {/* COLONNE DROITE (4 colonnes) */}
        <aside className="lg:col-span-4 flex flex-col gap-8 lg:border-l border-gray-200 lg:pl-8 pt-8 lg:pt-0">

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 mt-0 flex items-center gap-2">
              <span className="text-xl">⚙️</span> Administration
            </h3>
            <ul className="space-y-0 m-0 p-0 list-none">
              {adminSection.children?.map(child => (
                <li key={child.path} className="m-0 border-b border-gray-200/70 last:border-0">
                  <Link to={child.path} className="text-gray-700 hover:text-blue-600 font-medium block py-2.5 transition-colors">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 mt-0 border-b border-gray-200 pb-2">
              Boîte à outils CLI
            </h3>
            {toolsSections.map(section => (
              <div key={section.id} className="mb-6 last:mb-0">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">{section.label}</h4>
                <div className="flex flex-wrap gap-2">
                  {section.children?.map(child => (
                    <Link key={child.path} to={child.path} className="font-mono text-xs bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-400 px-2 py-1 rounded transition-colors shadow-sm">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link to="/cheatsheets" className="group block bg-gray-900 text-white p-6 rounded-xl hover:bg-blue-600 transition-colors mt-auto shadow-md">
            <h3 className="text-xl font-bold mb-2 mt-0 text-white group-hover:text-white flex items-center gap-2">
              <span>⚡</span> Cheatsheets
            </h3>
            <p className="text-gray-300 text-sm m-0 group-hover:text-blue-50 leading-relaxed">
              L'antisèche de toutes les commandes d'urgence pour le réseau et les permissions.
            </p>
          </Link>

        </aside>
      </div>
    </div>
  )
}