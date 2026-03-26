import { Routes, Route, useLocation } from 'react-router-dom'
import FloatingTOC from './components/FloatingTOC'

// Imports des pages
import Home from './pages/Home'
import Architecture from './pages/linux/Architecture'
import CommandesDeBase from './pages/linux/CommandesDeBase'
import Redirections from './pages/linux/Redirections'
import Variables from './pages/linux/Variables'
import Nano from './pages/editeurs/Nano'
import Vi from './pages/editeurs/Vi'
import Vim from './pages/editeurs/Vim'
import Utilisateurs from './pages/administration/Utilisateurs'
import Sudo from './pages/administration/Sudo'
import Paquets from './pages/administration/Paquets'
import Systemd from './pages/administration/Systemd'
import Journalctl from './pages/administration/Journalctl'
import FindLocate from './pages/traitement/FindLocate'
import GrepCut from './pages/traitement/GrepCut'
import Sed from './pages/traitement/Sed'
import Awk from './pages/traitement/Awk'
import Jq from './pages/traitement/Jq'
import Xargs from './pages/traitement/Xargs'
import DjangoArchitecture from './pages/django/Architecture'
import VmSsh from './pages/django/VmSsh'
import Venv from './pages/django/Venv'
import Gunicorn from './pages/django/Gunicorn'
import ServiceSystemd from './pages/django/ServiceSystemd'
import Nginx from './pages/django/Nginx'
import Firewall from './pages/django/Firewall'
import Diagnostic from './pages/django/Diagnostic'
import Cheatsheets from './pages/Cheatsheets'

export default function App() {
  // On récupère l'URL actuelle
  const location = useLocation()

  // On vérifie si on est sur la page d'accueil ("/")
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white selection:bg-gray-200 selection:text-gray-900">

      {/* Le marque-page discret et déplaçable */}
      <FloatingTOC />

      {/* Le conteneur principal s'adapte dynamiquement :
        - Sur l'accueil : max-w-[1600px] (Couvre presque tout l'écran)
        - Sur les cours : max-w-3xl (Reste étroit pour faciliter la lecture)
      */}
      <main className={`mx-auto px-6 md:px-12 py-12 md:py-20 w-full transition-all duration-500 ease-in-out ${isHome ? 'max-w-[1600px]' : 'max-w-3xl'}`}>

        {/* On n'affiche le fil d'ariane "Retour" que si on n'est PAS sur l'accueil */}
        {!isHome && (
          <div className="mb-12">
            <a href="/" className="text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 w-fit">
              <span>←</span> Retour au journal
            </a>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linux/architecture" element={<Architecture />} />
          <Route path="/linux/commandes" element={<CommandesDeBase />} />
          <Route path="/linux/redirections" element={<Redirections />} />
          <Route path="/linux/variables" element={<Variables />} />
          <Route path="/editeurs/nano" element={<Nano />} />
          <Route path="/editeurs/vi" element={<Vi />} />
          <Route path="/editeurs/vim" element={<Vim />} />
          <Route path="/administration/utilisateurs" element={<Utilisateurs />} />
          <Route path="/administration/sudo" element={<Sudo />} />
          <Route path="/administration/paquets" element={<Paquets />} />
          <Route path="/administration/systemd" element={<Systemd />} />
          <Route path="/administration/journalctl" element={<Journalctl />} />
          <Route path="/traitement/find" element={<FindLocate />} />
          <Route path="/traitement/grep" element={<GrepCut />} />
          <Route path="/traitement/sed" element={<Sed />} />
          <Route path="/traitement/awk" element={<Awk />} />
          <Route path="/traitement/jq" element={<Jq />} />
          <Route path="/traitement/xargs" element={<Xargs />} />
          <Route path="/django/architecture" element={<DjangoArchitecture />} />
          <Route path="/django/vm-ssh" element={<VmSsh />} />
          <Route path="/django/venv" element={<Venv />} />
          <Route path="/django/gunicorn" element={<Gunicorn />} />
          <Route path="/django/service-systemd" element={<ServiceSystemd />} />
          <Route path="/django/nginx" element={<Nginx />} />
          <Route path="/django/firewall" element={<Firewall />} />
          <Route path="/django/diagnostic" element={<Diagnostic />} />
          <Route path="/cheatsheets" element={<Cheatsheets />} />
        </Routes>

      </main>
    </div>
  )
}