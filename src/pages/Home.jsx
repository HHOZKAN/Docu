import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

const sections = [
  {
    label: 'Linux — fondamentaux',
    path: '/linux/commandes',
    description: 'Architecture du système, commandes essentielles, redirections, variables.',
  },
  {
    label: 'Éditeurs',
    path: '/editeurs/vim',
    description: 'Nano pour les débutants, Vi et Vim pour l\'édition avancée.',
  },
  {
    label: 'Administration système',
    path: '/administration/utilisateurs',
    description: 'Gestion des utilisateurs, permissions, paquets, systemd et journalctl.',
  },
  {
    label: 'Traitement de texte',
    path: '/traitement/grep',
    description: 'Outils en ligne de commande : find, grep, sed, awk, jq, xargs.',
  },
  {
    label: 'Déploiement Django',
    path: '/django/architecture',
    description: 'Guide complet : VM, venv, Gunicorn, systemd, Nginx, firewall, diagnostic.',
  },
  {
    label: 'Cheatsheets',
    path: '/cheatsheets',
    description: 'Résumés rapides des commandes les plus utilisées.',
  },
]

export default function Home() {
  return (
    <div>
      <h1>Ma documentation Linux</h1>
      <p className="subtitle">Notes personnelles — formation Linux &amp; déploiement</p>

      <p>
        Ce site regroupe mes notes de formation sur Linux, l'administration système et le
        déploiement d'applications Django. Chaque section correspond à un domaine précis.
      </p>

      <h2>Sections disponibles</h2>
      <ul className="home-sections">
        {sections.map((s) => (
          <li key={s.path} className="home-section-item">
            <Link to={s.path}>{s.label}</Link>
            <span> — {s.description}</span>
          </li>
        ))}
      </ul>

      <h2>Exemple de commande</h2>
      <p>Les blocs de code sont colorés et copiables :</p>
      <CodeBlock language="bash">{`# Lister les fichiers avec détails
ls -lah /var/log

# Chercher un fichier par nom
find /etc -name "*.conf" -type f

# Afficher les 10 dernières lignes d'un log
tail -n 10 /var/log/syslog`}</CodeBlock>

      <h2>Comment utiliser ce site</h2>
      <p>
        Naviguez via la barre latérale gauche. Les sections sont repliables. Utilisez le
        champ de recherche en haut de la sidebar pour filtrer rapidement.
      </p>

      <style>{`
        .home-sections {
          list-style: none;
          padding: 0;
        }
        .home-section-item {
          padding: 0.4rem 0;
          border-bottom: 1px solid var(--border);
          font-size: 0.92rem;
        }
        .home-section-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  )
}
