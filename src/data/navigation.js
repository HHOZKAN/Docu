const navigation = [
  { label: 'Accueil', path: '/' },
  {
    label: 'Linux — fondamentaux',
    id: 'linux',
    children: [
      { label: 'Architecture', path: '/linux/architecture' },
      { label: 'Commandes de base', path: '/linux/commandes' },
      { label: 'Redirections et pipes', path: '/linux/redirections' },
      { label: "Variables d'environnement", path: '/linux/variables' },
    ],
  },
  {
    label: 'Éditeurs',
    id: 'editeurs',
    children: [
      { label: 'Nano', path: '/editeurs/nano' },
      { label: 'Vi', path: '/editeurs/vi' },
      { label: 'Vim', path: '/editeurs/vim' },
    ],
  },
  {
    label: 'Administration système',
    id: 'administration',
    children: [
      { label: 'Utilisateurs et permissions', path: '/administration/utilisateurs' },
      { label: 'sudo', path: '/administration/sudo' },
      { label: 'Gestionnaires de paquets', path: '/administration/paquets' },
      { label: 'systemd', path: '/administration/systemd' },
      { label: 'journalctl', path: '/administration/journalctl' },
    ],
  },
  {
    label: 'Traitement de texte',
    id: 'traitement',
    children: [
      { label: 'find / locate', path: '/traitement/find' },
      { label: 'grep / cut', path: '/traitement/grep' },
      { label: 'sed', path: '/traitement/sed' },
      { label: 'awk', path: '/traitement/awk' },
      { label: 'jq', path: '/traitement/jq' },
      { label: 'xargs', path: '/traitement/xargs' },
    ],
  },
  {
    label: 'Déploiement Django',
    id: 'django',
    children: [
      { label: 'Architecture', path: '/django/architecture' },
      { label: 'VM et SSH', path: '/django/vm-ssh' },
      { label: 'venv Python', path: '/django/venv' },
      { label: 'Gunicorn', path: '/django/gunicorn' },
      { label: 'Service systemd', path: '/django/service-systemd' },
      { label: 'Nginx', path: '/django/nginx' },
      { label: 'Firewall', path: '/django/firewall' },
      { label: 'Diagnostic', path: '/django/diagnostic' },
    ],
  },
  { label: 'Cheatsheets', path: '/cheatsheets' },
]

export default navigation
