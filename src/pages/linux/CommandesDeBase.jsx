import CodeBlock from '../../components/CodeBlock'

export default function CommandesDeBase() {
  return (
    <div>
      <h1>Commandes de base</h1>
      <p className="subtitle">Navigation, fichiers, permissions — les essentiels du shell bash.</p>

      <h2>Navigation dans le système de fichiers</h2>
      <CodeBlock language="bash">{`pwd                  # affiche le répertoire courant
ls                   # liste les fichiers
ls -lah              # liste détaillée avec tailles lisibles
ls -la /etc          # liste un répertoire précis
cd /var/log          # change de répertoire
cd ~                 # retour au home
cd ..                # remonte d'un niveau
cd -                 # retour au répertoire précédent`}</CodeBlock>

      <h2>Manipulation de fichiers</h2>
      <CodeBlock language="bash">{`touch fichier.txt           # crée un fichier vide
mkdir dossier               # crée un répertoire
mkdir -p a/b/c              # crée l'arborescence complète
cp source.txt dest.txt      # copie un fichier
cp -r dossier/ copie/       # copie récursive
mv ancien.txt nouveau.txt   # déplace / renomme
rm fichier.txt              # supprime un fichier
rm -rf dossier/             # supprime récursivement (attention !)
cat fichier.txt             # affiche le contenu
less fichier.txt            # affiche avec pagination (q pour quitter)`}</CodeBlock>

      <h2>Affichage partiel</h2>
      <CodeBlock language="bash">{`head -n 20 fichier.txt    # 20 premières lignes
tail -n 20 fichier.txt    # 20 dernières lignes
tail -f /var/log/syslog   # suit le fichier en temps réel`}</CodeBlock>

      <h2>Informations système</h2>
      <CodeBlock language="bash">{`uname -a              # infos kernel
hostname              # nom de la machine
whoami                # utilisateur courant
id                    # uid, gid et groupes
uptime                # temps de fonctionnement
df -h                 # espace disque
free -h               # mémoire disponible
top                   # processus en cours (q pour quitter)
ps aux                # liste tous les processus`}</CodeBlock>

      <h2>Recherche</h2>
      <CodeBlock language="bash">{`find / -name "nginx.conf"          # cherche par nom depuis /
find /var -type f -name "*.log"    # fichiers .log dans /var
find . -mtime -1                   # modifiés dans les dernières 24h
which python3                      # chemin d'un binaire
whereis nginx                      # localise binaire + man + sources`}</CodeBlock>

      <h2>Raccourcis clavier bash</h2>
      <table>
        <thead>
          <tr>
            <th>Raccourci</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>Ctrl+C</code></td><td>Interrompt le processus en cours</td></tr>
          <tr><td><code>Ctrl+Z</code></td><td>Suspend le processus</td></tr>
          <tr><td><code>Ctrl+D</code></td><td>EOF / déconnexion</td></tr>
          <tr><td><code>Ctrl+L</code></td><td>Efface l'écran</td></tr>
          <tr><td><code>Ctrl+A</code></td><td>Début de ligne</td></tr>
          <tr><td><code>Ctrl+E</code></td><td>Fin de ligne</td></tr>
          <tr><td><code>Ctrl+R</code></td><td>Recherche dans l'historique</td></tr>
          <tr><td><code>!!</code></td><td>Répète la dernière commande</td></tr>
          <tr><td><code>!sudo</code></td><td>Répète la dernière commande commençant par sudo</td></tr>
        </tbody>
      </table>
    </div>
  )
}
