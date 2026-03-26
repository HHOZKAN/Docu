import CodeBlock from '../../components/CodeBlock'
import InteractiveTerminal from '../../components/InteractiveTerminal'

export default function CommandesDeBase() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Commandes de base</h1>
      <p className="text-lg text-gray-600 mb-10">Navigation, fichiers, permissions — les essentiels du shell bash.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Savoir où l'on est (pwd)</h2>
      <p className="mb-4">Avant de se déplacer, il est crucial de savoir dans quel répertoire on se trouve actuellement. On utilise la commande <code>pwd</code> (Print Working Directory).</p>

      {/* 🚀 Voici l'intégration de ton simulateur ! */}
      <InteractiveTerminal
        instruction="Affichez le chemin complet du répertoire dans lequel vous vous trouvez actuellement."
        expectedCommand="pwd"
        successOutput="/home/user/documents"
      />

      <h2 className="text-2xl font-semibold mt-12 mb-4">2. Lister les fichiers (ls)</h2>
      <p className="mb-4">Pour voir le contenu d'un dossier, la commande de base est <code>ls</code>.</p>

      <InteractiveTerminal
        instruction="Listez tous les fichiers du répertoire courant de manière détaillée (avec les droits, la taille, et les fichiers cachés)."
        expectedCommand="ls -lah"
        successOutput="drwxr-xr-x 2 user user 4.0K Oct 24 10:00 .
drwxr-xr-x 5 user user 4.0K Oct 24 09:00 ..
-rw-r--r-- 1 user user  220 Oct 24 09:30 .bashrc
-rw-r--r-- 1 user user   12 Oct 24 10:00 notes.txt"
      />

      <h2 className="text-2xl font-semibold mt-12 mb-4">3. Manipulation de fichiers (Rappels)</h2>
      <p className="mb-4">Voici un rappel des commandes pour manipuler vos fichiers :</p>
      <CodeBlock language="bash">{`touch fichier.txt           # crée un fichier vide
mkdir dossier               # crée un répertoire
mkdir -p a/b/c              # crée l'arborescence complète
cp source.txt dest.txt      # copie un fichier
rm fichier.txt              # supprime un fichier`}</CodeBlock>
    </div>
  )
}